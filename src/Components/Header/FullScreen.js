import React from 'react'
import { BsFullscreen } from "react-icons/bs";

const FullScreen = ({className}) => {
    return (
        <li className={className}>
            <a className="nav-link dropdown-toggle-none arrow-none waves-effect waves-light" data-toggle="fullscreen" href="#">
                <BsFullscreen/>
            </a>
        </li>
    )
}

export default FullScreen
