import React, {useState} from 'react';

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <nav className="flex justify-between text-[#181816] z-40">
            <p className="font-Abril text-2xl tracking-wide cursor-pointer md:text-3xl">Auto Space</p>
            <div className="flex gap-x-5 items-center font-Poppins lg:gap-x-10">
                <ul className="hidden md:flex text-lg gap-x-5 md:text-xl lg:gap-x-7">
                    <li className="link">shop</li>
                    <li className="link">panier</li>
                </ul>
                <button onClick={() => setMenuToggle(!menuToggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6 cursor-pointer md:w-7 md:h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                    </svg>
                </button>
            </div>
            <div className={`absolute ${menuToggle ? "top-0" : "-top-full"}  right-0 bg-gris2 w-[90%] h-screen transition-all duration-700 lg:w-[500px]`}>
                <button className="absolute right-10 top-5 md:right-24 lg:right-[8.25rem]" onClick={() => setMenuToggle(!menuToggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <ul className="flex flex-col gap-y-5 mx-10 my-20 font-Abril text-xl uppercase md:text-2xl lg:text-[1.7rem]">
                    <li className="link">catalogue</li>
                    <li className="link">Achat et Location</li>
                    <li className="link">Electrique & Hybride</li>
                    <li className="link">moto</li>
                    <li className="link">utilitaire</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
