import { CBadge, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import { Avatar } from '@material-ui/core'
import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
// const [isOpen, setIsOpen] = useState(false);

const CourseList = () => {
    return (
        <div class="content-page">
            <div class="content">

                <div class="container-fluid">

                    <div class="row">
                        <div class="col-xl-8 col-lg-6">
                            
                            <div class="card d-block">
                                <div class="card-body">

                                    <div class="d-flex mb-3 justify-content-between">
                                        <div>
                                            <h3 class=" font-10">
                                                Web Development
                                            </h3>
                                            <h6>
                                                    <CBadge color="secondary">ongoing</CBadge>
                                            </h6>
                                        </div>

                                        <CDropdown>
                                            <CDropdownToggle ></CDropdownToggle>
                                            <CDropdownMenu>
                                                <CDropdownItem>Edit</CDropdownItem>
                                                <CDropdownItem>Delete</CDropdownItem>
                                                <CDropdownItem>Invite</CDropdownItem>
                                            </CDropdownMenu>
                                        </CDropdown>
                                        
                                    </div>

                                    <div class="row mb-3 ">
                                        <div class="col-md-4">
                                            
                                            <p class="mt-2 mb-1 text-muted">Assigned To</p>
                                            <div class="d-flex align-items-start">
                                                <Avatar/>
                                                <div class="ml-2 w-100">
                                                    <h5 class="mt-1 font-size-14">
                                                        Jonathan Andrews
                                                    </h5>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                    
                                        <div class="col-md-4">
                                            
                                            <p class="mt-2 mb-1 text-muted">Package Name</p>
                                            <div class="d-flex align-items-start">
                                                <i class="mdi mdi-briefcase-check-outline font-18 text-success me-1"></i>
                                                <div class="w-100">
                                                    <h5 class="mt-1 font-size-14">
                                                        Starter
                                                    </h5>
                                                </div>
                                            </div>
                                            
                                        </div>
                    
                                        <div class="col-md-4">
                                            
                                            <p class="mt-2 mb-1 text-muted">Due Date</p>
                                            <div class="d-flex align-items-start">
                                                <i class="mdi mdi-calendar-month-outline font-18 text-success me-1"></i>
                                                <div class="w-100">
                                                    <h5 class="mt-1 font-size-14">
                                                        Today 10am
                                                    </h5>
                                                </div>
                                            </div>
                                            
                                        </div>  
                                    </div>

                                    <h5 class="mb-3">Course Overview:</h5>

                                    <p class="text-muted mt-3 mb-2">
                                        With supporting text below as a natural lead-in to additional contenposuere erat a ante. Voluptates, illo, iste itaque voluptas
                                        corrupti ratione reprehenderit magni similique? Tempore, quos delectus asperiores libero voluptas quod perferendis! Voluptate,
                                        quod illo rerum? Lorem ipsum dolor sit amet.
                                    </p>

                                    <p class="text-muted mb-4">
                                        Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos delectus asperiores
                                        libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet. With supporting text below
                                        as a natural lead-in to additional contenposuere erat a ante.
                                    </p>

                                    <div class="mb-4">
                                        <h5>Tags</h5>
                                        <div class="text-uppercase">
                                            <a href="#" class="badge badge-soft-primary me-1">Html</a>
                                            <a href="#" class="badge badge-soft-primary me-1">Css</a>
                                            <a href="#" class="badge badge-soft-primary me-1">Bootstrap</a>
                                            <a href="#" class="badge badge-soft-primary me-1">JQuery</a>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="mb-4">
                                                <h5>Start Date</h5>
                                                <p>17 March 2019 <small class="text-muted">1:00 PM</small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-4">
                                                <h5>End Date</h5>
                                                <p>22 December 2019 <small class="text-muted">1:00 PM</small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-4">
                                                <h5>Budget</h5>
                                                <p>$15,800</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div> 
                        </div>
                        
                    
                        <div class="col-xl-4 col-lg-5">
                            <div class="card">
                                <div class="card-body">
                                    <div class="dropdown float-end">
                                        <a href="#" class="dropdown-toggle arrow-none text-muted" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="mdi mdi-dots-horizontal font-18"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            
                                            <a href="#" class="dropdown-item">Attachment </a>
                                            
                                            <a href="#" class="dropdown-item">Edit </a>
                                            
                                            <a href="#" class="dropdown-item">Mark as Duplicate </a>
                                            <div class="dropdown-divider"></div>
                                            
                                            <a href="#" class="dropdown-item text-danger">Delete </a>
                                        </div>
                                        
                                    </div>

                                    <h5 class="card-title font-16 mb-3">Memebers</h5>

                                    <div class="card mb-1 shadow-none border">
                                        <div class="p-2">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar-sm">
                                                        <span class="avatar-title badge-soft-primary text-primary rounded">
                                                            JPG
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col ps-0">
                                                    <a href="javascript:void(0);" class="text-muted fw-bold">Dashboard-design.jpg</a>
                                                    <p class="mb-0 font-12">3.25 MB</p>
                                                </div>
                                                <div class="col-auto">
                                                    
                                                    <a href="javascript:void(0);" class="btn btn-link font-16 text-muted">
                                                        <i class="dripicons-download"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div class="card mb-0 shadow-none border">
                                        <div class="p-2">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar-sm">
                                                        <span class="avatar-title bg-secondary rounded">
                                                            .MP4
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col ps-0">
                                                    <a href="javascript:void(0);" class="text-muted fw-bold">Admin-bug-report.mp4</a>
                                                    <p class="mb-0 font-12">7.05 MB</p>
                                                </div>
                                                <div class="col-auto"> 
                                                    <a href="javascript:void(0);" class="btn btn-link font-16 text-muted">
                                                        <i class="dripicons-download"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                        

                </div> 

            </div> 

        </div>
                   
       
    )
}

export default CourseList
