import { CCol, CRow } from '@coreui/react';
import { Avatar } from '@material-ui/core'
import React from 'react'

const UserCard = ({name, lastname, email, phone_number}) => {
    return (
        <CRow>
            <CCol lg={2}>
                <Avatar />
            </CCol>
            <CCol lg={7} className="text-center">
                <div>
                    <small>{name} <span>{lastname}</span></small>
                </div>
                <div>
                    <small>{email}</small>
                </div>
            </CCol>
            <CCol lg={3}>
                <small>{phone_number}</small>
            </CCol>
        </CRow>
                
        // <div className="d-flex d-flex justify-content-between align-items-center">

        //     <div>
        //         <Avatar />
        //     </div>
        //     <div>
                // <div>
                //     <small>{name} <span>{lastname}</span></small>
                // </div>
                // <div>
                //     <small>{email}</small>
                // </div>
        //     </div>
        //     <div >
        //         
        //     </div>
        // </div>
  
    )
};

export default UserCard