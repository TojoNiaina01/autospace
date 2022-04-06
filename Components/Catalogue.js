import React from 'react';
import Image from "next/image";

const Catalogue = () => {
    return (
        <main className="h-screen mx-5">
            <h2>Berlines</h2>
            <div className="flex justify-around">
                <div className=" inline-block py-2">
                <div className="relative h-48 w-48 object-contain">
                    <Image src="/assets/44.png" layout="fill" alt="4x4 Toyota"/>
                </div>
                <p className="font-semibold text-xl">Toyota tamaco</p>
                <p className="font-medium">Diesel</p>
                <p className="font-normal">à partir de 27 300 £</p>
            </div>
            <div className=" inline-block py-2">
                <div className="relative h-48 w-48 object-contain">
                    <Image src="/assets/44.png" layout="fill" alt="4x4 Toyota"/>
                </div>
                <p className="font-semibold text-xl">Toyota tamaco</p>
                <p className="font-medium">Diesel</p>
                <p className="font-normal">à partir de 27 300 £</p>
            </div>
            <div className=" inline-block py-2">
                <div className="relative h-48 w-48 object-contain">
                    <Image src="/assets/44.png" layout="fill" alt="4x4 Toyota"/>
                </div>
                <p className="font-semibold text-xl">Toyota tamaco</p>
                <p className="font-medium">Diesel</p>
                <p className="font-normal">à partir de 27 300 £</p>
            </div>
            <div className=" inline-block py-2">
                <div className="relative h-48 w-48 object-contain">
                    <Image src="/assets/44.png" layout="fill" alt="4x4 Toyota"/>
                </div>
                <p className="font-semibold text-xl">Toyota tamaco</p>
                <p className="font-medium">Diesel</p>
                <p className="font-normal">à partir de 27 300 £</p>
            </div>
        </div>
            </main>
    );
};

export default Catalogue;
