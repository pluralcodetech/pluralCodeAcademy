import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaSlackHash } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";

const AppsDropdown = ({className}) => {
    return (
        <li className={className}>
            <a class="nav-link dropdown-toggle-none arrow-none waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <BsFillGridFill/>
            </a>
            <div class="dropdown-menu dropdown-lg dropdown-menu-end">

                <div class="p-lg-1">
                    <div class="row gx-1 gy-3">
                        <div class="col">
                            <a class="dropdown-icon-item d-flex flex-column text-center text-decoration-none" href="#">
                                <FaSlackHash className="m-auto"/>
                                <span>Slack</span>
                            </a>
                        </div>
                        <div class="col">
                            <a class="dropdown-icon-item d-flex flex-column text-center text-decoration-none" href="#">
                                <FaGithub className="m-auto"/>
                                <span>GitHub</span>
                            </a>
                        </div>
                        <div class="col">
                            <a class="dropdown-icon-item d-flex flex-column text-center text-decoration-none" href="#">
                                <FaDribbble className="m-auto"/>
                                <span>Dribbble</span>
                            </a>
                        </div>
                        <div class="col">
                            <a class="dropdown-icon-item d-flex flex-column text-center text-decoration-none" href="#">
                                <FaWhatsapp className="m-auto"/>
                                <span>Whatsapp</span>
                            </a>
                        </div>
                    </div>

                    <div class="row g-0">
                    
                        {/* <div class="col">
                            <a class="dropdown-icon-item" href="#">
                                <FaDropbox/>
                                <span>Dropbox</span>
                            </a>
                        </div> */}
                    </div>
                </div>

            </div>
        </li>
            
    )
}

export default AppsDropdown
