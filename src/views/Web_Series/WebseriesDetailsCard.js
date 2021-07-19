import { CBadge, CCard, CCardBody, CCardHeader, CCol, CImg, CRow } from '@coreui/react'
import moment from 'moment'
import React from 'react'

const WebseriesDetailsCard = ({image, name, description, date, youtubelink, zoomlink}) => {
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
                        <small>Youtube Link: <span>{youtubelink}</span></small>
                    </div>
                    
                </CCol>
                <CCol lg={4} >
                    <div>
                        <small>Zoom Link: <span>{zoomlink}</span></small>
                    </div>
                    
                </CCol>
                <CCol lg={4} >
                <div>
                        <small>Date : <span>{moment(date).format('MMMM Do YYYY')}</span></small>
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

export default WebseriesDetailsCard