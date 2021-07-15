import { CBadge, CCard, CCardBody, CCardHeader, CCol, CImg, CRow } from '@coreui/react'
import React from 'react'

const CourseDetailsCard = ({image, name, description, price, start_date, end_date, discountprice, discountstartdate, discountenddate, community}) => {
    return (
        <CCard>
            <CCardHeader >
                <img class="img-fluid" style={{height: '200px'}} src={image} alt="course-pic"  />
            </CCardHeader>
          <CCardBody>
            <h4 class="mt-4 text-primary mb-3">{name}</h4>
            <CRow>
                <CCol lg={3} >
                    <div>
                        <small>Course price : <span>{price}</span></small>
                    </div>
                    <div className="mt-3">
                        <small>Discount End Date : <span>{discountenddate}</span></small>
                    </div>
                    
                </CCol>
                <CCol lg={3} >
                    <div>
                        <small>End Date : <span>{end_date}</span></small>
                    </div>
                    <div className="mt-3">
                        <small>Discount Start Date : <span>{discountstartdate}</span></small>
                    </div>
                    
                </CCol>
                <CCol lg={3}>
                    <div >
                        <small>Discount Price : <span>{discountprice}</span></small>
                    </div>
                    <div className="mt-3">
                        <small>Community : <span>{community}</span></small>
                    </div>
                    
                </CCol>
                <CCol lg={3}>
                    <div>
                        <small>Start Date : <span>{start_date}</span></small>
                    </div>
                    
                </CCol>

                <CCol lg={12} className="mt-4">
                    <h6 class="text-primary mb-3">Description</h6>
                    <small class="text-muted"> {description}</small>
                </CCol>
            </CRow>  
          </CCardBody>
        </CCard>
    )
}

export default CourseDetailsCard
