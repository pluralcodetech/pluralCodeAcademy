import React, { useMemo, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import parse from 'html-react-parser';
import "react-datetime/css/react-datetime.css";
import axios from 'axios';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from '../ErrorBoundary';
import { Spinner } from 'react-bootstrap';
import { CSpinner } from '@coreui/react';
import Select from 'react-select';
import { Loading } from 'src/routes';
import { customStatusAction } from 'src/Redux Statement/actions/CRUD/customStatusAction';
import { stringsOnly } from 'src/validations';


const CreateEvent = () => {

    const dispatch = useDispatch();
    let history = useHistory();

    const customPostMain  = useSelector(state => state.customPostData);

    const {customPost, loading} = customPostMain;

    const customPostMessageData = useMemo(() => customPost, [customPost]);
    const customStatusMain = useSelector(state => state.customStatusData);
    const {customStatus} = customStatusMain
    // console.log(loading)
    // console.log(customPostMessageData);

    // console.log(customPostMessageData[0]?.status)

    const [createEvent, setCreateEvent] = useState({
        name: '', 
        venue : '',
        start_date : '', 
        end_date : '',
    });

     // Handling Error Response with Hooks State
     const [error, setError] = useState({
        nameErr : '', 
        venueErr : '', 
        start_DateErr : '', 
        end_DateErr : '', 
        pictureErr : '',
        getDescriptionErr : '',
        selectedOptionErr : '',
    
    });



    const [getDescription, setGetDescription] = useState('');
    console.log(getDescription)
    
    const [picture, setPicture] = useState('');
    console.log(picture)

    const imageInputRef = React.useRef();
    // const describeInputRef = React.useRef();

     // Destructuring from Update Course State
    const { name, venue, start_date, end_date } = createEvent;
    const { nameErr, venueErr, start_dateErr, end_dateErr, pictureErr, getDescriptionErr, selectedOptionErr} = error;

    const modules = {
        toolbar: [
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']
          ]
    };

    const formats = [
        'font',
        'size',
        'bold', 'italic', 'underline',
        'list', 'bullet',
        'align',
        'color', 'background'
      ];

    const [state, setState] = useState({
        comments : ''
    });

  
    const rteChange = (content, delta, source, editor) => {
        setGetDescription(editor.getText())
	};

    const options = [
        { value: 'News', label: 'News' },
        { value: 'Event', label: 'Event' },
    ];
    
    const [selectState, setSelectState] = useState({
        selectedOption: null,
    })

    const { selectedOption } = selectState;
    
    
     const handleSelectChange = selectedOption => {
        setSelectState({ selectedOption });
    
        console.log( selectedOption);
    
      };

    /** ACTIONS  **/

    const handleOnChange = (event) => {
        const getValue = {...createEvent}
        getValue[event.target.name]=event.target.value;

        setCreateEvent(getValue);
        console.log(getValue);

    };

    // Actions for Submit button
    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if (name === '') {
            setError({
                nameErr: 'Name cannot be blank.'
            })
            valid = false
        }

        if (!stringsOnly.test(name)) {
            setError({
                nameErr: 'Only strings are valid.'
            })
            valid = false
        }


        if (venue === '') {
            setError({
                venueErr: 'Price cannot be blank.'
            })
            valid = false
        }

        if (start_date === '') {
            setError({
                start_dateErr: 'Start Date cannot be blank.'
            })
            valid = false
        }

        if (end_date === '') {
            setError({
                end_dateErr: 'End Date cannot be blank.'
            })
            valid = false
        }

        if (getDescription === '') {
            setError({
                getDescriptionErr: 'Description cannot be blank.'
            })
            valid = false
        }

        if (picture === '') {
            setError({
                pictureErr: 'Picture cannot be blank.'
            })
            valid = false
        }
        

        if (selectedOptionErr === null) {
            setError({
                selectedOptionErr: 'Selected cannot be blank.'
            })
            valid = false
        }
        
        if (valid) {
            const {value} = selectedOption

            console.log(value, name, picture, getDescription, venue, start_date, end_date)
  
            // To Form Data before posting the Data
            let createCourse = new FormData();

            // Append all value to FormData
            createCourse.append('name', name);
            createCourse.append('image', picture);
            createCourse.append('description', getDescription);
            createCourse.append('venue', venue);
            createCourse.append('cattype', value);
            createCourse.append('startdate', start_date);
            createCourse.append('enddate', end_date);

            const updateURL = 'https://pluralcode.academy/academyAPI/api/create_events.php'
            dispatch(customPostAction(updateURL, createCourse));

            setCreateEvent({
                name: '', 
                description: '',  
                venue : '',
                start_date : '', 
                end_date : '',
            });

            setSelectState({ selectedOption: '' });
            imageInputRef.current.value = "";
            setPicture(null);
        }
        

        
        
    }

    console.log(customPostMessageData[0]?.status)
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/event_dashBoard');   
    };

    let redirect = null;

    if (customStatus[0]?.status === 'success') {
        redirect = <Redirect to = "/event_dashBoard"/>;
        setTimeout(() => dispatch(customStatusAction('')) , 1000);
    };

 
    return (
        <div>
           
            {loading ? <Loading/> 
            :
            (
                <>
                    <div className="row">
                    
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                                    <div className="mb-3">
                                        <label className="form-label">Event Name <span className="text-danger">*</span></label>
                                        <input type="text" name='name' value={name} className="form-control"  
                                            placeholder="e.g : Web Development"
                                            onChange={(e) => handleOnChange(e)}
                                            required
                                        />
                                        <div> 
                                            <small id="nameErr" class='text-danger text-sm'>{nameErr}</small>
                                        </div>
                                    </div>
                                

                                    <div className="mb-3">
                                        <label>Venue <span className="text-danger">*</span></label>
                                        <input type="text" value={venue} name="venue" className="form-control" 
                                            placeholder="Enter amount"
                                            onChange={(e) => handleOnChange(e)}
                                            required
                                        />
                                        <div> 
                                            <small id="venueErr" class='text-danger text-sm'>{venueErr}</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label>Category <span className="text-danger">*</span></label>
                                        <Select
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                            options={options}
                                            required
                                        />
                                        <div> 
                                            <small id="selectedOptionErr" class='text-danger text-sm'>{selectedOptionErr}</small>
                                        </div>
                                    </div>

                                    

                                    <div className="mb-3">
                                        <label>Start Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={start_date} name="start_date" className="form-control" 
                                            placeholder="Enter amount"
                                            onChange={(e) => handleOnChange(e)} 
                                            required
                                        />
                                         <div> 
                                            <small id="start_dateErr" class='text-danger text-sm'>{start_dateErr}</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label>End Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={end_date} name="end_date" className="form-control"  
                                            placeholder="Enter amount"
                                            onChange={(e) => handleOnChange(e)}
                                            required
                                        />
                                        <div> 
                                            <small id="end_dateErr" class='text-danger text-sm'>{end_dateErr}</small>
                                        </div>
                                    </div>
                                
                                    <div className="mb-3">
                                        <label className="form-label">Course Description <span className="text-danger">*</span></label>
                                
                                        <ReactQuill
                                            placeholder='Start typing from here...'
                                            modules={modules}
                                            formats={formats}
                                            theme='snow'
                                            defaultValue={state.comments}
                                            onChange={rteChange}
                                            preserveWhitespace
                                        />
                                        <div> 
                                            <small id="getDescriptionErr" class='text-danger text-sm'>{getDescriptionErr}</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Event Image <span className="text-danger">*</span></label>
                                        <input type="file" accept="image/png, image/jpeg, image/jpg" 
                                            ref={imageInputRef} 
                                            onChange={event => setPicture(event.target.files[0])}  
                                            className="form-control" 
                                            placeholder="Choose File" 
                                            required
                                        />
                                        <div> 
                                            <small id="pictureErr" class='text-danger text-sm'>{pictureErr}</small>
                                        </div>
                                    </div>

                                </div>
                            </div> 
                        </div> 
                    
                        <div className="row m-auto">
                            <div className="col-12">
                                <div className=" mt-4 mb-2">
                                    <button type="button" onClick={(e) => handleCancel(e)} className="btn w-sm btn-light waves-effect">Cancel</button>
                                    <button type="submit"  className="btn w-sm rounded-pill btn-success waves-effect waves-light ml-3" onClick={handleSubmit}>Save</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </>
        
            )
            }
        </div>

        
    )
}

export default CreateEvent
