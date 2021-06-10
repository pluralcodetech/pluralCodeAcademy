import React from 'react'

import headerData from '../../data/header_data'
// import Dropdown from '../Dropdown'
import Search from '../Search'
import { IoIosNotificationsOutline } from "react-icons/io";



import CNDropdown from '../Dropdown/CNDropdown';

import { HiOutlineMenu } from "react-icons/hi";
import MobileSearch from '../Dropdown/MobileSearch';
import FullScreen from './FullScreen';
import AppsDropdown from '../Dropdown/AppsDropdown';
import User from './User';

const Header = () => {
    return (
        <div class="navbar-custom">
            <div class="container-fluid">
                <ul class="list-unstyled topnav-menu float-end mb-0">

                    <li class="d-none d-lg-block">
                        <Search class="app-search-box dropdown"/>
                    </li>

                    <MobileSearch className="dropdown d-inline-block d-lg-none"/>
                    
                    <FullScreen className="dropdown d-none d-lg-inline-block"/>
                    
                    <AppsDropdown className="dropdown d-none d-lg-inline-block topbar-dropdown"/>
            
                    <User className="dropdown notification-list topbar-dropdown" />
                   
                </ul>
            
                
                <div class="logo-box">
                    <a href="index.html" class="logo logo-dark text-center">
                        <span class="logo-sm">
                            <img src="../assets/images/logo-sm.png" alt="" height="22"/>
                        </span>
                        <span class="logo-lg">
                            <img src="../assets/images/logo-dark.png" alt="" height="20"/>
                        </span>
                    </a>
            
                    <a href="index.html" class="logo logo-light text-center">
                        <span class="logo-sm">
                            <img src="../assets/images/logo-sm.png" alt="" height="22"/>
                        </span>
                        <span class="logo-lg">
                            <img src="../assets/images/logo-light.png" alt="" height="20"/>
                        </span>
                    </a>
                </div>
            
                <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                    
                    <li>
                        <a class="navbar-toggle nav-link" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                            <HiOutlineMenu/>
                        </a>
                    </li>  

                    {/* Create New Dropdow */}
                    <CNDropdown className="dropdown d-none d-xl-block"/>

                </ul>
                <div class="clearfix"></div>
            </div>
        </div>
    )
}

export default Header
