import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 text-center text-xs p-3 mt-32 w-full">
      <div className="flex justify-between px-10 py-5">
        <div>
          <h4 className="font-bold text-lg mb-3">Integrations</h4>
          <ul>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Shopify</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Etsy</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">eBay</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Amazon</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">WooCommerce</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Wix</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Discover</h4>
          <ul>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Blog</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Products</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Pricing</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Shipping Rates</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Mockup Generator</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Start Selling</h4>
          <ul>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Custom T-shirts</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Sell on Etsy</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Sell on Social Media</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Start POD Business</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Printify</h4>
          <ul>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Print on Demand</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Print Providers</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Affiliate</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Contact Us</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-300 mt-5 p-3">
        <ul className="flex justify-center space-x-5">
          <li><a href="#" className="text-gray-700 hover:text-black">Intellectual Property Policy</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Terms of Service</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Security</a></li>
        </ul>
        <p className="text-gray-500 mt-3">© 2024 Printify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
