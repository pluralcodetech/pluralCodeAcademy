import React from 'react'
import { useSelector } from 'react-redux';
import SidebarMenu from '../Components/Left-side-menu/Sidebar-menu'
import Profile from '../Components/Profile'

const LeftSideMenu = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    return (
        <div id="left-side-menu" >
            {
                leftSideMenuContent? (
                    <div  data-simplebar>
                        <Profile/>
                    </div>
                ) : null
            }

            <div id="sidebar-menu">
                <SidebarMenu/>
            </div>
            
        </div>
    )
}

export default LeftSideMenu
