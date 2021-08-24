import React, {useEffect } from 'react'
import {
  CCol,
  CRow,
  CCallout
} from '@coreui/react'


import { Loading } from 'src/routes.js';
import { useDispatch, useSelector } from 'react-redux';
import customReadAction from 'src/Redux Statement/actions/CRUD/customReadAction.js';

// Dashboard Component
const Dashboard = () => {
  const dispatch = useDispatch();

  // Dashboard Api
  const url = "https://pluralcode.academy/academyAPI/api/dashboardforadmin.php";

  // Call customReadAction() to enable 
  useEffect(() => {
    dispatch(customReadAction(url));
  }, [dispatch]);

  // Get data from redux state
  const customReadContent = useSelector(state => state.customReadData);
  const {customRead, loading} = customReadContent;

  return (
    <>
      {
        loading ? <Loading/> 
        :
        (
          <CRow>
            <CCol sm="4">
            {
              customRead.coursetotal?.map((item) => (
                <CCallout color="dark">
                  <h4 id="traffic" className="card-title mb-0">{item.total}</h4>
                  <div className="small text-muted">Total Courses</div>
                </CCallout>
              ))
            }
            </CCol>
            <CCol sm="4">
              {
                customRead.userstotal?.map(item => (
                  <CCallout color="info">
                    <h4 id="traffic" className="card-title mb-0">{item.total}</h4>
                    <div className="small text-muted">Total Users</div>
                  </CCallout>
                ))
              }
                    
            </CCol>
            <CCol sm="4">
              {
                customRead.eventtotal?.map(item => (
                  <CCallout color="success">
                    <h4 id="traffic" className="card-title mb-0">{item.total}</h4>
                    <div className="small text-muted">Total Events</div>
                  </CCallout>
                ))
              }       
            </CCol>
          </CRow>

        )
      }
    </>
  )
}

export default Dashboard
