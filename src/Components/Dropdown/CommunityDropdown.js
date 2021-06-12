import React, { useState } from 'react'
import CustomLink from '../CustomLink'
import { GiField } from "react-icons/gi";
import { useSelector } from 'react-redux';

const CommunityDropdown = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    const [state, setState] = useState(false);
    

    const handleCYIconText = (e) => {
        e.preventDefault();
        setState(true);
    }
    return (
        <>
        {
            leftSideMenuContent ? (
                <li>
                    <a href="#sidebarCommunity" data-bs-toggle="collapse">
                        <GiField/>
                        <span class="badge bg-success rounded-pill float-end">1</span>
                        <span> Community </span>
                    </a>
                    <div class="collapse" id="sidebarCommunity">
                        <ul class="nav-second-level ">
                            <CustomLink className={true}  path="/community">
                                List 
                            </CustomLink>
                        </ul>
                    </div>
                </li>

            ) : (
                <li class="btn-group dropend">
                    <a href="#sidebarDiscount" data-bs-toggle="collapse" data-bs-toggle="dropdown" aria-expanded="false">
                        <GiField onClick={(e)=>handleCYIconText(e)}/>
                        {
                            state? (<span> Discount </span>) : null
                        }
                        
                    </a>
                    <ul class="dropdown-menu ">
                        <CustomLink className={true}  path="/community">
                            List 
                        </CustomLink>
                    </ul>
                </li>

            )
        }
        
        
        </>
    )
}

export default CommunityDropdown
