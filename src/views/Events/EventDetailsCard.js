import { CBadge, CCard, CCardBody, CCardHeader, CCol, CImg, CRow } from '@coreui/react'
import React from 'react'

const EventDetailsCard = ({image, name, category, description, venue, start_date, end_date}) => {
    return (
        <CCard>
            <CCardHeader >
                <img class="img-fluid" style={{height: '200px'}} src={image} alt="Event-pic"  />
            </CCardHeader>
          <CCardBody>
            <h4 class="mt-4 text-primary mb-3">{name}</h4>
            <CRow>
                <CCol lg={6} >
                    <div>
                        <small>Category : <span>{category}</span></small>
                    </div>
                    <div className="mt-3">
                        <small>Start Date : <span>{start_date}</span></small>
                    </div>   
                </CCol>
                <CCol lg={6} >
                    <div>
                        <small>Venue : <span>{venue}</span></small>
                    </div>
                    <div className="mt-3">
                        <small>End Date : <span>{end_date}</span></small>
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

export default EventDetailsCard
