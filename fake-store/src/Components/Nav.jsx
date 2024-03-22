import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className='w-[15%] bg-zinc-50 h-full flex flex-col items-center gap-3 pt-5 ' >

                <a className='py-2 px-5 border text-blue-500 border-blue-500 rounded-lg' href="/create">
                    Add New Product
                </a>
                <hr className='h-[2px] bg-neutral-950 w-[80%]' />

                <h1 className='w-[80%] text-2xl font-bold mb-3 ' >Filter Category</h1>

                <ul className='w-[80%]'>
                    <li className='mb-3 flex items-center '>
                        <span className=' mr-2 w-[15px] h-[15px] rounded-full bg-red-200'>{" "}</span>Cat1
                    </li>

                    <li className='mb-3 flex items-center '>
                        <span className=' mr-2 w-[15px] h-[15px] rounded-full bg-green-200'>{" "}</span>Cat2
                    </li>

                    <li className='mb-3 flex items-center '>
                        <span className=' mr-2 w-[15px] h-[15px] rounded-full bg-blue-200'>{" "}</span>Cat2
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Nav