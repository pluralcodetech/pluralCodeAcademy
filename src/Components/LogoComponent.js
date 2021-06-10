import React from 'react'
import CustomLink from "./CustomLink"

const LogoComponent = ({src, alt, path, text, logoText}) => {
    return (
        <CustomLink path={path} >
            <img className="h-10" src={src} alt={alt}  />
            {text ? (
                <span class="logo-lg-text-light">{logoText}</span>
            ) : null}
        </CustomLink>
    )
}

export default LogoComponent