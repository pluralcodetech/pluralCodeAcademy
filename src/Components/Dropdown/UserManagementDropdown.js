import React, { useState } from 'react'
import CustomLink from '../CustomLink'
import { GrUserManager } from "react-icons/gr";
import { useSelector } from 'react-redux';

const UserManagementDropdown = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    const [state, setState] = useState(false);
    

    const handleUMIconText = (e) => {
        e.preventDefault();
        setState(true);
    }
    return (
        <>

        {
            leftSideMenuContent ? (
                <li>
                    <a href="#sidebarUserManagement" data-bs-toggle="collapse">
                        <GrUserManager/>
                        <span class="badge bg-success rounded-pill float-end">1</span>
                        <span> User Management </span>
                    </a>
                    <div class="collapse" id="sidebarUserManagement">
                        <ul class="nav-second-level ">
                            <CustomLink className={true}  path="/UserManagementt_List">
                                List 
                            </CustomLink>
                        </ul>
                    </div>
                </li>

            ) : (
                <li class="btn-group dropend">
                    <a href="#sidebarDiscount" data-bs-toggle="collapse" data-bs-toggle="dropdown" aria-expanded="false">
                        <GrUserManager onClick={(e)=>handleUMIconText(e)}/>
                        {
                            state? (<span> User Management </span>) : null
                        }
                        
                    </a>
                    <ul class="dropdown-menu ">
                        <CustomLink className={true}  path="/UserManagementt_List">
                            List 
                        </CustomLink>
                    </ul>
                </li>

            )
        }
        
        
        </>
    )
}

export default UserManagementDropdown
