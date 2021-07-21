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
import { numbersOnly, stringsOnly } from 'src/validations';
import Alert from 'src/containers/Alert';


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

    // Handling Error Response with Hooks State
    const [error, setError] = useState({
        courseNameErr : '', 
        priceErr : '', 
        start_DateErr : '', 
        end_DateErr : '', 
        descriptionErr : '',
        pictureErr : '',
        getDescriptionErr : '',
        fileErr : '',
        discountPriceErr : '', 
    });

    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');
    const [file, setFile] = useState(null);
    const [state, setState] = useState({
        comments : ''
    }); //ReactQuill
    const [getDescription, setGetDescription] = useState('');

    //  Modal Action  
    const [modal, setModal] = useState(true);
    const toggle = () =>{
        setModal(false);
    };

    // Global State
    const customPostMain  = useSelector(state => state.customPostData);
    const customStatusMain = useSelector(state => state.customStatusData)
    
    
    // Destructuring 
    const {courseName, price, start_Date, end_Date, discountPrice, discount_StartDate, discount_EndDate} = createCourse
    const {children} = description;
    const {customPost, loading} = customPostMain;
    const {customStatus} = customStatusMain;
    const {courseNameErr, priceErr, start_DateErr, end_DateErr, pictureErr, getDescriptionErr, discountPriceErr} = error;

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

        // // Error
        // const newError = {...error}
        // newError[event.target.id + 'Err'] = ''
        // setError(newError)

    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/pending_Course');   
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(createCourse);

        let valid = true

        if (courseName === '') {
            setError({
                courseNameErr: 'Course Name cannot be blank.'
            })
            valid = false
        }

        // if (!stringsOnly.test(courseName)) {
        //     setError({
        //         courseNameErr: 'Only strings are valid.'
        //     })
        //     valid = false
        // }


        if (price === '') {
            setError({
                priceErr: 'Price cannot be blank.'
            })
            valid = false
        }

        // if (!numbersOnly.test(price)) {
        //     setError({
        //         priceErr: 'Only numbers are valid.'
        //     })
        //     valid = false
        // }

        if (start_Date === '') {
            setError({
                start_DateErr: 'Start Date cannot be blank.'
            })
            valid = false
        }

        if (end_Date === '') {
            setError({
                end_DateErr: 'End Date cannot be blank.'
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
                pictureErr: 'Image cannot be blank.'
            })
            valid = false
        }

        
       

        if (valid) {
            const createURL = 'https://pluralcode.academy/academyAPI/api/create_courses.php'
            dispatch(customPostAction(createURL, createForm));
            
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
            
            // setTimeout (() => { toggle() }, 3000);


        }
        
       
        
    }

    let redirect = null;
    let alertMessage = null;

    if (customStatus?.status === 'success') {
        redirect = <Redirect to = "/pending_Course"/>;
        // redirect = history.push('/event_dashBoard'); 
        setTimeout(() => dispatch(customStatusAction('')) , 1000);
  
    };

    if (customStatus?.status === 'failed') {
        alertMessage = <Alert modal={modal} 
            message = {customStatus?.message}
        />
        setTimeout(() => toggle() , 3000);
        setTimeout(() => dispatch(customStatusAction('')) , 3000)
        
    }

    return (
        <div>
            {loading ? <Loading/> 
            : 
            (
                <>
 
                    {redirect}
                    {alertMessage}
                    <div className="row" >

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                                    <div className="mb-3">
                                        <label className="form-label">Course Name <span className="text-danger">*</span></label>
                                        <input type="text" name='courseName' value={courseName} className="form-control" onChange={(e) => handleOnChange(e)} placeholder="e.g : Web Development" required/>
                                        <div> 
                                            <small id="courseNameErr" class='text-danger text-sm'>{courseNameErr}</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label>Price <span className="text-danger">*</span></label>
                                        <input type="text" value={price} name="price" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount" required/>
                                        <div> 
                                            <small id="priceErr" class='text-danger text-sm'>{priceErr}</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label>Start Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={start_Date} name="start_Date" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                                        <div> 
                                            <small id="start_DateErr" class='text-danger text-sm'>{start_DateErr}</small>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label>End Date <span className="text-danger">*</span></label>
                                        <input type="datetime-local" value={end_Date} name="end_Date" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount" required/>
                                        <div> 
                                            <small id="end_DateErr" class='text-danger text-sm'>{end_DateErr}</small>
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
                                            required
                                        />
                                        <div> 
                                            <small id="getDescriptionErr" class='text-danger text-sm'>{getDescriptionErr}</small>
                                        </div>
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
                                        <input type="text" value={discountPrice} name='discountPrice' onChange={(e) => handleOnChange(e)} className="form-control" placeholder="Enter amount" required/>
                                        <div> 
                                            <small id="discountPriceErrr" class='text-danger text-sm'>{discountPriceErr}</small>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label>Discount State Date </label>
                                        <input type="datetime-local" value={discount_StartDate} name="discount_StartDate" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount" required/>
                                       
                                    </div>
                                    <div className="mb-3">
                                        <label>Discount End Date </label>
                                        <input type="datetime-local" value={discount_EndDate} name="discount_EndDate" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount" required/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Course Images <span className="text-danger">*</span></label>
                                        <input type="file" accept="image/png, image/jpeg, image/jpg" ref={imageInputRef}   className="form-control" placeholder="Choose File" onChange={event => setPicture(event.target.files[0])} required/>
                                        <div> 
                                            <small id="pictureErrr" class='text-danger text-sm'>{pictureErr}</small>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Curriculum </label>
                                        <input type="file" ref={fileInputRef}   className="form-control" placeholder="Choose File" onChange={event => setFile(event.target.files[0])} required/>
                                        
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
