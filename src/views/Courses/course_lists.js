import React, { forwardRef, useEffect, useRef, useState } from 'react';
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
import MaterialTable from 'material-table';
import { Input } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import courseListAction from 'src/Redux Statement/actions/courseListAction';
import { CCard, CCol, CRow, CSpinner } from '@coreui/react';
import {
    Link, useHistory
  } from "react-router-dom";
import customStatusUpdateAction from 'src/Redux Statement/actions/customStatusUpdateAction';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import moment from 'moment';

  const CourseLists = () => {
    const courseListContent = useSelector(state => state.courseListData.courseList);
    
    const customPostContent = useSelector(state => state.customPostData.customPost);
    
    
    let history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(courseListAction());
    }, []);


    // const [refresh, setRefresh] = useState([]);
    // const test = customPostContent.map(item => setRefresh(item));

    function refreshPage() {
        window.location.reload(false);
      }
     

    const handleOPenDetails =(item) => {
        history.push(`/course_details/${item}`);   
    };

    // Handle Update Status to Completed
    const handleUpdateActive = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/updatingactive.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id)
        dispatch(customStatusUpdateAction(url, setIdFormDate))
    }

    
    // Handle update State to Active
    const handleUpdatePending = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/updatepending.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id)
        dispatch(customStatusUpdateAction(url, setIdFormDate))
    }
    

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
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

    // Columns completed
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
        {title: 'Description', field: 'description', render: item => <Link onClick={() => handleOPenDetails(item.id)}>{item.description}</Link>},
        {title: 'Discount Price', field: 'discountprice'},
        {title: 'Price', field: 'price'},
        {title: 'Start Date', field: 'start_date', render : item => <h6>{moment(item.start_date).format('MMMM Do YYYY, h:mm:ss a')}</h6> },
        {title: 'End Date', field: 'end_date', render : item => <h6>{moment(item.end_date).format('MMMM Do YYYY, h:mm:ss a')}</h6>},
        {title: 'Status', field: 'status'},
        {title: 'Create Comunity', field: 'createComunity', render: item => <button>Create Comunity</button>}
    ]

    // Columns for Active and Pending columns
    const  activeColumns = [
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
        {title: 'Description', field: 'description', render: item => <Link onClick={() => handleOPenDetails(item.id)}>{item.description}</Link>},
        {title: 'Discount Price', field: 'discountprice'},
        {title: 'Price', field: 'price'},
        {title: 'Start Date', field: 'start_date', render : item => <h6>{moment(item.start_date).format('MMMM Do YYYY, h:mm:ss a')}</h6> },
        {title: 'End Date', field: 'end_date', render : item => <h6>{moment(item.end_date).format('MMMM Do YYYY, h:mm:ss a')}</h6>},
        {title: 'Status', field: 'status', render: item => <button onClick={() => handleUpdateActive(item.id)}>{item.status}</button>},
    ]

    const pendingColumns = [
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
        {title: 'Description', field: 'description', render: item => <Link onClick={() => handleOPenDetails(item.id)}>{item.description}</Link>},
        {title: 'Discount Price', field: 'discountprice'},
        {title: 'Price', field: 'price'},
        {title: 'Start Date', field: 'start_date', render : item => <h6>{moment(item.start_date).format('MMMM Do YYYY, h:mm:ss a')}</h6> },
        {title: 'End Date', field: 'end_date', render : item => <h6>{moment(item.end_date).format('MMMM Do YYYY, h:mm:ss a')}</h6>},
        {title: 'Status', field: 'status', render: item => <button onClick={() => handleUpdatePending(item.id)}>{item.status}</button>},
    ]


      return (
        <CRow>
            {/* Completed */}
            <CCol xl={12}>
                <CCard>
                    <MaterialTable
                    
                    icons={tableIcons}
                    columns={columns}
                    data = {courseListContent.completed}
                    title="Completed Course List"
                    options={{
                        exportButton: true,
                        
                    }}

                    localization= {{
                        body: {
                            emptyDataSourceMessage: <CSpinner
                            color="primary"
                            style={{width:'4rem', height:'4rem'}}
                        />,
                            
                        }
                    }}
                    
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            const dataUpdate = [...courseListContent.completed];
                            
                            const index = oldData.tableData.id;
                            const forNewData = dataUpdate[index] = newData;
                            
                            const {id, image, name, description, discountprice, price, start_date, end_date} = forNewData;
                            console.log(forNewData );

                            let upDateCourse = new FormData();

                            upDateCourse.append('courseid', id);
                            upDateCourse.append('course_name', name);
                            upDateCourse.append('image', image);
                            upDateCourse.append('course_description', description);
                            upDateCourse.append('discountprice', discountprice);
                            upDateCourse.append('price', price);
                            upDateCourse.append('startdate', start_date);
                            upDateCourse.append('enddate', end_date);

                            const updateURL = 'https://pluralcode.academy/academyAPI/api/updatecourse.php'
                            dispatch(customPostAction(updateURL, upDateCourse));
                            
                            resolve();
                            dispatch(courseListAction());
                            }, 1000)
                        }),
                       
                        
                        onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                               
                                const dataDelete = [...courseListContent.completed];
                                const deleteIndex = oldData.tableData.id;
                                
                                const forNewData = dataDelete[deleteIndex]
                                const {id} = forNewData;
              
                                let deleteID = new FormData();
                                 deleteID.append('courseid', id);

                                const deleteURL = 'https://pluralcode.academy/academyAPI/api/deletecourse.php'
                                dispatch(customPostAction(deleteURL, deleteID));
                            
                                resolve();
                                dispatch(courseListAction());
                            }, 1000);
                        })
                    }}
                    
                    />
                </CCard>
            </CCol>
            
            {/* Active */}
            <CCol xl={12}>
                <CCard>
                    <MaterialTable
                    icons={tableIcons}
                    columns={activeColumns}
                    data = {courseListContent.active}
                    title="Active Course List"
                    options={{
                        exportButton: true,
                        
                    }}

                    localization= {{
                        body: {
                            emptyDataSourceMessage: <CSpinner
                            color="primary"
                            style={{width:'4rem', height:'4rem'}}
                        />,
                            
                        }
                    }}
                    
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            const dataUpdate = [...courseListContent.active];
                            
                            const index = oldData.tableData.id;
                            const forNewData = dataUpdate[index] = newData;
                            
                            const {id, image, name, description, discountprice, price, start_date, end_date} = forNewData;
                            console.log(forNewData );

                            let upDateCourse = new FormData();

                            upDateCourse.append('courseid', id);
                            upDateCourse.append('course_name', name);
                            upDateCourse.append('image', image);
                            upDateCourse.append('course_description', description);
                            upDateCourse.append('discountprice', discountprice);
                            upDateCourse.append('price', price);
                            upDateCourse.append('startdate', start_date);
                            upDateCourse.append('enddate', end_date);

                            const updateURL = 'https://pluralcode.academy/academyAPI/api/updatecourse.php'
                            dispatch(customPostAction(updateURL, upDateCourse));
                            
                            resolve();
                            dispatch(courseListAction());
                            }, 1000)
                        }),
                        
                        onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                               
                                const dataDelete = [...courseListContent.active];
                                const deleteIndex = oldData.tableData.id;
                                
                                const forNewData = dataDelete[deleteIndex]
                                const {id} = forNewData;
              
                                let deleteID = new FormData();
                                 deleteID.append('courseid', id);

                                const deleteURL = 'https://pluralcode.academy/academyAPI/api/deletecourse.php'
                                dispatch(customPostAction(deleteURL, deleteID));
                            
                                resolve();
                                dispatch(courseListAction());
                            }, 1000);
                        })
                    }}
                    
                    />
                </CCard>
            </CCol>
           
            {/* Pending */}
            <CCol xl={12}>
                <CCard>
                    <MaterialTable
                    icons={tableIcons}
                    columns={pendingColumns}
                    data = {courseListContent.pending}
                    title="Pending Course List"
                    options={{
                        exportButton: true
                    }}

                    localization= {{
                        body: {
                            emptyDataSourceMessage: <CSpinner
                            color="primary"
                            style={{width:'4rem', height:'4rem'}}
                        />,
                            
                        }
                    }}
                    
                    
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            const dataUpdate = [...courseListContent.pending];
                            
                            const index = oldData.tableData.id;
                            const forNewData = dataUpdate[index] = newData;
                            
                            const {id, image, name, description, discountprice, price, start_date, end_date} = forNewData;
                            console.log(forNewData );

                            let upDateCourse = new FormData();

                            upDateCourse.append('courseid', id);
                            upDateCourse.append('course_name', name);
                            upDateCourse.append('image', image);
                            upDateCourse.append('course_description', description);
                            upDateCourse.append('discountprice', discountprice);
                            upDateCourse.append('price', price);
                            upDateCourse.append('startdate', start_date);
                            upDateCourse.append('enddate', end_date);

                            const updateURL = 'https://pluralcode.academy/academyAPI/api/updatecourse.php'
                            dispatch(customPostAction(updateURL, upDateCourse));
                            
                            resolve();
                            dispatch(courseListAction());
                            }, 1000)
                        }),
                        
                        onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                               
                                const dataDelete = [...courseListContent.pending];
                                const deleteIndex = oldData.tableData.id;
                                
                                const forNewData = dataDelete[deleteIndex]
                                const {id} = forNewData;

              
                                let deleteID = new FormData();
                                 deleteID.append('courseid', id);

                                const deleteURL = 'https://pluralcode.academy/academyAPI/api/deletecourse.php'
                                dispatch(customPostAction(deleteURL, deleteID));
                            
                                resolve();
                                dispatch(courseListAction());
                            }, 1000);
                        })
                    }}
                    
                    />
                </CCard>
            </CCol>
        
        </CRow>

      )
  }
  
  export default CourseLists
