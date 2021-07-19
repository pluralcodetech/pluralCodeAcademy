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
import { Loading } from 'src/routes';
import { customStatusAction } from 'src/Redux Statement/actions/CRUD/customStatusAction';


const UpdateActiveCourses = () => {

    const dispatch = useDispatch();
    let history = useHistory();

    let getCourseData  = useParams(); 
    // console.log(getCourseData.id);

    const compleCourseList = useSelector(state => state.courseListData.courseList);
    const {active} = compleCourseList;
   
    const  activeData = useMemo(() => active, [active]);
    // console.log(completedCourseList)

    const customPostMain  = useSelector(state => state.customPostData);

    const {customPost, loading} = customPostMain;

    const customPostMessageData = useMemo(() => customPost, [customPost]);

    const customStatusMain = useSelector(state => state.customStatusData)
    const {customStatus} = customStatusMain

    const activeResult =  activeData.find(item => item.id === getCourseData.id); // To find object Id properties
    
    const {id, image, name, price, description, discountprice, start_date, end_date} = activeResult;
    const [createCourse, setCreateCourse] = useState({
            courseName : name, 
            coursePrice : price, 
            startDate : start_date, 
            endDate : end_date, 
            discountPrice : discountprice
    });

    const [getDescription, setGetDescription] = useState();
    

    const [picture, setPicture] = useState(image);
    // console.log(picture)

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
        
        // To Form Data before posting the Data
        let upDateCourse = new FormData();

        // Append all value to FormData
        upDateCourse.append('courseid', id);
        upDateCourse.append('course_name', courseName);
        upDateCourse.append('image', picture);
        upDateCourse.append('course_description', getDescription);
        upDateCourse.append('discountprice', discountPrice);
        upDateCourse.append('price', coursePrice);
        upDateCourse.append('startdate', startDate);
        upDateCourse.append('enddate', endDate);

        const updateURL = 'https://pluralcode.academy/academyAPI/api/updatecourse.php'
        dispatch(customPostAction(updateURL, upDateCourse));

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

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/active_Course');   
    };

    let redirect = null;

    if (customStatus[0]?.status === 'success') {
        redirect = <Redirect to = "/active_Course"/>;
        setTimeout (() => dispatch(customStatusAction('')) , 1000);
  
    };
 
    return (
        <div>
            {
                loading ? <Loading/> : 
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

export default UpdateActiveCourses
