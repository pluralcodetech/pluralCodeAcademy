import { CBadge, CCard, CCardBody, CCardHeader, CImg } from '@coreui/react'
import React from 'react'

const CourseDetailsCard = ({image, name, description, price, start_date, end_date, discountprice, discountstartdate, discountenddate}) => {
    return (
        <CCard>
            <CCardHeader>
                <img src={image} alt="course-pic" class="img-fluid" />
            </CCardHeader>
          <CCardBody>
                {/* <div class="bg-light">
                    <img src={image} alt="course-pic" class="img-fluid" />
                </div> */}
            {/* Title */}

            <h4 class="mt-4">{name}</h4>
            <div className="d-flex flex-row justify-content-between"> 
                <div>Course price : <span>{price}</span></div>
                <div>Start Date : <span>{start_date}</span></div>
                <div>End Date : <span>{end_date}</span></div>
                <div>Discount Price : <span>{discountprice}</span></div>
                <div>Discount Start Date : <span>{discountstartdate}</span></div>
                <div>Discount End Date : <span>{discountenddate}</span></div>
            </div>

            <p class="text-muted mt-4">
                {description}
            </p>
            
          </CCardBody>
        </CCard>
    )
}

export default CourseDetailsCard
