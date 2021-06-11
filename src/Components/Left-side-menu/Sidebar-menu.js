import React from 'react'
import CustomLink from '../CustomLink'
import DashBoard from '../Dropdown/DashBoard'
import DiscountDropdown from '../Dropdown/DiscountDropdown'
import EventDropdown from '../Dropdown/EventDropdown'

const SidebarMenu = () => {
    return (
        <ul id="side-menu">
            <li class="menu-title">Navigation</li>
            <DashBoard/>
            <EventDropdown/>
            <DiscountDropdown/>
            
        </ul>
    )
}

export default SidebarMenu
