import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = ({children, label, path, className}) => {
    return (
        <Link to={path} className={className ? "dropdown-item" : null} >
            {children || label}
        </Link>
    )
}

export default CustomLink
