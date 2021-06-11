import React from 'react'
import SidebarMenu from '../Components/Left-side-menu/Sidebar-menu'
import Profile from '../Components/Profile'

const LeftSideMenu = () => {
    return (
        <div id="left-side-menu">
            <div  data-simplebar>
                <Profile/>
            </div>

            <div id="sidebar-menu">
                <SidebarMenu/>
            </div>
            
        </div>
    )
}

export default LeftSideMenu
