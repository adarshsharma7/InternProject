import React from 'react';

function CallToAction() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0A2D36] text-white rounded-lg p-6 mx-5 md:mx-32 mt-12 md:mt-36">
            {/* Left Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold">Make Money, Risk-Free</h2>
                <p className="text-gray-300">
                    You pay for fulfillment only when you make a sale
                </p>

                {/* Pricing Box */}
                <div className="bg-[#112E39] rounded-lg p-6 space-y-2">
                    <div className="flex justify-between">
                        <span>You sell a t-shirt</span>
                        <span>$30</span>
                    </div>
                    <div className="flex justify-between">
                        <span>You pay for its production</span>
                        <span>$12</span>
                    </div>
                    <hr className="border-gray-600" />
                    <div className="flex justify-between font-bold text-green-400">
                        <span>Your profit</span>
                        <span>$18</span>
                    </div>
                </div>

                {/* Button */}
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">
                    Start selling
                </button>

                {/* Additional Information */}
                <p className="text-sm text-gray-400">
                    100% Free to use · 900+ Products · Largest print network
                </p>
            </div>

           
            <div className="hidden md:block w-full md:w-1/2">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/046/100/895/non_2x/a-man-planting-money-or-investing-money-concept-flat-illustration-vector.jpg" 
                    alt="Growing Profits"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
}

export default CallToAction;
