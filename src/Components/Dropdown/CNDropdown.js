import React from 'react'
import CustomLink from '../CustomLink'

const CNDropdown = ({className}) => {
    return (
        <li className={className}>
            <a class="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                Create New
                <i class="mdi mdi-chevron-down"></i> 
            </a>
            <div class="dropdown-menu">
                
                <CustomLink className={true} path="/new_course">
                    New Course
                </CustomLink>

                <CustomLink className={true} path="/new_discount">
                    New Discount
                </CustomLink>
                
                <CustomLink className={true} path="/new_event">
                    New Event
                </CustomLink>
                
                <div class="dropdown-divider"></div>

                <CustomLink className={true} path="/community">
                    Community
                </CustomLink>

            </div>
        </li>
    )
}

export default CNDropdown
