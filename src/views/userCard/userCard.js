import { CCol, CRow } from '@coreui/react';
import { Avatar } from '@material-ui/core'
import React from 'react'

const UserCard = ({name, lastname, email, phone_number}) => {
    return (
        <CRow className="mb-3">
            <CCol xs={4} sm={4} md={4} lg={2}>
                <Avatar />
            </CCol>
            <CCol xs={4} sm={4} md={4} lg={7} className="text-center">
                <div>
                    <small>{name} <span>{lastname}</span></small>
                </div>
                <div>
                    <small>{email}</small>
                </div>
            </CCol>
            <CCol xs={4} sm={4}  md={4} lg={3}>
                <small>{phone_number}</small>
            </CCol>
        </CRow>
    )
};

export default UserCard