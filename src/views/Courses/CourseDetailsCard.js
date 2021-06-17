import { CBadge, CCard, CCardBody, CCardHeader, CImg } from '@coreui/react'
import React from 'react'

const CourseDetailsCard = () => {
    return (
        <CCard>
          <CCardBody>
                <div class="bg-light">
                    <img src="https://picsum.photos/1024/480/?image=24" alt="course-pic" class="img-fluid" />
                </div>
            {/* Title */}
            <h4 class="mt-4">Web Development</h4>
            <CBadge color="success"> Ongoing</CBadge>

            <p class="text-muted mt-4">
                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos delectus asperiores
                libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet. With supporting text below
                as a natural lead-in to additional contenposuere erat a ante.
            </p>


            <CBadge color="primary" shape="pill">click to read more...</CBadge>
            
          </CCardBody>
        </CCard>
    )
}

export default CourseDetailsCard
