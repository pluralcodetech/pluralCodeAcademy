import React, { forwardRef, useEffect, useState } from 'react';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable, { MTableBodyRow } from 'material-table';
import { Input } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import courseListAction from 'src/Redux Statement/actions/courseListAction';
import { CButton, CCard, CCol, CRow, CSpinner } from '@coreui/react';
// import AddEventModal from './AddEventModal';
import eventListAction from 'src/Redux Statement/actions/eventListAction';
import moment from 'moment';
import deleteEventAction from 'src/Redux Statement/actions/deleteEventAction';
import upDateEventAction from 'src/Redux Statement/actions/upDateEventAction';
import { useHistory } from 'react-router-dom';
import customStatusUpdateAction from 'src/Redux Statement/actions/customStatusUpdateAction';
import customReadAction from 'src/Redux Statement/actions/CRUD/customReadAction';
import {Redirect} from "react-router-dom"

const UserManagement = () => {
    const tableRef = React.createRef();

    const dispatch = useDispatch();

    let history = useHistory()

    const loading = useSelector(state => state.customReadData.loading);
    console.log(loading)

    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(() => {
        dispatch(customReadAction("https://pluralcode.academy/academyAPI/api/appusers.php"));
    }, []);

    const customReadContent = useSelector(state => state.customReadData.customRead);
    console.log(customReadContent);

     // Handle active State to Active
     const handleActive = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/activateuser.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id)
        dispatch(customStatusUpdateAction(url, setIdFormDate));

    }

     // Handle suspend State to Active
     const handleSuspend = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/suspend.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id)
        dispatch(customStatusUpdateAction(url, setIdFormDate));

    }

    const tableIcons = {
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props}  ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

      
    // Columns
    const columns = [
        {title: 'Image', field: 'image', render: item => <img src={item.image} alt="" border="3" height="100" width="100" />,
            editComponent: editProps => (
                <Input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    autoFocus={true}
                    onChange={e => editProps.onChange(e.target.files[0])}
                />
            )
        },
        {title: 'Name', field: 'name'},
        {title: 'Last Name', field: 'lastname'},
        {title: 'Email', field: 'email'},
        {title: 'Course', field: 'course'},
        {title: 'Course Prices', field: 'course_price'},
        {title: 'Phone Number', field: 'phone_number'},
        {title: 'Active', field: 'active'},
        {title: 'events', field: 'events'},
        {title: 'Activity', field: 'activate', render : item => (
            <>
                
                <button onClick={() => handleActive(item.id)}>{item.activate}</button> 
                <button onClick={() => handleSuspend(item.id)} className="mt-3">{item.suspend}</button>
            </>
        )}
    ]
    return (
        <CRow>
            <CCol xl={12}>

                <CCard>
                    <MaterialTable
                    icons={tableIcons}
                    columns={columns}
                    data = {customReadContent}
                    tableRef={tableRef}
                    localization= {{
                        body: {
                            emptyDataSourceMessage: <CSpinner
                            color="primary"
                            style={{width:'4rem', height:'4rem'}}
                        />,
                            
                        }
                    }}
                   
                    title="User Management"
                    options={{
                        exportButton: true,
                        
                    }}
                    
                    
                    />
                </CCard>
            </CCol>
        </CRow>
    
    )
}

export default UserManagement
