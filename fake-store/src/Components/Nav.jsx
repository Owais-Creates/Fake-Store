import React, { useContext } from 'react'
import { ProductContext } from "../utils/Context"
import { Link } from 'react-router-dom';


const Nav = () => {

    const [products] = useContext(ProductContext);
    let distinctCategory = products && products.reduce((acc, cv) => [...acc, cv.category], [])
    distinctCategory = [...new Set(distinctCategory)];

    return (
        <>
            <nav className='w-[15%] bg-zinc-50 h-full flex flex-col items-center gap-3 pt-5 ' >

                <a className='py-2 px-5 border text-blue-500 border-blue-500 rounded-lg' href="/create">
                    Add New Product
                </a>
                <hr className='h-[2px] bg-neutral-950 w-[80%]' />

                <h1 className='w-[80%] text-2xl font-bold mb-3 ' >Filter Category</h1>


                {distinctCategory.map((c, i) => (
                    <Link key={i}
                        to={`/?category=${c}`} className='w-[80%]'>
                        <li className='mb-3 flex items-center '>
                            <span className=' mr-2 w-[10px] h-[10px] rounded-full bg-black'>{" "}</span>{c}
                        </li>
                    </Link>
                ))}


            </nav>
        </>
    )
}

export default Nav