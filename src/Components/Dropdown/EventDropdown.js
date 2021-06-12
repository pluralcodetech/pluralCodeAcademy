import React, { useState } from 'react'
import CustomLink from '../CustomLink'
import { FiCalendar } from "react-icons/fi";
import { useSelector } from 'react-redux';

const EventDropdown = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    const [state, setState] = useState(false);
    

    const handleETIconText = (e) => {
        e.preventDefault();
        setState(true);
    }
    return (
        <>
        {
            leftSideMenuContent ? (
                <li>
                    <a href="#sidebarEvent" data-bs-toggle="collapse">
                        <FiCalendar/>
                        <span class="badge bg-success rounded-pill float-end">3</span>
                        <span> Event </span>
                    </a>
                    <div class="collapse" id="sidebarEvent">
                        <ul class="nav-second-level ">
                            <CustomLink className={true}  path="/event_List">
                            <span className="text-decoration-none">List</span> 
                            </CustomLink>
                            <CustomLink className={true} path="/create_event">
                                Create Event
                            </CustomLink>
                        </ul>
                    </div>
                </li>
            ) : (
                <li class="btn-group dropend">
                    <a href="#sidebarDiscount" data-bs-toggle="collapse" data-bs-toggle="dropdown" aria-expanded="false">
                        <FiCalendar onClick={(e)=>handleETIconText(e)}/>
                        {
                            state? (<span> Event </span>) : null
                        }
                        
                    </a>
                    <ul class="dropdown-menu ">
                        <CustomLink className={true}  path="/event_List">
                        <span className="text-decoration-none">List</span> 
                        </CustomLink>
                        <CustomLink className={true} path="/create_event">
                            Create Event
                        </CustomLink>
                    </ul>
                </li>
            )
        }
        
        
        </>
    )
}

export default EventDropdown
