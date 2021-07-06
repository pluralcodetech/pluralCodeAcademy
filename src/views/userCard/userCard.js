import { Avatar } from '@material-ui/core'
import React from 'react'

const UserCard = ({name, lastname, email, phone_number}) => {
    return (
        <div className="d-flex d-flex justify-content-between align-items-center">
            <div>
                <Avatar />
            </div>
            <div>
                <small>{name} <span>{lastname}</span></small>
                <small>{email}</small>
            </div>
            <div >
                <small>{phone_number}</small>
            </div>
        </div>
  
    )
};

export default UserCard