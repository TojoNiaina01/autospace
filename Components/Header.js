import React from 'react';
import Image from 'next/image'
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="h-screen">
                <Image src="/assets/voitureLanding.jpg" layout='fill' className="object-cover w-16 h-16"/>
            </div>
            <Navbar/>
            <p className="absolute bottom-60 font-Alfa text right-1/2 translate-x-1/2 text-chestnut text-3xl tracking-wide">Découvez de nouveaux horizons.</p>
            <button className="absolute bottom-40 right-1/2 translate-x-1/2 font-DMSerif bg-chestnut text-blackC px-6 py-2 rounded-lg text-3xl tracking-wider">Explorez.</button>
        </header>
    );
};

export default Header;
