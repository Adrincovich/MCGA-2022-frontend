import React from "react";
import { Link as LinkRouter } from "react-router-dom"

const Link = ({text, to}) => {
    return (
        <LinkRouter to={to}>
            {text}
        </LinkRouter>
    )
}

export default Link