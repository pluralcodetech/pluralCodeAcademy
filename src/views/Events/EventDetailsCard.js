import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import moment from 'moment'
import React from 'react'

const EventDetailsCard = ({image, name, category, description, venue, start_date, end_date, eventlink}) => {
    return (
        <CCard>
            <CCardHeader >
                <img class="img-fluid" style={{height: '200px'}} src={image} alt="Event-pic"  />
            </CCardHeader>
          <CCardBody>
            <h4 class="mt-4 text-primary mb-3">{name}</h4>
            <CRow>
                <CCol lg={4} >
                    <div>
                        <small>Category : <span>{category}</span></small>
                    </div>
                    <div className="mt-3">
                        <small>Start Date : <span>{moment(start_date).format('MMMM Do YYYY, h:mm:ss a')}</span></small>
                    </div>   
                </CCol>
                <CCol lg={4} >
                    <div>
                        <small>Venue : <span>{venue}</span></small>
                    </div>
                    <div className="mt-3">
                        <small>End Date : <span>{moment(end_date).format('MMMM Do YYYY, h:mm:ss a')}</span></small>
                    </div>
                    
                </CCol>
                <CCol lg={4} >
                    <div>
                        <small>Event Video Link : <a href={eventlink}>{eventlink}</a> <span></span></small>
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
