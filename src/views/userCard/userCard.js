import { Avatar } from '@material-ui/core'
import React from 'react'

const UserCard = ({name, lastname, email, phone_number}) => {
    return (
        // <CRow>
        //     <CCol lg={6}>
        //         <CCard>
        //             <CCardBody>
                    
        //             </CCardBody>
        //         </CCard>
        //     </CCol>
        //     </CRow>
        <div className="d-flex d-flex justify-content-between align-items-center">
            <div>
                <Avatar />
            </div>
            <div>
                <h4>{name} <span>{lastname}</span></h4>
                <h5>{email}</h5>
            </div>
            <div>
                <h5>{phone_number}</h5>
            </div>
        </div>
  
    )
}

export default UserCard
