import React, {useContext} from 'react';
import {Tab} from "@headlessui/react";
import {dataContext} from "../../main.jsx";
import Products from "../Products.jsx";

export default function Body() {
    const categories = ["BMW", "MERCEDECE", "AUDI", "KAWASAKI"];
    const data = useContext(dataContext);
    const bmw = data[0].bmw;
    const mercedece = data[0].mercedece;
    const audi = data[0].audi;
    const kawasaki = data[0].kawasaki;
    return (
        <section>
            <h2></h2>
            <Tab.Group>
                <Tab.List className="flex justify-center">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            className={({selected}) =>
                                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                                    selected
                                        ? "borderGradient bg-[#35383C] text-white"
                                        : "border-b-2 border-[#35383C] text-[#747474]"
                                }`
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                    <Tab.Panel className="tabPanel"><Products data={bmw}/></Tab.Panel>
                    <Tab.Panel className="tabPanel"><Products data={mercedece}/></Tab.Panel>
                    <Tab.Panel className="tabPanel"><Products data={audi}/></Tab.Panel>
                    <Tab.Panel className="tabPanel"><Products data={kawasaki}/></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className="flex justify-center items-center pb-6">
                <button
                    className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                    <span
                        className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                    <span
                        className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                    <span
                        className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Afficher plus</span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </button>
            </div>
        </section>
    )
}
