import { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { ProductContext } from "../utils/Context"
import Loading from './Loading'


const Home = () => {

    const [products] = useContext(ProductContext);

    return (


        <>
            <Nav />
            <div className='w-[85%] h-full p-5 pt-16 flex flex-wrap gap-4 justify-between overflow-x-hidden overflow-y-auto' >

                {products.map((p, i) => (

                    < Link key={p.id} to={`/details/${p.id}`} className='w-[18%] h-[32vh] border flex flex-col items-center p-3 shadow hover:scale-105 hover:text-blue-500 ' >

                        <div div className=' w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 '
                            style={{ backgroundImage: `url(${p.image})` }} ></div>


                        <h1>{p.title}</h1>

                    </Link >
                ))}

            </div >
        </>

    )
}

export default Home