import { CCallout, CModal, CModalBody} from '@coreui/react'
import React from 'react'

const Alert = ({modal, success, message}) => {
    return (
        <>
        
        <CModal show={modal} >
            <CModalBody>
            {
                success ? (
                    <p>{message}</p>
                ) : (
                    <CCallout color="danger">
                        <p className='text-danger text-center'>{message}</p>
                    </CCallout>
                )
            }

            </CModalBody>

        </CModal>
                    
      </>
    )
}

export default Alert
