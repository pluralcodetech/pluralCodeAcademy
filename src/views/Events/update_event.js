import React, { useMemo, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import "react-datetime/css/react-datetime.css";
import { Redirect, useHistory, useParams } from 'react-router-dom';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Loading } from 'src/routes';
import { customStatusAction } from 'src/Redux Statement/actions/CRUD/customStatusAction';
import moment from 'moment';

const UpdateEvent = () => {
    const dispatch = useDispatch();

    let history = useHistory();
    let getEventData  = useParams();
    
    const eventListContent = useSelector(state => state.eventListData);
    const {eventList} = eventListContent;

    const  eventListData = useMemo(() => eventList, [eventList]);

    const customPostMain  = useSelector(state => state.customPostData);
    const {loading} = customPostMain;

    const customStatusMain = useSelector(state => state.customStatusData)
    const {customStatus} = customStatusMain;

    const eventResult =  eventListData.find(item => item.id === getEventData.id); // To find object Id properties
    
    const {id, image, name, description, venue, start_date, end_date, categorytype, eventlink} = eventResult
    console.log(id)

    const [createEvent, setCreateEvent] = useState({
        eventName: name, // Default Value
        eventVenue : venue,  // Default Value
        startDate : moment(start_date).format("YYYY-MM-DD[T]HH:mm:ss"), // Default Value
        endDate : moment(end_date).format("YYYY-MM-DD[T]HH:mm:ss"), // Default Value
        eventLink : eventlink, // Default Value
    });

    const [getDescription, setGetDescription] = useState();
    
    const [picture, setPicture] = useState(image);

    const imageInputRef = React.useRef();

     // Destructuring from Update Course State
    const { eventName, eventVenue, startDate, endDate, eventLink } = createEvent;

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
        comments : description
    });


    const rteChange = (content, delta, source, editor) => {
        setGetDescription(editor.getText())
	};

    const options = [
        { value: 'News', label: 'News' },
        { value: 'Event', label: 'Event' },
    ];
    
    const [selectState, setSelectState] = useState({
        selectedOption: categorytype, // Default Value
    })

    const { selectedOption } = selectState;
    console.log(selectedOption)
    
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

        const {value} = selectedOption //selectState main value

        let upDateEvent = new FormData();
        upDateEvent.append('eventid', id);
        upDateEvent.append('name', eventName);
        upDateEvent.append('image', picture);
        upDateEvent.append('description', getDescription);
        upDateEvent.append('venue', eventVenue);
        upDateEvent.append('startdate', startDate);
        upDateEvent.append('enddate', endDate);
        upDateEvent.append('cattype', value);
        upDateEvent.append('eventvideo', eventLink);
        !value ? (
            upDateEvent.append('cattype', selectedOption)
        ) : (upDateEvent.append('cattype', value))


        const updateURL = 'https://pluralcode.academy/academyAPI/api/updateevent.php'
        dispatch(customPostAction(updateURL, upDateEvent));

        setCreateEvent({
            eventName: '',
            eventVenue : '', 
            startDate : '',
            endDate : '', 
            eventLink : '',
        });

        setSelectState({ selectedOption: '' });
        setState({comments: ''});

        imageInputRef.current.value = "";
        setPicture(null);
        
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/event_dashBoard');   
    };

    let redirect = null;

    if (customStatus?.status === 'success') {
        redirect = <Redirect to = "/event_dashBoard"/>;
        setTimeout (() => dispatch(customStatusAction('')) , 1000);
  
    };

    return (
        <div>
            {loading ? <Loading/> 
            :
            (
                <>
                    {redirect}
                    <div className="row">
                    
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                                    <div className="mb-3">
                                        <label className="form-label">Event Name <span className="text-danger">*</span></label>
                                        <input type="text" name='eventName' value={eventName} className="form-control"  
                                            placeholder="e.g : Web Development"
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                    </div>
                                

                                    <div className="mb-3">
                                        <label>Venue <span className="text-danger">*</span></label>
                                        <input type="text" value={eventVenue} name="eventVenue" className="form-control" 
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
                                        <input type="datetime-local" value={startDate} name="startDate" className="form-control" 
                                            placeholder="Enter amount"
                                            onChange={(e) => handleOnChange(e)} 
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>End Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={endDate} name="endDate" className="form-control"  
                                            placeholder="Enter amount"
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Event Link</label>
                                        <input type="url" value={eventLink} name="eventLink" className="form-control" 
                                            placeholder="Enter link"
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
                                        <div> 
                                            <small  class='text-danger text-sm'>{image}</small>
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

export default UpdateEvent
