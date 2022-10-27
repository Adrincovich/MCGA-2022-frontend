import React from "react";
import { useEffect } from "react";
import Link from "../../components/Link";
import styles from "./products.module.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { saveData } from '../../store/products/actions'. YA NO LO USAMOS PORQUE ES SINCORNICO. SE IMPORTAEL THUNK
import {saveProducts} from '../../store/products/thunks'



// // creamos un mock de productos
// const productsMock = [
//     {
//         id: 1,
//         name: 'Producto 1',
//         price: 100
//     },
//     {
//         id: 2,
//         name: 'Producto 2',
//         price: 200
//     }
// ]

const Products = () => {
    const productsSelector = useSelector((state) => state.products);
    const dispatch = useDispatch();

   console.log('data',productsSelector.data);
   console.log('loading',productsSelector.isLoading);
   console.log('error',productsSelector.isError);


    useEffect(() => {
       dispatch(saveProducts());
    }, []);


    if (productsSelector.isLoading) return <h3>Loading....</h3>

 return (
   <div>{
       productsSelector.data.map((product) => {
           return (
               <div key={product.id}>
                   <h2>{product.name}</h2>
                   <p>{product.price} pesos</p>
               </div>
           )
       }
       )
       }</div>
 )
}

export default Products