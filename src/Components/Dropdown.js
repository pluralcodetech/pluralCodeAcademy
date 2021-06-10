import React from 'react'
import CustomLink from './CustomLink'

const Dropdown = ({data, title}) => {
    console.log(data)
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {title}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                {
                    data?.map(({label, path}) => (
                        <CustomLink path={path}>
                            <button class="dropdown-item" type="button">{label}</button>
                        </CustomLink>
                    ))
                }
                
            </div>
        </div>

        // <div class="dropdown">
        // <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //     Dropdown
        // </button>
        // <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        //     <button class="dropdown-item" type="button">Action</button>
        //     <button class="dropdown-item" type="button">Another action</button>
        //     <button class="dropdown-item" type="button">Something else here</button>
        // </div>
        // </div>
    )
}

export default Dropdown
