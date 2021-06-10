import React from 'react'
import { FiSearch } from 'react-icons/fi'

const MobileSearch = ({className}) => {
    return (
        <li className={className}>
            <a class="nav-link dropdown-toggle-none arrow-none waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <FiSearch/>
            </a>
            <div class="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                <form class="p-3">
                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                </form>
            </div>
        </li>
    )
}

export default MobileSearch
