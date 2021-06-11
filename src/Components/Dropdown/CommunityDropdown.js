import React from 'react'
import CustomLink from '../CustomLink'
import { GiField } from "react-icons/gi";

const CommunityDropdown = () => {
    return (
        <li>
            <a href="#sidebarDashboards" data-bs-toggle="collapse">
                <GiField/>
                <span class="badge bg-success rounded-pill float-end">1</span>
                <span> Community </span>
            </a>
            <div class="collapse" id="sidebarDashboards">
                <ul class="nav-second-level ">
                    <CustomLink className={true}  path="/community">
                        List 
                    </CustomLink>
                </ul>
            </div>
        </li>
    )
}

export default CommunityDropdown
