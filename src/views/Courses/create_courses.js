import React, { useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import "react-datetime/css/react-datetime.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { customStatusAction } from 'src/Redux Statement/actions/CRUD/customStatusAction';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { Loading } from 'src/routes';


const CreateCourses = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    // Input field statets
    const [createCourse, setCreateCourse] = useState({
        courseName : '', 
        price : '', 
        start_Date : '', 
        end_Date : '', 
        discountPrice : '', 
        discount_StartDate : '', 
        discount_EndDate : ''
    });
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState(null);
    const [file, setFile] = useState(null);
    const [state, setState] = useState({
        comments : ''
    }); //ReactQuill
    const [getDescription, setGetDescription] = useState();

    // Global State
    const customPostMain  = useSelector(state => state.customPostData);
    const customStatusMain = useSelector(state => state.customStatusData)
    
    
    // Destructuring 
    const {courseName, price, start_Date, end_Date, discountPrice, discount_StartDate, discount_EndDate} = createCourse
    const {children} = description;
    const {customPost, loading} = customPostMain;
    const {customStatus} = customStatusMain

    // useRefs
    const imageInputRef = React.useRef();
    const fileInputRef = React.useRef();
    const describeInputRef = React.useRef();

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

    const rteChange = (content, delta, source, editor) => {
        setGetDescription(editor.getText())
	}; //ReactQuill onChange

    // const handleChange = (text) => {
    //     setDescription(parse(text).props);
    // };


    // Form Data before posting the Data
    let createForm = new FormData();

    // Append all value to FormData
    createForm.append('coursename', courseName);
    createForm.append('coursedescription', getDescription);
    createForm.append('price', price);
    createForm.append('image', picture);
    createForm.append('file', file);
    createForm.append('startdate', start_Date);
    createForm.append('enddate', end_Date);
    createForm.append('discountprice', discountPrice);
    createForm.append('discountstartdate', discount_StartDate);
    createForm.append('discountenddate', discount_EndDate);


    //** Actions **\\

    // Handle Form value change
    const handleOnChange = (event) => {
        const getValue = {...createCourse}
        getValue[event.target.name]=event.target.value;

        setCreateCourse(getValue);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/pending_Course');   
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(createCourse)
        

        const createURL = 'https://pluralcode.academy/academyAPI/api/create_courses.php'
        dispatch(customPostAction(createURL, createForm));
        // axios({
        //     method: "post",
        //     url: 'https://pluralcode.academy/academyAPI/api/create_courses.php',
        //     data: createForm,
        //     headers: { "Content-Type": "multipart/form-data" },
        // })
        // .then((response) => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // });

    setCreateCourse({
        courseName : '',
        price : '',
        start_Date : '',
        end_Date : '',
        discountPrice : '',
        discount_StartDate : '',
        discount_EndDate : '',
    });

    imageInputRef.current.value = "";
    setPicture(null);
    setFile(null);

    }

    let redirect = null;

    if (customStatus?.status === 'success') {
        redirect = <Redirect to = "/pending_Course"/>;
        // redirect = history.push('/event_dashBoard'); 
        setTimeout(() => dispatch(customStatusAction('')) , 1000);
  
    };

    return (
        <div>
            {loading ? <Loading/> 
            : 
            (
                <>
                    {redirect}
                    <div className="row" >
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                                    <div className="mb-3">
                                        <label className="form-label">Course Name <span className="text-danger">*</span></label>
                                        <input type="text" name='courseName' value={courseName} className="form-control" onChange={(e) => handleOnChange(e)} placeholder="e.g : Web Development"/>
                                    </div>

                                    <div className="mb-3">
                                        <label>Price <span className="text-danger">*</span></label>
                                        <input type="text" value={price} name="price" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                                    </div>

                                    <div className="mb-3">
                                        <label>Start Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={start_Date} name="start_Date" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                                    </div>

                                    <div className="mb-3">
                                        <label>End Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={end_Date} name="end_Date" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Course Description <span className="text-danger">*</span></label>
                                        {/* <ReactQuill 
                                            ref={describeInputRef}
                                            onChange={(e) => handleChange(e)}   
                                        /> */}

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

                                </div>
                            </div> 
                        </div> 
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="mt-0 mb-3 bg-light p-2">Discount</h5>
                                    <div className="mb-3">
                                        <label>Discount Price</label>
                                        <input type="text" value={discountPrice} name='discountPrice' onChange={(e) => handleOnChange(e)} className="form-control" placeholder="Enter amount"/>
                                    </div>
                                    <div className="mb-3">
                                        <label>Discount State Date </label>
                                        <input type="datetime-local" value={discount_StartDate} name="discount_StartDate" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                                    </div>
                                    <div className="mb-3">
                                        <label>Discount End Date </label>
                                        <input type="datetime-local" value={discount_EndDate} name="discount_EndDate" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Course Images <span className="text-danger">*</span></label>
                                        <input type="file" accept="image/png, image/jpeg, image/jpg" ref={imageInputRef}   className="form-control" placeholder="Choose File" onChange={event => setPicture(event.target.files[0])}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Curriculum <span className="text-danger">*</span></label>
                                        <input type="file" ref={fileInputRef}   className="form-control" placeholder="Choose File" onChange={event => setFile(event.target.files[0])}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-auto" >
                            <div className="col-12">
                                <div className=" mt-4 mb-2">
                                    <button type="button" className="btn w-sm btn-light waves-effect" onClick={(e) => handleCancel(e)}>Cancel</button>
                                    <button type="submit" className="btn w-sm rounded-pill btn-success waves-effect waves-light ml-3" onClick={handleSubmit}>Save</button>
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

export default CreateCourses
