import React, { useState } from 'react'
import CustomLink from '../CustomLink'
import { FiAirplay } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import dashBoardDropDownAction from '../../Redux Statemenet/actions/left-Side-Menu-Dropdowns/dashBoardDropDownAction';


const DashBoard = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    const dashBoardDropDownContent = useSelector(state => state.dashBoardDropDown.dbSwitch);
    // const [state, setState] = useState(false);
    
    const dispatch = useDispatch();

    const handleDBIconText = (e) => {
        e.preventDefault();
        dispatch(dashBoardDropDownAction(true))
        // setState(true);
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
                            dashBoardDropDownContent? (<span> DashBoard </span>) : null
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
