import React from 'react';

const Footer = () => {
    return (
        <footer className="p-6 bg-[#181816] rounded-3xl">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src="/assets/ico.png" className="mr-3 h-8" alt="Flowbite Logo"/>
                    <span className="self-center text-2xl font-Abril tracking-wider whitespace-nowrap text-white">Auto Space</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span
                 className="hover:underline">TojoKael</span>. All Rights Reserved.
    </span>
        </footer>
    );
};

export default Footer;
