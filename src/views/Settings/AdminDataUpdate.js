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
import Alert from 'src/containers/Alert';


const AdminDataUpdate = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    // Input field statets
    const [updateAdmin, setUpdateAdmin] = useState({
        name : '', 
        paystack : '', 
        adminphone : '', 
        password : '', 
    });

    // Handling Error Response with Hooks State
    const [error, setError] = useState({
        nameErr : '', 
        paystackErr : '', 
        adminphoneErr : '', 
        passwordErr : '',
        imageErr : '',
        adminImageErr : '',
    });

    const [image, setImage] = useState('');
    const [adminImage, setAdminImage] = useState('');
    
    //  Modal Action  
    const [modal, setModal] = useState(true);
    const toggle = () =>{
        setModal(false);
    };

    // Global State
    const customPostMain  = useSelector(state => state.customPostData);
    const customStatusMain = useSelector(state => state.customStatusData)
    
    
    // Destructuring 
    const {name, paystack, adminphone, password} = updateAdmin;
    const {nameErr, paystackErr, adminphoneErr, passwordErr, imageErr, adminImageErr} = error;
    const {customPost, loading} = customPostMain;
    const {customStatus} = customStatusMain;
    

    // useRefs
    const imageInputRef = React.useRef();
    const adminImageInputRef = React.useRef();

    
    // Form Data before posting the Data
    let updateAdminForm = new FormData();

    // Append all value to FormData
    updateAdminForm.append('name', name);
    updateAdminForm.append('paystack', paystack);
    updateAdminForm.append('adminphone', adminphone);
    updateAdminForm.append('image', image);
    updateAdminForm.append('admin', adminImage);
    updateAdminForm.append('password', password);
    


    //** Actions **\\

    // Handle Form value change
    const handleOnChange = (event) => {
        const getValue = {...updateAdmin}
        getValue[event.target.name]=event.target.value;

        setUpdateAdmin(getValue);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/dashboard');   
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updateAdmin, image, adminImage);


        let valid = true;
    
        if (name === '') {
            setError({
                nameErr: 'Name cannot be blank.'
            })
            valid = false
        }

        if (paystack === '') {
            setError({
                paystackErr: 'Paystack cannot be blank.'
            })
            valid = false
        }


        if (adminphone === '') {
            setError({
                adminphoneErr: 'Admin Phone cannot be blank.'
            })
            valid = false
        }

        if (password === '') {
            setError({
                passwordErr: 'Password cannot be blank.'
            })
            valid = false
        }

        if (image === '') {
            setError({
                imageErr: 'Image cannot be blank.'
            })
            valid = false
        }

        if (adminImage === '') {
            setError({
                adminImageErr: 'Admin Image cannot be blank.'
            })
            valid = false
        }

        
       

        if (valid) {
            const adminUpdateURL = 'https://pluralcode.academy/academyAPI/api/updateadmin.php'
            dispatch(customPostAction(adminUpdateURL, updateAdminForm));
            
            setUpdateAdmin({
                name : '', 
                paystack : '', 
                adminphone : '', 
                password : '', 
            });

            imageInputRef.current.value = "";
            adminImageInputRef.current.value = "";
            setImage(null);
            setAdminImage(null);
            
            // setTimeout (() => { toggle() }, 3000);


        }
        
       
        
    }

    console.log(customStatus[0]?.status)

    let redirect = null;
    let alertMessage = null;

    if (customStatus?.status === 'success') {
        redirect = <Redirect to = "/dashboard"/>;
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
                                    <div className="mb-3">
                                        <label className="form-label">Name <span className="text-danger">*</span></label>
                                        <input type="text" name='name' value={name} className="form-control" onChange={(e) => handleOnChange(e)} placeholder="e.g : Web Development" required/>
                                        <div> 
                                            <small class='text-danger text-sm'>{nameErr}</small>
                                        </div>
                                    </div>
            
                                    <div className="mb-3">
                                        <label>Admin Phone <span className="text-danger">*</span></label>
                                        <input type="tel" value={adminphone} name="adminphone" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter Admin Phone"/>
                                        <div> 
                                            <small class='text-danger text-sm'>{adminphoneErr}</small>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label>Password <span className="text-danger">*</span></label>
                                        <input type="password" value={password} name="password" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Enter Password" required/>
                                        <div> 
                                            <small class='text-danger text-sm'>{passwordErr}</small>
                                        </div>
                                    </div>

                                </div>
                            </div> 
                        </div> 
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">Image <span className="text-danger">*</span></label>
                                        <input type="file"  ref={imageInputRef}   className="form-control" placeholder="Choose File" onChange={event => setImage(event.target.files[0])} required/>
                                        {/* accept="image/png, image/jpeg, image/jpg" */}
                                        <div> 
                                            <small class='text-danger text-sm'>{imageErr}</small>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Admin Image <span className="text-danger">*</span></label>
                                        <input type="file" ref={adminImageInputRef}   className="form-control" placeholder="Choose File" onChange={event => setAdminImage(event.target.files[0])} required/>
                                        <div> 
                                            <small class='text-danger text-sm'>{adminImageErr}</small>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label>Pay Stack <span className="text-danger">*</span></label>
                                        <input type="url" value={paystack} name="paystack" className="form-control" onChange={(e) => handleOnChange(e)} placeholder="Pay Stack" required/>
                                        <div> 
                                            <small class='text-danger text-sm'>{paystackErr}</small>
                                        </div>
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

export default AdminDataUpdate
