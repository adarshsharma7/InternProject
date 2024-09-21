import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLogoDesignernews } from 'react-icons/io';
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx';

function Navbar() {
    const [sideBar, setSideBar] = useState(false);
   
    // Handler to toggle sidebar visibility
    const toggleSidebar = (state) => setSideBar(state);

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

   
        </header>
    );
}

export default Navbar;
