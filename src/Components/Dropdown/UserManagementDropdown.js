import React from 'react'
import CustomLink from '../CustomLink'
import { GrUserManager } from "react-icons/gr";

const UserManagementDropdown = () => {
    return (
        <li>
            <a href="#sidebarDashboards" data-bs-toggle="collapse">
                <GrUserManager/>
                <span class="badge bg-success rounded-pill float-end">1</span>
                <span> User Management </span>
            </a>
            <div class="collapse" id="sidebarDashboards">
                <ul class="nav-second-level ">
                    <CustomLink className={true}  path="/UserManagementt_List">
                        List 
                    </CustomLink>
                </ul>
            </div>
        </li>
    )
}

export default UserManagementDropdown