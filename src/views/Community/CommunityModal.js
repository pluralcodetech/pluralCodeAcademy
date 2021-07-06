import React, {useRef, useState} from 'react'
import { CButton, CCol, CContainer, CForm, CFormGroup, CInput, CLabel, CModal, CModalBody, CModalFooter, CModalHeader, CRow } from '@coreui/react';
import { useDispatch} from 'react-redux';

import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';


const CommunityModal = ({modal, toggle, id}) => {
    const dispatch = useDispatch();
    
    const [inputValues, setInputValues] = useState({
        link: '', 
    });

    // Destructuring 
    const {link} = inputValues

    // Appending Form values to FormData
    
    let createCourse = new FormData();

    createCourse.append('id', id );
    createCourse.append('link', link);
    
    
    const handleOnChange = e => {
        const getValue = {...inputValues}
        getValue[e.target.name]=e.target.value

        setInputValues(getValue);
        console.log(inputValues);
    };

   

    const onSubmit = (e)=> {
        e.preventDefault();

        console.log(link);

        dispatch(customPostAction('https://pluralcode.academy/academyAPI/api/create_community.php', createCourse))
        
        // dispatch(eventListAction());
        toggle();  
        
    }
      
    return (
        <CContainer fluid>
            <CRow>
                <CCol sm="12">
                    <CForm onSubmit={onSubmit}>
                        <CModal show={modal} >
                            <CModalHeader closeButton>Create Community</CModalHeader>
                            <CModalBody>
                                <CFormGroup>
                                    <CInput
                                    type="url"
                                    name="link"
                                    placeholder="Link.."
                                    autoComplete="link"
                                    value={link}
                                    onChange={e => handleOnChange(e)}
                                    />
                                </CFormGroup>
                                
                                <CButton color='primary' type='submit' size={'lg'} className="m-2 primary">Create Community</CButton>

                            </CModalBody>
                
                        </CModal>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default CommunityModal;
  

  