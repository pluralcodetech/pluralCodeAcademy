import React, {useRef, useState} from 'react'
import { CButton, CCol, CContainer, CForm, CFormGroup, CInput, CLabel, CModal, CModalBody, CModalFooter, CModalHeader, CRow } from '@coreui/react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import calendarDataAction from 'src/Redux Statement/actions/calendarDataAction';
import moment from 'moment';
import addEventAction from 'src/Redux Statement/actions/addEventAction';




const AddEventModal = ({modal, toggle, onEventAdded}) => {
    const dispatch = useDispatch();
    const [inputValues, setInputValues] = useState({
        name: '', 
        description: '',  
        venue : '',
        start_date : '', 
        end_date : '',
    });

    const [image, setImage] = useState({
        imagePreview: '', 
        imageAsFile: '',
    });

    // Destructuring 
    const {name, description, venue, start_date, end_date} = inputValues

    // Appending Form values to FormData
    
    let addEventValues = new FormData();

    addEventValues.append('name', name);
    addEventValues.append('description', description);
    addEventValues.append('venue', venue);
    addEventValues.append('image', image.imageAsFile);
    addEventValues.append('startdate', start_date);
    addEventValues.append('enddate', end_date);
    
    const handleOnChange = e => {
        const getValue = {...inputValues}
        getValue[e.target.name]=e.target.value

        setInputValues(getValue);
        console.log(inputValues);
    };

    // Handle Image upload
    const uploadImage = (e) => {
        setImage({
            ...image,
            imagePreview: URL.createObjectURL(e.target.files[0]),
            imageAsFile: e.target.files[0],
        })
    }

    const onSubmit = (e)=> {
        e.preventDefault();

        console.log(name, 
            description, 
            image.imageAsFile,
            start_date,
            end_date,
        );

        dispatch(addEventAction(addEventValues))

        toggle();  
    }
      
    return (
        <CContainer fluid>
            <CRow>
                <CCol sm="12">
                    <CForm onSubmit={onSubmit}>
                        {/* <CButton onClick={toggle} className="mr-1">Launch demo modal</CButton> */}
                        <CModal show={modal} >
                            <CModalHeader closeButton>Create Event</CModalHeader>
                            <CModalBody>
                                <CFormGroup>
                                    <CInput
                                    type="text"
                                    name="name"
                                    placeholder="Name.."
                                    autoComplete="Name"
                                    value={name}
                                    onChange={e => handleOnChange(e)}
                                    />
                                </CFormGroup>

                                <CFormGroup>
                                    <CInput
                                    type="text"
                                    name="description"
                                    placeholder="Description..."
                                    autoComplete="Description"
                                    value={description}
                                    onChange={e => handleOnChange(e)}
                                    />
                                </CFormGroup>

                                <CFormGroup>
                                    <CInput
                                    type="text"
                                    name="venue"
                                    placeholder="Venue..."
                                    autoComplete="Venue"
                                    value={venue}
                                    onChange={e => handleOnChange(e)}
                                    />
                                </CFormGroup>

                                <CFormGroup>
                                <input type="file" accept="image/png, image/jpeg, image/jpg" 
                                className="form-control" 
                                placeholder="Choose File"  onChange={uploadImage}/>
                                    {/* <CInput
                                    type="file"
                                    accept="image/png, image/jpeg, image/jpg"
                                    value={image}
                                    onChange={uploadImage}
                                    /> */}
                                </CFormGroup>

                                <CFormGroup>
                                    <CLabel>State Date</CLabel>
                                    <input type="datetime-local" name="start_date" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                                </CFormGroup>

                                <CFormGroup>
                                    <CLabel>End Date</CLabel>
                                    <input type="datetime-local" name="end_date" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                                </CFormGroup>
                                
                                <CButton color='primary' type='submit' size={'lg'} className="m-2 primary">Add Event</CButton>

                            </CModalBody>
                
                        </CModal>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default AddEventModal
  

  