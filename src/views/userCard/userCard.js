import { CCol, CRow } from '@coreui/react';
import { Avatar } from '@material-ui/core'
import React from 'react'

const UserCard = ({name, lastname, email, phone_number}) => {
    return (
        <CRow className="mb-3">
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
    )
};

export default UserCard