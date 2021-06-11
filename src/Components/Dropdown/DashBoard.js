import React from 'react'
import CustomLink from '../CustomLink'

const DashBoard = () => {
    return (
        <li>
            <a href="#sidebarDashboards" data-bs-toggle="collapse">
                <i data-feather="airplay"></i>
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
    )
}

export default DashBoard
