import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'
export const ProductContext = createContext();

const Context = (props) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {

            const { data } = await axios("/products")
            setProducts(data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <ProductContext.Provider value={[products, setProducts]}>
                <div>{props.children}</div>
            </ProductContext.Provider>
        </>
    )
}

export default Context