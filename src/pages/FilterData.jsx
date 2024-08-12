/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';
import { ProductCard } from '../components';

const FilterData = () => {
    const filteredData = useSelector((state) => state.products.filteredData);
    
    return (
        <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
            {filteredData.length > 0 ?
                <>
                    <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                        {filteredData.map((product, index) => (
                            <div key={index}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </>
                : 
                <h1 className="text-center font-bold" style={{fontSize:'93px',opacity:'0.2'}}>No Prodcuts Fonud</h1>
            }
      </div>
    );
}

export default FilterData
