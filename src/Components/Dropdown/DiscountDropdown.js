import React from 'react'
import CustomLink from '../CustomLink'
import { FiActivity } from "react-icons/fi";

const DiscountDropdown = () => {
    return (
        <li>
            <a href="#sidebarDashboards" data-bs-toggle="collapse">
                <FiActivity/>
                <span class="badge bg-success rounded-pill float-end">2</span>
                <span> Discount </span>
            </a>
            <div class="collapse" id="sidebarDashboards">
                <ul class="nav-second-level ">
                    <CustomLink className={true}  path="/discount_List">
                        List 
                    </CustomLink>
                    <CustomLink className={true} path="/detail">
                        Details
                    </CustomLink>
                </ul>
            </div>
        </li>
    )
}

export default DiscountDropdown
