import React from 'react';

const platforms = [
    { name: 'API', link: '/api', image: 'https://th.bing.com/th/id/OIP.eiN8UHpq4jdi6_4393d8hwHaEl?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', style: { top: '20%', left: '10%' }, mobileStyle: { top: '10%', left: '25%' } },
    { name: 'Etsy', link: '/etsy', image: 'https://th.bing.com/th/id/OIP.OQwYxKMmLIqEcsPd0X5RaQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7', style: { top: '40%', right: '15%' }, mobileStyle: { top: '30%', right: '10%' } },
    { name: 'Wix', link: '/wix', image: 'https://th.bing.com/th/id/OIP.aHc1vB5Orcb5qMRi0M-wGwHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7', style: { top: '30%', left: '50%' }, mobileStyle: { top: '50%', left: '20%' } },
    { name: 'Shopify', link: '/shopify', image: 'https://th.bing.com/th/id/OIP.OSgrxD559IOgjj6br4opMQHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', style: { top: '60%', left: '30%' }, mobileStyle: { top: '70%', left: '30%' } },
    { name: 'Squarespace', link: '/squarespace', image: 'https://th.bing.com/th/id/OIP.y75MBzkrY7D6WTos5x7EXgHaEh?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', style: { top: '50%', right: '30%' }, mobileStyle: { top: '90%', right: '5%' } },
    { name: 'WooCommerce', link: '/woocommerce', image: 'https://th.bing.com/th/id/OIP.FWzuEMwSCpq0hjk32YlaXQHaEb?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', style: { top: '75%', left: '60%' }, mobileStyle: { top: '110%', left: '15%' } },
    { name: 'BigCommerce', link: '/bigcommerce', image: 'https://th.bing.com/th/id/OIP.z9mmcc1bF_LTADH81ryMXwHaBq?w=350&h=78&c=7&r=0&o=5&dpr=1.3&pid=1.7', style: { top: '80%', right: '5%' }, mobileStyle: { top: '130%', right: '15%' } },
];

const Integrations = () => {
    return (
        <div className="bg-gray-50 py-16 relative h-[600px] md:h-[600px] lg:h-[700px]">
            <div className="text-center ">
                <h1 className="text-4xl font-bold">Connect your store</h1>
                <p className="text-gray-600">Easily integrate with major e-commerce platforms and marketplaces</p>
            </div>

            {/* Container with relative positioning */}
            <div className="relative w-full h-full mb-10">
                {platforms.map((platform, index) => (
                    <a
                        key={index}
                        href={platform.link}
                        className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex justify-center items-center bg-white rounded-lg shadow-lg transform hover:-translate-y-4 transition-all duration-300 hover:shadow-xl"
                        style={window.innerWidth >= 768 ? platform.style : platform.mobileStyle}
                    >
                        <img src={platform.image} alt={platform.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                    </a>
                ))}
            </div>

            {/* Custom Solutions Section */}
            <div className="bg-green-100 p-4 md:p-8 mx-4 sm:mx-10 md:mx-48 rounded-xl mt-16 md:mt-48 lg:mt-48 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                {/* Background gradient decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-400 rounded-xl transform rotate-6 scale-125 -z-10"></div>

                {/* Text */}
                <h2 className="text-center md:text-left w-full md:w-[600px] text-sm sm:text-lg md:text-3xl lg:text-4xl font-bold text-blue-700 mb-4 md:mb-0">
                    Are you a large business looking for custom solutions?
                </h2>

                {/* Button */}
                <a
                    href="/contact-sales"
                    className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                >
                    Talk to sales
                </a>
            </div>

        </div>
    );
};

export default Integrations;
