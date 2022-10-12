import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./footer/Footer.jsx";

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
