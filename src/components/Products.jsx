import React from 'react';

const Products = ({data}) => {

    return (
        <section className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-4">
            {
                data.map((product) => (
                    <div key={product.series} className="bg-[#fcf5ee]/50 rounded-3xl p-5 cursor-pointer hover:bg-[#fcf5ee] hover:scale-[1.1] transition-all duration-300">
                        <img src={product.image} className="object-contain" alt="vehicule"/>
                        <h3><span className="font-semibold">Modèle</span> : {product.modele} </h3>
                        <p><span className="font-semibold">Série</span> : {product.series}</p>
                        <p><span className="font-semibold">Année</span> : {product.année}</p>
                        <p><span className="font-semibold">Kilométrage</span> : {product.kilometrage} Km</p>
                        <p><span className="font-semibold">Prix</span> : {product.price}</p>
                    </div>
                ))
            }
        </section>
    );
};

export default Products;
