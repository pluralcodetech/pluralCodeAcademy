import React from 'react'
import CustomLink from '../CustomLink'


const Dropdown = ({data, title}) => {
    return (
        <li class="dropdown d-none d-xl-block">
            <a class="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            {title}
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                {
                    data?.map(({label, path}) => (
                        <CustomLink path={path}>
                            <button class="dropdown-item" type="button">{label}</button>
                        </CustomLink>
                    ))
                }
                
            </div>
        </li>


    )
}

export default Dropdown
