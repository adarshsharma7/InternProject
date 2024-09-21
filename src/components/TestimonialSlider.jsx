import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const testimonials = [
    {
        name: 'Robert A. Voltaire',
        link: 'Store link',
        image: 'https://via.placeholder.com/150',
        rating: 5,
        text: 'Printify has been an incredible service for musicians...',
    },
    {
        name: 'Quinten Barney',
        link: 'Etsy Merchant',
        image: 'https://via.placeholder.com/150',
        rating: 5,
        text: 'We chose Printify because of their offerings...',
    },
    {
        name: 'Nikki',
        link: 'Store link',
        image: 'https://via.placeholder.com/150',
        rating: 5,
        text: 'Printify has been amazing as we grow our business...',
    },
];

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
    return (
        <button
            className="absolute right-16 top-[95%] md:right-20 text-gray-700 p-2 z-10"
            onClick={onClick}
        >
            <FaAngleRight size={30} />
        </button>
    );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
    return (
        <button
            className="absolute left-16 top-[95%] md:left-20 text-gray-700 p-2 z-10"
            onClick={onClick}
        >
            <FaAngleLeft size={30} />
        </button>
    );
};

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        draggable: true,
        appendDots: dots => (
            <div style={{ position: "relative" }}>
                <ul className="flex justify-center items-center gap-4">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div
                className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-700"
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                }}
            />
        ),
    };

    return (
        <div className="bg-gray-50 py-16 mt-52 md:mt-96 relative">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">Trusted by over 8M sellers around the world</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                </p>
            </div>

            {/* Slider */}
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="rounded-full w-16 h-16 mb-4"
                            />
                            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-green-500">{testimonial.link}</p>
                            <div className="flex items-center mt-2 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118L10 14.627l-3.974 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L1.667 10.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm text-center">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
