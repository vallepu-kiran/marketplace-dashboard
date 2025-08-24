import { NextRequest, NextResponse } from 'next/server';
import { getProducts, mockProducts, type ProductFilters } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    const filters: ProductFilters = {
      category: searchParams.get('category') || undefined,
      status: searchParams.get('status') as ProductFilters['status'] || undefined,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') as ProductFilters['sortBy'] || 'createdAt',
      sortOrder: searchParams.get('sortOrder') as ProductFilters['sortOrder'] || 'desc',
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 10,
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    const result = getProducts(filters);

    return NextResponse.json({
      success: true,
      data: result.data,
      pagination: result.pagination,
      filters: filters,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.price || !body.vendor || !body.category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newProduct = {
      id: (mockProducts.length + 1).toString(),
      name: body.name,
      description: body.description || '',
      price: Number(body.price),
      stock: Number(body.stock) || 0,
      category: body.category,
      status: body.status || 'active',
      vendor: body.vendor,
      images: body.images || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: body.tags || [],
      specifications: body.specifications || {},
      rating: body.rating || 0,
      reviewCount: body.reviewCount || 0,
    };

    // In a real app, this would save to database
    mockProducts.unshift(newProduct);

    return NextResponse.json({
      success: true,
      data: newProduct,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}