import React from 'react';
import Link from '../../components/Link';
import styles from './index.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
            <div>Login</div>
            <Link text={'Ingresar'} to={'/products'}  />
        </div>//si pongo div me crea un div en el dom, se puede dejar vacio
    )
}

export default Login;