import React, { useState } from 'react'
import CustomLink from '../CustomLink'
import { FiActivity } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import discountDropdownAction from '../../Redux Statemenet/actions/left-Side-Menu-Dropdowns/discountDropdownAction';

const DiscountDropdown = () => {
    const leftSideMenuContent = useSelector(state => state.leftMenuToggle.open);
    const discountDropdownContent = useSelector(state => state.discountDropdown.dtSwitch);
    // const [state, setState] = useState(false);
    

    const dispatch = useDispatch()

    const handleIconText = (e) => {
        e.preventDefault();
        dispatch(discountDropdownAction(true))
        // setState(true);
    }

    return (
        <>
            {
            leftSideMenuContent? (
                <li>
                    <a href="#sidebarDiscount" data-bs-toggle="collapse">
                        <FiActivity/>
                        <span class="badge bg-success rounded-pill float-end">2</span>
                        <span> Discount </span>
                    </a>
                    <div class="collapse" id="sidebarDiscount">
                        <ul class="nav-second-level ">
                            <CustomLink className={true}  path="/discount_List">
                                List 
                            </CustomLink>
                            <CustomLink className={true} path="/detail">
                                Details
                            </CustomLink>
                        </ul>
                    </div>

                    
                </li>
            ) : (<li class="btn-group dropend">
                    <a href="#sidebarDiscount" data-bs-toggle="collapse" data-bs-toggle="dropdown" aria-expanded="false">
                        <FiActivity onClick={(e)=>handleIconText(e)}/>
                        {
                            discountDropdownContent? (<span> Discount </span>) : null
                        }
                        
                    </a>
                    <ul class="dropdown-menu ">
                        <CustomLink className={true}  path="/discount_List">
                            List 
                        </CustomLink>
                        <CustomLink className={true} path="/detail">
                            Details
                        </CustomLink>
                    </ul>
                </li>)
        }

        
        </>
        
        
            
    )
}

export default DiscountDropdown
