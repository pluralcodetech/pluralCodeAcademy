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


const CreateWebSeries = () => {

    const dispatch = useDispatch();
    let history = useHistory();
    
    const customPostMain  = useSelector(state => state.customPostData);
    const {customPost, loading} = customPostMain;
    
    const customStatusMain = useSelector(state => state.customStatusData)
    const {customStatus} = customStatusMain

    console.log(customStatus?.status)

    const [createWebSeriesList, setCreateWebSeriesList] = useState({
        seriesName: '', 
        seriesLink : '', 
    });

    const [getDescription, setGetDescription] = useState();
   
    
    const [picture, setPicture] = useState();
    

    const imageInputRef = React.useRef();
    

     // Destructuring from Update Course State
    const {seriesName, seriesLink} = createWebSeriesList;


    // const [redrt, setRedrt] = useState(customPostMessageData);
    // const custom = useMemo(() => redrt, [redrt])
    // console.log(customPostMessageData, custom);

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


    /** ACTIONS  **/

    const handleOnChange = (event) => {
        const getValue = {...createWebSeriesList}
        getValue[event.target.name]=event.target.value;

        setCreateWebSeriesList(getValue);

    };

    // Actions for Submit button
    const handleSubmit = (e) => {
        e.preventDefault();


        // To Form Data before posting the Data

        let upDateEvent = new FormData();

        upDateEvent.append('name', seriesName);
        upDateEvent.append('image', picture);
        upDateEvent.append('link', seriesLink);
        upDateEvent.append('description', getDescription);

        const updateURL = 'https://pluralcode.academy/academyAPI/api/create_series.php'
        dispatch(customPostAction(updateURL, upDateEvent));

        setCreateWebSeriesList({
            seriesName: '',
            seriesLink : '', 
        });

        setState({comments: ''});

        imageInputRef.current.value = "";
        setPicture(null);
        
    }

    // console.log(customPostMessageData[0]?.status)
    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/webSeriesList');   
    };

    let redirect = null;

    if (customStatus?.status === 'success') {
        redirect = <Redirect to = "/webSeriesList"/>;
        // redirect = history.push('/event_dashBoard'); 
        setTimeout (() => dispatch(customStatusAction('')) , 1000);
  
    };
 
    return (
        <div>
            {/* {redirect} */}
            {loading ? <Loading/> 
            :
            (
                <>
                    {redirect}
                    <form className="row" onSubmit={handleSubmit} >
                    
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                                    <div className="mb-3">
                                        <label className="form-label">Series Name <span className="text-danger">*</span></label>
                                        <input type="text" name='seriesName' value={seriesName} className="form-control"  
                                            placeholder="e.g : Web Development"
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                    </div>
                                

                                    <div className="mb-3">
                                        <label>Link <span className="text-danger">*</span></label>
                                        <input type="url" value={seriesLink} name="seriesLink" className="form-control" 
                                            placeholder="Enter link"
                                            onChange={(e) => handleOnChange(e)}
                                        />
                                    </div>

                                
                                    <div className="mb-3">
                                        <label className="form-label">Description <span className="text-danger">*</span></label>
                                
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
                                        <label className="form-label">Series Image <span className="text-danger">*</span></label>
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


export default CreateWebSeries
