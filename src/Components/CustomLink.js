import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = ({children, label, path}) => {
    return (
        <Link to={path} >
            {children || label}
        </Link>
    )
}

export default CustomLink
