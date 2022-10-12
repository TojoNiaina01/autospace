import React from 'react'

export default function Landing() {
    return (
        <section className="flex flex-col h-screen">
            <div className="pt-16 md:pt-24">
                <p className="font-Poppins tracking-wide uppercase md:text-xl">Land Rover</p>
                <h1 className="font-extrabold text-6xl md:text-7xl lg:text-5xl">Strong <span
                    className="hidden md:block">efficient</span> built for <span className="text-[#d00000]">Xtrem</span>
                </h1>
            </div>
            <div className="pt-5 hidden lg:block">
                <button
                    className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                    <span
                        className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span
                        className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span
                        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Reserve now</span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </button>

            </div>
            <div className="absolute top-0 left-0 h-32 w-full -z-10">
                <img src="/assets/img/landing.jpg" className="object-cover h-[100vh] w-[100vw]"
                     alt="4x4 dans le desert"/>
            </div>
            <button className="absolute bottom-5 right-1/2 text-white animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"/>
                </svg>
            </button>
        </section>
    )
}
