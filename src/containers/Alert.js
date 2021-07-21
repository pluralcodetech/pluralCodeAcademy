import { CModal, CModalBody, CModalHeader } from '@coreui/react'
import React from 'react'

const Alert = ({modal, toggle, success, message}) => {
    return (
        <>
        
        <CModal show={modal} >
            <CModalBody>
            {
                success ? (
                    <p>{message}</p>
                ) : <p className='text-danger text-center'>{message}</p>
            }
            </CModalBody>

        </CModal>
                    
      </>
    )
}

export default Alert
