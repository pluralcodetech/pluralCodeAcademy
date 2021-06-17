import CIcon from '@coreui/icons-react';
import { CBadge, CCard, CCardBody, CCardHeader, CCol, CDataTable, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CPagination, CRow } from '@coreui/react';
import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import usersData from '../users/UsersData';
import { useHistory, useLocation } from 'react-router-dom'


const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
}

const CourseList = () => {


    const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])
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
                                    

                                    <h5 class="card-title font-16 mb-3">Memebers</h5>

                                    <div class="card mb-1 shadow-none border">
                                        
                                        <CRow>
                                            <CCol xl={12}>
                                                <CCard>
                                                <CCardHeader>
                                                    Users
                                                    <small className="text-muted"> example</small>
                                                </CCardHeader>
                                                <CCardBody>
                                                    <CDataTable
                                                        items={usersData}
                                                        fields={[
                                                        { key: 'name', _classes: 'font-weight-bold' },
                                                        'registered', 'role', 'status'
                                                        ]}
                                                        hover
                                                        striped
                                                        itemsPerPage={5}
                                                        activePage={page}
                                                        clickableRows
                                                        onRowClick={(item) => history.push(`/users/${item.id}`)}
                                                        scopedSlots = {{
                                                        'status':
                                                            (item)=>(
                                                            <td>
                                                                <CBadge color={getBadge(item.status)}>
                                                                {item.status}
                                                                </CBadge>
                                                            </td>
                                                            )
                                                        }}
                                                    />
                                                    <CPagination
                                                        activePage={page}
                                                        onActivePageChange={pageChange}
                                                        pages={5}
                                                        doubleArrows={false} 
                                                        align="center"
                                                    />
                                                </CCardBody>
                                                </CCard>
                                            </CCol>
                                            </CRow>

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
