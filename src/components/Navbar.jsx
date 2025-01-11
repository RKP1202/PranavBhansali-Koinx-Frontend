// import React from 'react';

// const Navbar = () => {
//     return (
//         <nav className="bg-white border-b border-gray-100">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16 items-center">
//                     <div className="flex items-center">
//                         <span className="text-2xl font-bold text-blue-600">KoinX</span>
//                     </div>
//                     <div className="hidden md:flex items-center space-x-8">
//                         <a href="#" className="text-gray-900 hover:text-gray-700">
//                             Crypto Taxes
//                         </a>
//                         <a href="#" className="text-gray-900 hover:text-gray-700">
//                             Free Tools
//                         </a>
//                         <a href="#" className="text-gray-900 hover:text-gray-700">
//                             Resource Center
//                         </a>
//                         <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//                             Get Started
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">KoinX</span>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-900 hover:text-gray-700">
                            Crypto Taxes
                        </a>
                        <a href="#" className="text-gray-900 hover:text-gray-700">
                            Free Tools
                        </a>
                        <a href="#" className="text-gray-900 hover:text-gray-700">
                            Resource Center
                        </a>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div 
                className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50">
                        Crypto Taxes
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50">
                        Free Tools
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50">
                        Resource Center
                    </a>
                    <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;