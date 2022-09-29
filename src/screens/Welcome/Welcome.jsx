import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <>
            <div>Welcome</div>
            <Link to={'/login'}>Ir al login</Link>
        </>//si pongo div me crea un div en el dom, se puede dejar vacio
    )
}

export default Welcome