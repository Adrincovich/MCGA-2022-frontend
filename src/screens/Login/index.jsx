import React from 'react';
import Link from '../../components/Link';
import styles from './index.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react'

const Login = () => {
    // const productsSelector = useSelector((state) => state.products);

    // console.log('productsSelector', productsSelector)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //  todos estos estados lo manejamos con la libreria react hook form, llamando a un estado
    // con esta libreria tambien manejamos los errores, asi nos ahorramos lineas de codigo

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPassError] = useState(false)

    // const handleChangeEmail = (event) => {
    //     setEmail(event.target.value)
    // }

    // const handleChangePassword = (event) => {
    //     setPassword(event.target.value)
    // }
    // PARA NO HACER UNA FUNCION EN CADA INPUT, LE PASAMOS 2 PARAMETROS A LA FUNCION handleChange

    const handleChange = (event, name) => {
        switch (name) {
            case "email":
                setEmail(event.target.value)
                break;

            case "password":
                setPassword(event.target.value)
                break;

            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email", email)
        console.log("Password", password)

        if(!email) return setEmailError(true) //salida temprana de if
        if(!password) return setPassError(true)

        setEmailError(false)
        setPassError(false)
    }

    return (
        <div className={styles.container}>
            <div>Login</div>
            <form onSubmit={handleSubmit}>

                <label>Email</label>
                <input type="email" value={email} onChange = {(event) => handleChange(event, "email")}/>  {/*ingresamos a lo que  estamos escribirndo en event.target.value */}

                {/* {
                    emailError ? <p>Email invalido</p> : null
                } */}

                {
                    emailError && <p>Email invalido</p>
                }

                <label>Password</label>
                <input type="password" value={password} onChange = {(event) => handleChange(event, "password")}/>

                {
                    passwordError && <p>Password invalido</p>
                }

                <button type='submit'>Login</button>

            </form>
            {/* <Link text={'Ingresar'} to={'/products'}  /> */}
        </div>//si pongo div me crea un div en el dom, se puede dejar vacio
    )
}
//es importante que los eventos no tengan logica completa ya que renderiza a cada rato

export default Login;