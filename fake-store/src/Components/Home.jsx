import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Nav />
            <Link to="/details/1" className='w-[85%] h-full p-5 pt-16 flex flex-wrap gap-4 justify-between            overflow-x-hidden overflow-y-auto' >

                {/* Card */}
                <div className='w-[18%] h-[32vh] border flex flex-col items-center p-3 shadow hover:scale-105 hover:text-blue-500 ' >

                    {/* image */}
                    <div className=' w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 '
                        style={{ backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)" }} ></div>

                    {/* heading */}
                    <h1 >Product Name</h1>

                </div>

            </Link>
        </>
    )
}

export default Home