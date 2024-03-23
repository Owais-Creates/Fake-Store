import { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from "../utils/Context"
import Loading from './Loading'
import axios from '../utils/axios'


const Home = () => {

    const [products] = useContext(ProductContext);
    const { search } = useLocation()
    const category = decodeURIComponent(search.split('=')[1])

    const [filteredProducts, setFilteredProducts] = useState(null);

    const getProductsCategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFilteredProducts(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!filteredProducts) getProductsCategory(products)
        if (category != "undefined") getProductsCategory();
    }, [category, products])

    return (


        <>
            <Nav />
            {products ? (<div className='w-[85%] h-full p-5 pt-16 flex flex-wrap gap-4 justify-between overflow-x-hidden overflow-y-auto' >

                {filteredProducts && filteredProducts.map((p, i) => (

                    < Link key={p.id} to={`/details/${p.id}`} className='w-[18%] h-[32vh] border flex flex-col items-center p-3 shadow hover:scale-105 hover:text-blue-500 ' >

                        <div div className=' w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 '
                            style={{ backgroundImage: `url(${p.image})` }} ></div>


                        <h1>{p.title}</h1>

                    </Link >
                ))}

            </div >) : (<Loading />)}
        </>

    )
}

export default Home