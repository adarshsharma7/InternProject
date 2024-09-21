import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { IoMdArrowUp } from "react-icons/io";

// Product data
const products = [
    {
        name: "Hat",
        image: "https://th.bing.com/th/id/OIP.QBtfWbUTno_za1vke-ievgAAAA?rs=1&pid=ImgDetMain",
        link: "/products/hat",
        position: { top: '20%', left: '10%' }
    },
    {
        name: "Hoodie",
        image: "https://i.pinimg.com/originals/83/a1/61/83a161cd182e92ed3cf544a1ca69f815.jpg",
        link: "/products/hoodie",
        position: { top: '40%', left: '30%' }
    },
    {
        name: "Cup",
        image: "https://th.bing.com/th/id/R.3fc949b96f3872a0ec6f5273b884a4fa?rik=YaPdx%2frqdcJ0LQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2fLTd5eRkXc.jpg&ehk=B7qNe9RDYe2a%2bwqsN2rtYZbH2QbZGl%2b0EL61Py0Jqns%3d&risl=&pid=ImgRaw&r=0",
        link: "/products/cup",
        position: { top: '70%', left: '60%' }
    }
];

// Slide data
const slideProducts = [
    {
        imgUrl: "https://printify.com/pfh/assets/legacy/custom-products.png",
        heading1: "CREATE",
        heading2: "Custom Products",
        para: "easily add your design to a wide range of products using our free tools"
    },
    {
        imgUrl: "https://printify.com/pfh/assets/legacy/your-products.png",
        heading1: "SELL",
        heading2: "On Your Team",
        para: "You chose the products,sales price and where to sell."
    },
    {
        imgUrl: "https://printify.com/pfh/assets/legacy/fullfillment.png",
        heading1: "WE HANDLE",
        heading2: "Fulfillment",
        para: "Once an order is placed. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, quidem "
    }
];

// Slide Component for Mobile
const Slide = ({ imgUrl, heading1, heading2, para }) => (
    <div className="flex flex-col items-center text-center w-full transition-opacity duration-500">
        <div className="w-40 h-40 mb-4">
            <img src={imgUrl} alt={heading1} className="w-full h-full object-contain" />
        </div>
        <h1 className="text-lg font-bold text-green-500">{heading1}</h1>
        <h1 className="text-lg font-semibold mb-2">{heading2}</h1>
        <p className="text-gray-500">{para}</p>
    </div>
);

function ProductDisplay() {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [showScrollToTop, setShowScrollToTop] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Show the button only when the user has scrolled past the ProductDisplay component
            if (scrollPosition > 450) {
                setShowScrollToTop(true);
            }
            else {
                setShowScrollToTop(false)
            }


        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle slide change with animation
    const changeSlide = (direction) => {
        if (direction === "next" && currentSlideIndex < slideProducts.length - 1) {
            setCurrentSlideIndex(prevIndex => prevIndex + 1);
        } else if (direction === "prev" && currentSlideIndex > 0) {
            setCurrentSlideIndex(prevIndex => prevIndex - 1);
        }
    };

    return (
        <div className='bg-slate-100 flex flex-col'>
            {
                showScrollToTop && (
                    <div className={` z-50 border-2 border-slate-500 fixed bottom-7 right-3 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`} onClick={scrollToTop}>
                        {/* <span class="arrow">↑</span> */}<IoMdArrowUp />
                    </div>
                )
            }
            {/* Display Products Side by Side on Larger Screens */}
            <div className="flex flex-col md:flex-row px-4 md:px-40 py-14">
                <div className="relative bg-green-500 md:h-[600px] h-[250px] md:w-[40%] rounded-2xl">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="absolute cursor-pointer"
                            style={product.position} // Positioning each product
                            onMouseEnter={() => setHoveredProduct(product.name)} // Set hovered product
                            onMouseLeave={() => setHoveredProduct(null)} // Remove hovered product
                            onClick={() => window.location.href = product.link} // Redirect on click
                        >
                            <img src={product.image} alt={product.name} className="w-20 h-20" />
                            {hoveredProduct === product.name && (
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded shadow-lg">
                                    {product.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='md:w-[60%] flex md:items-end'>
                    <div className='flex flex-col bg-white pt-14 pl-8 pb-6 md:pl-40 pr-14 md:pr-8 h-[70%]'>
                        <h1 className='font-bold text-3xl mb-6'>Easily add your design to a wide range of products</h1>
                        <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                        <div className='flex gap-2 text-green-500 items-end'>
                            <a className='mt-4' href="#products">All Products</a>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            {/* for desktop */}
            <div className='hidden md:flex w-full justify-center items-center px-48 py-32'>
                {
                    slideProducts.map((item, index) => (
                        <div key={index} className="flex flex-col w-full transition-opacity duration-500">
                            <div className="w-40 h-40 mb-4">
                                <img src={item.imgUrl} alt={item.heading1} className="w-full h-full object-contain" />
                            </div>
                            <h1 className="text-lg font-bold text-green-500">{item.heading1}</h1>
                            <h1 className="text-lg font-semibold mb-2">{item.heading2}</h1>
                            <p className="text-gray-500">{item.para}</p>
                        </div>
                    ))
                }
            </div>



            {/* Mobile Slider (Visible on Small Screens Only) */}
            <div className='md:hidden w-full flex justify-center items-center px-16 py-12'>
                <div className="flex flex-col items-center text-center w-full">
                    <Slide {...slideProducts[currentSlideIndex]} />

                    {/* Slider Controls for Mobile */}
                    <div className='flex justify-between items-center w-full md:w-1/3 mt-4'>
                        {/* Previous Button */}
                        <button disabled={currentSlideIndex === 0} onClick={() => changeSlide("prev")} className="text-lg">
                            <FaAngleLeft className={`${currentSlideIndex === 0 ? "text-slate-400" : "text-green-500"}`} />
                        </button>

                        {/* Dots for pagination */}
                        <div className='flex gap-1 justify-center'>
                            {slideProducts.map((_, index) => (
                                <div key={index} className={`${currentSlideIndex === index ? "bg-green-500" : "bg-slate-400"} w-4 h-4 rounded-full`} />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button disabled={currentSlideIndex === slideProducts.length - 1} onClick={() => changeSlide("next")} className="text-lg">
                            <FaAngleRight className={`${currentSlideIndex === slideProducts.length - 1 ? "text-slate-400" : "text-green-500"}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
