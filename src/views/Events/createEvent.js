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


const CreateEvent = () => {

    const dispatch = useDispatch();
    let history = useHistory();

    const customPostMain  = useSelector(state => state.customPostData);

    const {customPost, loading} = customPostMain;

    const customPostMessageData = useMemo(() => customPost, [customPost]);

    // console.log(loading)
    // console.log(customPostMessageData);

    // console.log(customPostMessageData[0]?.status)

    const [createEvent, setCreateEvent] = useState({
        name: '', 
        venue : '',
        start_date : '', 
        end_date : '',
    });

    const [getDescription, setGetDescription] = useState();
    console.log(getDescription)
    
    const [picture, setPicture] = useState();
    console.log(picture)

    const imageInputRef = React.useRef();
    // const describeInputRef = React.useRef();

     // Destructuring from Update Course State
    const { name, venue, start_date, end_date } = createEvent;

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
        // setState({comments: ''});

        imageInputRef.current.value = "";
        setPicture(null);
        
    }

    console.log(customPostMessageData[0]?.status)
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/event_dashBoard');   
    };

    let redirect = null;

    if (customPostMessageData[0]?.status === 'success') {
        // redirect = <Redirect to = "/event_dashBoard"/>;
        redirect = <Redirect to = "/event_dashBoard"/>;
         
    };
 
    return (
        <div>
           
            {loading ? <Loading/> 
            :
            (
                <>
                    {/* {redirect} */}
                    <form className="row" onSubmit={handleSubmit} >
                    
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                                    <div className="mb-3">
                                        <label className="form-label">Event Name <span className="text-danger">*</span></label>
                                        <input type="text" name='name' value={name} className="form-control"  
                                            placeholder="e.g : Web Development"
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                    </div>
                                

                                    <div className="mb-3">
                                        <label>Venue <span className="text-danger">*</span></label>
                                        <input type="text" value={venue} name="venue" className="form-control" 
                                            placeholder="Enter amount"
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Category <span className="text-danger">*</span></label>
                                        <Select
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                            options={options}
                                        />
                                    </div>

                                    

                                    <div className="mb-3">
                                        <label>Start Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={start_date} name="start_date" className="form-control" 
                                            placeholder="Enter amount"
                                            onChange={(e) => handleOnChange(e)} 
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>End Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={end_date} name="end_date" className="form-control"  
                                            placeholder="Enter amount"
                                            onChange={(e) => handleOnChange(e)}
                                        />
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
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Event Image <span className="text-danger">*</span></label>
                                        <input type="file" accept="image/png, image/jpeg, image/jpg" 
                                            ref={imageInputRef} 
                                            onChange={event => setPicture(event.target.files[0])}  
                                            className="form-control" 
                                            placeholder="Choose File" 
                                        />
                                    </div>

                                </div>
                            </div> 
                        </div> 
                    
                        <div className="row m-auto">
                            <div className="col-12">
                                <div className=" mt-4 mb-2">
                                    <button type="button" onClick={(e) => handleCancel(e)} className="btn w-sm btn-light waves-effect">Cancel</button>
                                    <button type="submit"  className="btn w-sm rounded-pill btn-success waves-effect waves-light ml-3">Save</button>
                                </div>
                            </div> 
                        </div>
                    </form>
                </>
        
            )
            }
        </div>

        
    )
}

export default CreateEvent
