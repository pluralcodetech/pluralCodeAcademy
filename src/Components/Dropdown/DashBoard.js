import React, { useState } from 'react'
import CustomLink from '../CustomLink'
import { FiAirplay } from "react-icons/fi";
import { useSelector } from 'react-redux';


const DashBoard = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    const [state, setState] = useState(false);
    

    const handleDBIconText = (e) => {
        e.preventDefault();
        setState(true);
    }
    return (
        <>
        {
            leftSideMenuContent ? (
                <li>
                    <a href="#sidebarDashboards" data-bs-toggle="collapse">
                        <FiAirplay/>
                        <span class="badge bg-success rounded-pill float-end">1</span>
                        <span> Dashboards </span>
                    </a>
                    <div class="collapse" id="sidebarDashboards">
                        <ul class="nav-second-level">
                            <CustomLink className={true} path="/dashboard">
                                DashBoard
                            </CustomLink>
                        </ul>
                    </div>
                </li>
            ) : (
                <li class="btn-group dropend">
                    <a href="#sidebarDiscount" data-bs-toggle="collapse" data-bs-toggle="dropdown" aria-expanded="false">
                    <FiAirplay onClick={(e)=>handleDBIconText(e)}/>
                        {
                            state? (<span> DashBoard </span>) : null
                        }
                        
                    </a>
                    <ul class="dropdown-menu ">
                        <CustomLink className={true} path="/dashboard">
                            DashBoard
                        </CustomLink>
                    </ul>
                </li>
        
            )
        }
        </>
        
        
    )
}

export default DashBoard
