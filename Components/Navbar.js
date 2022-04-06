import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    return (<nav className="absolute top-6 flex justify-around w-full">
        <p className="font-Alfa text-2xl text-gray-200">Auto Place.</p>
        <ul className="flex gap-8">
            <li className="text-white font-semibold text-lg lienAnime">
                <Link href="#">
                    <a>Berlines</a>
                </Link>
            </li>
            <li className="text-white font-semibold text-lg lienAnime">
                <Link href="#">
                    <a>Coupés</a>
                </Link>
            </li>
            <li className="text-white font-semibold text-lg lienAnime">
                <Link href="#">
                    <a>Cabriolets</a>
                </Link>
            </li>
            <li className="text-white font-semibold text-lg lienAnime">
                <Link href="#">
                    <a>Suv</a>
                </Link>
            </li>
            <li className="text-white font-semibold text-lg lienAnime">
                <Link href="#">
                    <a>Pickup</a>
                </Link>
            </li>
        </ul>
    </nav>);
};

export default Navbar;
