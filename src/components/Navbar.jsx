import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLogoDesignernews } from 'react-icons/io';
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx';

function Navbar() {
    const [sideBar, setSideBar] = useState(false);
    const [openSection, setOpenSection] = useState(null); // To track which section is open

    // Handler to toggle sidebar visibility
    const toggleSidebar = (state) => setSideBar(state);

    // Handler to toggle accordion sections
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section); // Close if already open
    };

    // Sidebar structure: Array of objects
    const menuItems = [
        { title: 'Catalog', links: [{ text: 'Catalog Link', href: '#catalog' }] },
        {
            title: 'How it works',
            links: [
                { text: 'How to start', href: '#how-to-start' },
                { text: 'Learn more', href: '#learn-more' },
            ],
        },
        { title: 'Pricing', links: [{ text: 'Pricing Details', href: '#pricing' }] },
        { title: 'Blog', links: [{ text: 'Latest Posts', href: '#blog' }] },
        {
            title: 'Services',
            links: [
                { text: 'Printify Studio', href: '#studio' },
                { text: 'Express Delivery', href: '#express' },
                { text: 'Transfer Products', href: '#transfer' },
                { text: 'Order in Bulk', href: '#bulk' },
                { text: 'Experts Program', href: '#experts' },
            ],
        },
        {
            title: 'Use-cases',
            links: [
                { text: 'E-commerce', href: '#ecommerce' },
                { text: 'Retail', href: '#retail' },
            ],
        },
        {
            title: 'Need help?',
            links: [
                { text: 'Customer Support', href: '#support' },
                { text: 'FAQ', href: '#faq' },
            ],
        },
    ];

    return (
        <header className="w-full h-16 border-b border-gray-300 flex justify-between items-center p-4">
            {/* Left section with Hamburger icon and Logo */}
            <div className="leftBox flex gap-2 items-center">
                <div
                    onClick={() => toggleSidebar(true)}
                    className="hamburger text-2xl cursor-pointer"
                    aria-label="Open Sidebar"
                >
                    <GiHamburgerMenu />
                </div>
                <div className="logo text-2xl">
                    <IoLogoDesignernews />
                </div>
            </div>

            {/* Right section with Login and Sign-up buttons */}
            <div className="rightBox flex gap-2">
                <button className="py-1 px-4 border-2 border-slate-500">Login</button>
                <button className="py-1 px-4 border-2 border-slate-500 bg-green-600 text-white rounded-md">
                    Sign up
                </button>
            </div>

            {/* Background overlay (appears with blur when sidebar opens) */}
            {sideBar && (
                <div
                    className={`fixed inset-0 bg-black z-40 transition-all duration-700 ${sideBar ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0 backdrop-blur-0'
                        }`}
                    onClick={() => toggleSidebar(false)} // Close sidebar when clicking outside
                ></div>
            )}

            {/* Sidebar component */}
            <div
                className={`fixed top-0 left-0 w-[70%] h-full bg-white z-50 transform transition-all ease-[cubic-bezier(0.25, 1, 0.5, 1)] duration-700 flex flex-col p-4 ${sideBar ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
                    }`}
            >
                {/* Sidebar header with close button */}
                <div className="text-gray-800 flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Menu</h1>
                    <RxCross1 className="cursor-pointer text-2xl" onClick={() => toggleSidebar(false)} />
                </div>

                {/* Dynamically rendered menu items */}
                <ul className="space-y-4">
                    {menuItems.map((menuItem, index) => (
                        <li key={index}>
                            {/* Check if the item has sub-links */}
                            {menuItem.links.length > 1 ? (
                                <>
                                    <div
                                        onClick={() => toggleSection(menuItem.title)}
                                        className="flex justify-between items-center text-gray-800 cursor-pointer"
                                    >
                                        <span className="text-lg">{menuItem.title}</span>
                                        <span>{openSection === menuItem.title ? <FaSortUp /> : <FaSortDown />}</span>
                                    </div>
                                    {openSection === menuItem.title && (
                                        <ul className="pl-4 mt-2 space-y-2 text-gray-700">
                                            {menuItem.links.map((link, i) => (
                                                <li key={i}>
                                                    <a href={link.href} className="hover:text-gray-500">
                                                        {link.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <a href={menuItem.links[0].href} className="text-gray-800 hover:text-gray-600 text-lg">
                                    {menuItem.title}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
