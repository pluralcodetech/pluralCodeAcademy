import {CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import moment from 'moment'
import React from 'react'

const CourseDetailsCard = ({image, name, description, price, start_date, end_date, discountprice, discountstartdate, discountenddate, community, curriculum, courselink}) => {
    return (
        <CCard>
            <CCardHeader >
                <img class="img-fluid" style={{height: '200px'}} src={image} alt="course-pic"  />
            </CCardHeader>
          <CCardBody>
            <h4 class="mt-4 text-primary mb-3">{name}</h4>
            <CRow>   
                <CCol lg={4} >
                    <small>Course price : <span>{price}</span></small>
                </CCol>
                <CCol lg={4} >
                    <small>Discount End Date : <span>{moment(discountenddate).format('MMMM Do YYYY, h:mm:ss a')}</span></small>
                </CCol>
                <CCol lg={4} >
                    <small>End Date : <span>{moment(end_date).format('MMMM Do YYYY, h:mm:ss a')}</span></small>
                </CCol>
                <CCol lg={4} className="mt-2" >
                    <small>Discount Start Date : <span>{moment(discountstartdate).format('MMMM Do YYYY, h:mm:ss a')}</span></small>
                </CCol>

                <CCol lg={4} className="mt-2">
                    <small>Discount Price : <span>{discountprice}</span></small>
                </CCol>
                <CCol lg={4} className="mt-2" >
                    <small>Community : <span>{community}</span></small>
                </CCol>
                <CCol lg={4} className="mt-2">
                    <small>Start Date : <span>{moment(start_date).format('MMMM Do YYYY, h:mm:ss a')}</span></small>
                </CCol>
                <CCol lg={4} className="mt-2">
                    
                    <div>
                        <small>Curriculum : <a href={curriculum}>{curriculum}</a></small>
                    </div>
                    <div>
                        <small>Course Video Link : <a href={courselink}>{courselink}</a> <span></span></small>
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
