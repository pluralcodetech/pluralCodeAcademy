import React from 'react'
import user from "../../Assets/image/users/user-6.jpg"
import CustomLink from '../CustomLink'

const User = ({className}) => {
    return (
        <li className={className}>
            <a class="nav-link dropdown-toggle-none nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <img src={user} alt="user-image" class="rounded-circle"/>
                <span class="pro-user-name ms-1">
                    user 
                    <i class="mdi mdi-chevron-down"></i> 
                </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end profile-dropdown ">
                
                <div class="dropdown-header noti-title">
                    <h6 class="text-overflow m-0">Welcome !</h6>
                </div>

                <CustomLink className={true} path="/account">
                    <i class="fe-user"></i>
                    <span>My Account</span>
                </CustomLink>
                
                <CustomLink className={true} path="/settings">
                    <i class="fe-settings"></i>
                    <span>Settings</span>
                </CustomLink>

                <div class="dropdown-divider"></div>

                
                <CustomLink className={true} path="/logout">
                    <i class="fe-log-out"></i>
                    <span>Logout</span>
                </CustomLink>

            </div>
        </li>

    )
}

export default User
