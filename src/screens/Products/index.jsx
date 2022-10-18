import React from "react";
import { useEffect } from "react";
import Link from "../../components/Link";
import styles from "./products.module.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveData } from '../../store/products/actions'


// creamos un mock de productos
const productsMock = [
    {
        id: 1,
        name: 'Producto 1',
        price: 100
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 200
    }
]

const Products = () => {

    const productsSelector = useSelector((state) => state.products);

    console.log('productsSelector', productsSelector)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveData(productsMock))
    }, [dispatch])

    return (
        <div className = { styles.container }>
            <div>Productos</div>
            <Link text = {"Cerrar sesion"} to={"/login"}/>
            <a href="/login">Recargar la pagina</a>
        </div>
    )
}

export default Products;