import React, { useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
// import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const CreateCourses = () => {

    // const [describe, setDescribe] = useState({ text: '' });
    // const [description, setDescription] = useState('');

    // const handleDischange = (value) => {
    //     setDescribe({ text: value })
    //     // const test = describe.text
    //     // console.log(parse(test).props);
    //     // setDescription(parse(test).props)

    //     const test = describe.text

    //     const main = (parse(test));
    //     setDescription(main.props);

        
    // }

    
    // console.log(description['children'])

    const [description, setDescription] = useState('');

    const {children} = description;

    console.log(children)
    

    const handleChange = (text) => {
        setDescription(parse(text).props);
    } 

   
    /* Datetime State */



    // Create Course Form state

    const [createCourse, setCreateCourse] = useState({
        courseName : '', 
        // categoryName : '', 
        price : '', 
        start_Date : '', 
        end_Date : '', 
        discountPrice : '', 
        discount_StartDate : '', 
        discount_EndDate : ''
    });

    // Destructuring from Create Course State

    const {courseName, price, start_Date, end_Date, discountPrice, discount_StartDate, discount_EndDate} = createCourse

    // categoryName,
    
    // Handle Form value change
    const handleOnChange = (event) => {
        const getValue = {...createCourse}
        getValue[event.target.name]=event.target.value;

        setCreateCourse(getValue);
        console.log(getValue);

        
    }

    const [picture, setPicture] = useState(null);

    const imageInputRef = React.useRef();

    const describeInputRef = React.useRef();
    

    // To Form Data before posting the Data
    let createForm = new FormData();

    // Append all value to FormData
    createForm.append('coursename', courseName);
    createForm.append('coursedescription', children);
    createForm.append('price', price);
    // createForm.append('image', picture.pictureAsFile);
    createForm.append('image', picture);
    createForm.append('startdate', start_Date);
    createForm.append('enddate', end_Date);
    createForm.append('discountprice', discountPrice);
    createForm.append('discountstartdate', discount_StartDate);
    createForm.append('discountenddate', discount_EndDate);

    // Actions for Submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(createCourse)

        axios({
            method: "post",
            url: 'https://pluralcode.academy/academyAPI/api/create_courses.php',
            data: createForm,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });

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

    // describeInputRef.current.state.value = ''
    // setDescription(null);

    }
 
    return (
        <form className="row" onSubmit={handleSubmit}>
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
                            {/* <Datetime value={startDate} onChange={date => startDateOnChange(date)} />  */}
                            <input type="datetime-local" value={start_Date} name="start_Date" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                        </div>

                        <div className="mb-3">
                            <label>End Date <span className="text-danger">*</span></label>
                            {/* <Datetime value={endDate} onChange={date => setEndOnChange(date)} />  */}
                            <input type="datetime-local" value={end_Date} name="end_Date" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Course Description <span className="text-danger">*</span></label>
                            <ReactQuill 
                                ref={describeInputRef}
                                onChange={(e) => handleChange(e)}   
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
                            {/* <Datetime value={discountStartDate} onChange={date => setDiscountStartDateOnChange(date)} />  */}
                            <input type="datetime-local" value={discount_StartDate} name="discount_StartDate" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                        </div>
                        <div className="mb-3">
                            <label>Discount End Date </label>
                            {/* <Datetime value={discountEndDate} onChange={date => setDiscountEndDateOnChange(date)} />  */}
                            <input type="datetime-local" value={discount_EndDate} name="discount_EndDate" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter amount"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Course Images <span className="text-danger">*</span></label>
                            {/* <input type="file" accept="image/png, image/jpeg, image/jpg" ref={imageInputRef}  className="form-control" placeholder="Choose File" onChange={uploadPicture}/> */}
                            <input type="file" accept="image/png, image/jpeg, image/jpg" ref={imageInputRef}   className="form-control" placeholder="Choose File" onChange={event => setPicture(event.target.files[0])}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-auto">
                <div className="col-12">
                    <div className=" mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light waves-effect">Cancel</button>
                        <button type="submit" className="btn w-sm rounded-pill btn-success waves-effect waves-light ml-3">Save</button>
                    </div>
                </div> 
            </div>
        </form>
    
    )
}

export default CreateCourses
