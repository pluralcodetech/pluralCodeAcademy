import React from 'react'
import CustomLink from '../CustomLink'
import CommunityDropdown from '../Dropdown/CommunityDropdown'
import DashBoard from '../Dropdown/DashBoard'
import DiscountDropdown from '../Dropdown/DiscountDropdown'
import EventDropdown from '../Dropdown/EventDropdown'
import UserManagementDropdown from '../Dropdown/UserManagementDropdown'

const SidebarMenu = () => {
    return (
        
        <ul id="side-menu" >
            
            <li class="menu-title">Navigation</li>
            <DashBoard/>
            <EventDropdown/>
            <DiscountDropdown/>
            <li class="menu-title mt-2">Apps</li>
            <UserManagementDropdown/>
            <CommunityDropdown/>
        </ul>
    )
}

export default SidebarMenu
