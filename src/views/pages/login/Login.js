import React, { useState } from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import pluralCode_logo from '../../../assets/logo/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import loginAction from 'src/Redux Statement/actions/loginAction'

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const adminLogin = useSelector(state => state.loginStatusData.loginStatus);
  const {status} = adminLogin

  const [formState, setFormState] = useState(
    {
      adminName: '',
      password: '',
    }
  );

  const [error, setError] = useState(
    {
      adminNameErr: '',
      passwordErr: '',
    }
  );

  const {adminName, password} = formState;
  const {adminNameErr, passwordErr} = error;

  // Handle Form value change
  const handleOnChange = (event) => {
    const getValue = {...formState}
    getValue[event.target.name]=event.target.value;

    setFormState(getValue);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

    let valid = true;
   
      if ( adminName === '') {
          setError({
            adminNameErr: 'Admin Name cannot be blank.'
          })
          valid = false
      }

      if (password === '') {
          setError({
            passwordErr: 'Password cannot be blank.'
          })
          valid = false
      }

      if (valid) {
        let loginForm = new FormData();
        loginForm.append('name', adminName);
        loginForm.append('password', password);

        const loginURL = 'https://pluralcode.academy/academyAPI/api/adminlogin.php';
        dispatch(loginAction(loginURL, loginForm));
      }

      
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      {status === "success" && <Redirect to = {`/dashboard`} />}
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
              <img src={pluralCode_logo} className="m-auto" alt="pluralCode_icon" style={{width: '40%', color: 'white'}} />
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="mb-3">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name="adminName" value={adminName} placeholder="adminName" onChange={(e) => handleOnChange(e)} autoComplete="adminName" />
                      </CInputGroup>
                      <div> 
                        <small class='text-danger text-sm'>{adminNameErr}</small>
                      </div>
                    </div>
                    
                    
                    <div className="mb-4">
                      <CInputGroup >
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" name="password" value={password} placeholder="Password" onChange={(e) => handleOnChange(e)} autoComplete="current-password" />
                        
                      </CInputGroup>
                      <div> 
                          <small class='text-danger text-sm'>{passwordErr}</small>
                      </div>
                    </div>
                    
                      
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" onClick={handleSubmit} className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
             */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
