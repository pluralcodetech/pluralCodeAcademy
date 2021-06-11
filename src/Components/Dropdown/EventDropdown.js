import React from 'react'
import CustomLink from '../CustomLink'

const EventDropdown = () => {
    return (
        <li>
            <a href="#sidebarDashboards" data-bs-toggle="collapse">
                <i data-feather="airplay"></i>
                <span class="badge bg-success rounded-pill float-end">3</span>
                <span> Event </span>
            </a>
            <div class="collapse" id="sidebarDashboards">
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
    )
}

export default EventDropdown
