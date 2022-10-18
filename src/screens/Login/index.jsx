import React from 'react';
import Link from '../../components/Link';
import styles from './index.module.css';
import { useSelector } from 'react-redux';

const Login = () => {
    // const productsSelector = useSelector((state) => state.products);

    // console.log('productsSelector', productsSelector)

    return (
        <div className={styles.container}>
            <div>Login</div>
            <Link text={'Ingresar'} to={'/products'}  />
        </div>//si pongo div me crea un div en el dom, se puede dejar vacio
    )
}

export default Login;