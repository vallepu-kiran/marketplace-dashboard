'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"><span className="text-orange-400 mr-2">•</span> About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"><span className="text-orange-400 mr-2">•</span> Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"><span className="text-orange-400 mr-2">•</span> Process</a></li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-8">Useful links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"><span className="text-orange-400 mr-2">•</span> FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"><span className="text-orange-400 mr-2">•</span> Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"><span className="text-orange-400 mr-2">•</span> Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"><span className="text-orange-400 mr-2">•</span> Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"><span className="text-orange-400 mr-2">•</span> News & Blogs</a></li>
            </ul>
          </div>

          {/* Company Info - Center */}
          <div className="text-center">
            <img 
              src="/image 3.png" 
              alt="iPROCURE" 
              className="h-10 w-auto mb-4 mx-auto brightness-0 invert"
              onError={(e) => {
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const div = document.createElement('div');
                  div.className = 'text-3xl font-bold text-white mb-4 tracking-wider';
                  div.textContent = 'iPROCURE';
                  parent.replaceChild(div, e.currentTarget);
                }
              }}
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              An innovative tech platform by Big Trader Technology<br />
              simplifying B2B procurement in Qatar.
            </p>
            
            <div className="flex justify-center space-x-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.099 4.666-1.203 1.202-2.808 1.93-4.666 2.098-.343.031-.693.047-1.051.047-.359 0-.709-.016-1.051-.047-1.858-.168-3.463-.896-4.666-2.098C2.832 11.623 2.104 10.018 1.936 8.16 1.905 7.817 1.889 7.467 1.889 7.109c0-.359.016-.708.047-1.051.168-1.858.896-3.463 2.099-4.666C5.237 0.19 6.842-.538 8.7-.706 9.043-.737 9.393-.753 9.751-.753c.359 0 .708.016 1.051.047 1.858.168 3.463.896 4.666 2.099 1.202 1.203 1.93 2.808 2.098 4.666.031.343.047.692.047 1.051 0 .358-.016.708-.047 1.051z"/></svg>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.082.342-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/></svg>
              </div>
            </div>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Informations</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="font-medium text-gray-200">Get in Touch With Us</p>
                  <p className="text-gray-300">iProcure.ai, Doha, Qatar</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <p className="font-medium text-gray-200">Email Address</p>
                  <p className="text-gray-300">info@iprocure.ai</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <p className="font-medium text-gray-200">Phone Number</p>
                  <p className="text-gray-300">+974 7799 9600</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 <span className="text-orange-400">iProcure.ai</span> All Rights Reserved
          </p>
        </div>
      </div>
      
      {/* Chat widget */}
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-colors">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
          </svg>
          <span className="text-sm font-medium">Chat with us</span>
        </div>
      </div>
    </footer>
  );
}