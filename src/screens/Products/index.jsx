import React from "react";
import Link from "../../components/Link";
import styles from "./products.module.css";

const Products = () => {
    return (
        <div className = { styles.container }>
            <div>Productos</div>
            <Link text = {"Cerrar sesion"} to={"/login"}/>
            <a href="/login">Recargar la pagina</a>
        </div>
    )
}

export default Products;