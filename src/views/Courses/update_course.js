import React, { useMemo, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import parse from 'html-react-parser';
import "react-datetime/css/react-datetime.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { useDispatch } from 'react-redux';


const CreateCourses = () => {
    const dispatch = useDispatch();

    let getCourseData  = useParams(); 
    console.log(getCourseData.id);

    let query = getCourseData.id;
    let obj = JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    console.log(obj);

    const {id, image, name, price, description, discountprice, start_date, end_date} = obj

    const [createCourse, setCreateCourse] = useState({
            courseName : name, 
            coursePrice : price, 
            startDate : start_date, 
            endDate : end_date, 
            discountPrice : discountprice
    });

    const [getDescription, setGetDescription] = useState();
    

    const [picture, setPicture] = useState(image);
    console.log(picture)

    const imageInputRef = React.useRef();
    // const describeInputRef = React.useRef();

     // Destructuring from Update Course State
    const { courseName, coursePrice, startDate, endDate, discountPrice } = createCourse;

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

    /** ACTIONS  **/

    const handleOnChange = (event) => {
        const getValue = {...createCourse}
        getValue[event.target.name]=event.target.value;

        setCreateCourse(getValue);
        console.log(getValue);

    };

    // Actions for Submit button
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(createCourse);

    
        // console.log(id, courseName, coursePrice, startDate, endDate, discountPrice, getDescription, picture);

        setCreateCourse({
            courseName : '',
            coursePrice : '',
            startDate : '',
            endDate : '',
            discountPrice : '',
        });

        imageInputRef.current.value = "";
        setPicture(null);

    }
 
    return (
        <form className="row" onSubmit={handleSubmit} >
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                        <div className="mb-3">
                            <label className="form-label">Course Name <span className="text-danger">*</span></label>
                            <input type="text" name='courseName' value={courseName} className="form-control"  
                                placeholder="e.g : Web Development"
                                onChange={(e) => handleOnChange(e)}
                            />
                        </div>
                       

                        <div className="mb-3">
                            <label>Price <span className="text-danger">*</span></label>
                            <input type="number" value={coursePrice} name="coursePrice" className="form-control" 
                                placeholder="Enter amount"
                                onChange={(e) => handleOnChange(e)}
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

                    </div>
                </div> 
            </div> 
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="mt-0 mb-3 bg-light p-2">Discount</h5>
                        <div className="mb-3">
                            <label>Discount Price</label>
                            <input type="text" value={discountPrice } name='discountPrice'  className="form-control" 
                                placeholder="Enter amount"
                                onChange={(e) => handleOnChange(e)} 
                            />
                            
                        </div>
                 
                        <div className="mb-3">
                            <label className="form-label">Course Images <span className="text-danger">*</span></label>
                            {/* <input type="file" accept="image/png, image/jpeg, image/jpg" ref={imageInputRef}  className="form-control" placeholder="Choose File" onChange={uploadPicture}/> */}
                            <input type="file" accept="image/png, image/jpeg, image/jpg" ref={imageInputRef} onChange={event => setPicture(event.target.files[0])}  className="form-control" placeholder="Choose File" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-auto">
                <div className="col-12">
                    <div className=" mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light waves-effect">Cancel</button>
                        <button type="submit"  className="btn w-sm rounded-pill btn-success waves-effect waves-light ml-3">Save</button>
                    </div>
                </div> 
            </div>
        </form>
    
    )
}

export default CreateCourses
