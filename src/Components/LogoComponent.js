import React from 'react'
import CustomLink from "./CustomLink"

const LogoComponent = ({src, alt, path}) => {
    return (
        <CustomLink path={path} >
            <img className="h-10" src={src} alt={alt} />
        </CustomLink>
    )
}

export default LogoComponent