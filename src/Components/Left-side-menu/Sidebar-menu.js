import React from 'react'
import { useSelector } from 'react-redux'
import CustomLink from '../CustomLink'
import CommunityDropdown from '../Dropdown/CommunityDropdown'
import DashBoard from '../Dropdown/DashBoard'
import DiscountDropdown from '../Dropdown/DiscountDropdown'
import EventDropdown from '../Dropdown/EventDropdown'
import UserManagementDropdown from '../Dropdown/UserManagementDropdown'

const SidebarMenu = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    return (
        
        <ul id="side-menu"  >
            {
                leftSideMenuContent? <li class="menu-title">Navigation</li> : null
            }
            
            <DashBoard/>
            <EventDropdown/>
            <DiscountDropdown/>
            {
                leftSideMenuContent? <li class="menu-title mt-2">Apps</li> : null
            }
            
            <UserManagementDropdown/>
            <CommunityDropdown/>
        </ul>
    )
}

export default SidebarMenu
