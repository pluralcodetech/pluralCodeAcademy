import React, { useState } from 'react'
import CustomLink from '../CustomLink'
import { FiCalendar } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import eventDropdownAction from '../../Redux Statemenet/actions/left-Side-Menu-Dropdowns/eventDropdownAction';

const EventDropdown = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    const eventDropdownContent = useSelector(state => state.eventDropdown.etSwitch);
    console.log(eventDropdownContent);
    // const [state, setState] = useState(false);
    
    const dispatch = useDispatch()

    const handleETIconText = (e) => {
        e.preventDefault();
        // setState(true);
        dispatch(eventDropdownAction(true))
        
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
                            eventDropdownContent? (<span> Event </span>) : null
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
