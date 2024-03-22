import React, { useEffect, useState } from 'react'
import axios from "../utils/axios"
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const Details = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getSingleProduct = async () => {
    try {

      const { data } = await axios.get(`/products/${id}`)
      setProduct(data);


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  return (
    <>
      {product ? (
        <div className="w-[70%] h-screen m-auto flex items-center justify-center">
          <div className="w-[70%] h-[90%] flex justify-center gap-10">
            <img
              className="h-[200px] w-[200px] mt-[150px]"
              src={`${product.image}`}
              alt="img"
            />
            <div className="content mt-[150px] flex flex-col gap-5">
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <h2 className="text-2xl">$ {product.price}</h2>
              <p className="text-[1.2rem] text-zinc-700">{product.description}</p>
              <p className="text-[1.2rem] uppercase">{product.category}</p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );

}

export default Details