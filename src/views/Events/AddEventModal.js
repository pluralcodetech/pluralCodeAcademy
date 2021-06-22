import React, {useRef, useState} from 'react'
import { CButton, CCol, CContainer, CForm, CFormGroup, CInput, CLabel, CModal, CModalBody, CModalFooter, CModalHeader, CRow } from '@coreui/react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import calendarDataAction from 'src/Redux Statement/actions/calendarDataAction';




const AddEventModal = ({modal, toggle, onEventAdded}) => {
    const [inputValues, setInputValues] = useState({
        name: '', description: '', image: '', category
    });

    const [start, setStartOnChange] = useState(new Date());
    const [end, setEndOnChange] = useState(new Date());

    // const [start, stateOnChange] = useState(new Date());
    // const [end, endOnChange] = useState(new Date());

    

    // Destructuring 
    const {name, description, image, category} = inputValues
    
    const handleOnChange = e => {
        const getValue = {...inputValues}
        getValue[e.target.name]=e.target.value

        setInputValues(getValue);
        console.log(inputValues);
    };

    // const calendarDataContent = useSelector(state => state.calendarData.data)
    


    
    // const dispatch = useDispatch();

    const onSubmit = (e)=> {
        e.preventDefault();

        console.log(name, 
            description, 
            category,
            image,
            start,
            end);

        // dispatch(calendarDataAction({
        //     name, 
        //     description, 
        //     category,
        //     image,
        //     start,
        //     end
        // }));

        // console.log(calendarDataContent);

        // onEventAdded({
        //     name, 
        //     description, 
        //     category,
        //     image,
        //     start,
        //     end
        // });

        // toggle();

        
    }
    // const dateRef = useRef(null);
    
    // const [inputValues, setInputValues] = useState({
    //     name: '', description: '', image: ''
    //   });

    //   const [state, setState] = useState()

    // Destructuring 
    
    
    // const handleOnChange = event => {
    //     const { name, value } = event.target;
    //     setInputValues({ ...inputValues, [name]: value });
    // };

    // const handleDate = (date) => {
    //     setState({date});
    //     console.log(state)
    //   };

    // const onSubmit = (e)=> {
    //     e.preventDefault();

    //     onEventAdded({
    //         // title,
    //         // start,
    //         // end
    //     });

        
    // }

      
    return (
        <CContainer fluid>
            <CRow>
                <CCol sm="12">
                    <CForm onSubmit={onSubmit}>
                        {/* <CButton onClick={toggle} className="mr-1">Launch demo modal</CButton> */}
                        <CModal show={modal} onClose={toggle}>
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
                                    // onChange={(e) => console.log(e.target.value)}
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
                                    name="category"
                                    placeholder="Category..."
                                    autoComplete="Category"
                                    value={category}
                                    onChange={e => handleOnChange(e)}
                                    />
                                </CFormGroup>

                                <CFormGroup>
                                    <CInput
                                    type="file"
                                    name="image"
                                    value={image}
                                    onChange={e => handleOnChange(e)}
                                    />
                                </CFormGroup>

                                <CFormGroup>
                                    <CLabel>State Date</CLabel>
                                    {/* <DateTimePicker
                                        onChange={stateOnChange}
                                        value={start}
                                    /> */}
                                    <Datetime value={start} onChange={date => setStartOnChange(date)} />
                                </CFormGroup>

                                <CFormGroup>
                                    <CLabel>End Date</CLabel>
                                    {/* <DateTimePicker
                                        onChange={endOnChange}
                                        value={end}
                                    /> */}
                                    <Datetime value={end} onChange={date => setEndOnChange(date)} />
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
  

  