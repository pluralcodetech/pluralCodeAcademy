import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
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
import { CButton, CCard, CCol, CRow, CSpinner } from '@coreui/react';
import {
    Link, useHistory
  } from "react-router-dom";
import customStatusUpdateAction from 'src/Redux Statement/actions/customStatusUpdateAction';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import moment from 'moment';
import CommunityModal from '../Community/CommunityModal';
import Alert from 'src/containers/Alert';

  const CourseLists = () => {
    
    let history = useHistory();
    const dispatch = useDispatch();

    const customPostMain  = useSelector(state => state.customPostData);
    const {customPost, loading} = customPostMain;
    const customPostMessageData = useMemo(() => customPost, [customPost]);

    const compleCourseList = useSelector(state => state.courseListData.courseList);
    const {completed} = compleCourseList
    console.log(completed);

    
    const activeCourseList = useSelector(state => state.courseListData.courseList.active);
    const pendingCourseList = useSelector(state => state.courseListData.courseList.pending);

    const completedData = useMemo(() => completed, [completed]);

    const activeData = useMemo(() => activeCourseList, [activeCourseList]);
    const pendingData = useMemo(() => pendingCourseList, [pendingCourseList]);

    const [modal, setModal] = useState(false);
    const [getID, setGetID] = useState('');
    const [getAllCourses, setGetAllCourses] = useState('');
    
    const toggle = (id) =>{
        setModal(!modal);
        setGetID(id)
    }

    useEffect(() => {
        dispatch(courseListAction());
    }, []);

    const handleOPenDetails =(item) => {
        history.push(`/course_details/${item}`);   
    };

    const handleAddCourse =() => {
        history.push(`/create_course`);   
    };

    const handleEditCourse = (courseData) => {
        const {id} = courseData;
    
        history.push(`/update_course/${id}`)
    }

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
        {title: 'Create Comunity', field: 'createComunity', render: item => <CButton color='primary' size={'sm'} className="m-2 primary" onClick={() => toggle(item.id)}>Create Community</CButton>}
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
        {title: 'Status', field: 'status', render: item => <CButton color='primary' size={'sm'} className="m-2 primary" onClick={() => handleUpdateActive(item.id)}>{item.status}</CButton>},
        {title: 'Create Comunity', field: 'createComunity', render: item => <CButton color='primary' size={'sm'} className="m-2 primary" onClick={() => toggle(item.id)}>Create Community</CButton>}
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
        {title: 'Status', field: 'status', render: item => <CButton color='danger' size={'sm'} className="m-2" onClick={() => handleUpdateActive(item.id)}>{item.status}</CButton>},
        {title: 'Create Comunity', field: 'createComunity', render: item => <CButton  color='primary' size={'sm'} className="m-2 primary" onClick={() => toggle(item.id)}>Create Community</CButton>}
    ]


      return (
        <CRow>
            {/* Completed */}
            <CCol xl={12}>
                <CCard>
                    
                    <MaterialTable
                    icons={tableIcons}
                    columns={columns}
                    data = {completedData}
                    title="Completed Course List"
                    options={{
                        exportButton: true,
                        
                    }}

                    
                    actions={[
                        {
                          icon: AddBox,
                          tooltip: 'Add Course',
                          isFreeAction: true,
                          onClick: (event) => handleAddCourse()
                        },
                        {
                            icon: Edit,
                            tooltip: 'Edit Course',
                            onClick: (event, rowData) =>  handleEditCourse(rowData)
                        },
                          rowData => ({
                            icon: DeleteOutline,
                            tooltip: 'Delete User',
                            // onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                            // disabled: rowData.birthYear < 2000
                          })
                    ]}

                    //                  editable={{
                    //     onRowUpdate: (newData, oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //         const dataUpdate = [...completedData];
                            
                    //         const index = oldData.tableData.id;
                    //         const forNewData = dataUpdate[index] = newData;
                            
                    //         const {id, image, name, description, discountprice, price, start_date, end_date} = forNewData;
                    //         console.log(forNewData );

                    //         let upDateCourse = new FormData();

                    //         upDateCourse.append('courseid', id);
                    //         upDateCourse.append('course_name', name);
                    //         upDateCourse.append('image', image);
                    //         upDateCourse.append('course_description', description);
                    //         upDateCourse.append('discountprice', discountprice);
                    //         upDateCourse.append('price', price);
                    //         upDateCourse.append('startdate', start_date);
                    //         upDateCourse.append('enddate', end_date);

                    //         const updateURL = 'https://pluralcode.academy/academyAPI/api/updatecourse.php'
                    //         dispatch(customPostAction(updateURL, upDateCourse));
                            
                    //         resolve();
                    //         dispatch(courseListAction());
                    //         }, 1000)
                    //     }),
                        
                    //     onRowDelete: (oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                               
                    //             const dataDelete = [...completedData];
                    //             const deleteIndex = oldData.tableData.id;
                                
                    //             const forNewData = dataDelete[deleteIndex]
                    //             const {id} = forNewData;
              
                    //             let deleteID = new FormData();
                    //              deleteID.append('courseid', id);

                    //             const deleteURL = 'https://pluralcode.academy/academyAPI/api/deletecourse.php'
                    //             dispatch(customPostAction(deleteURL, deleteID));
                            
                    //             resolve();
                    //             dispatch(courseListAction());
                    //         }, 1000);
                    //     })
                    // }}

                    localization= {{
                        body: {
                            emptyDataSourceMessage: <CSpinner
                            color="primary"
                            style={{width:'4rem', height:'4rem'}}
                        />,
                            
                        }
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
                    data = {activeData}
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
                    
                    // editable={{
                    //     onRowUpdate: (newData, oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //         const dataUpdate = [...courseListContent.active];
                            
                    //         const index = oldData.tableData.id;
                    //         const forNewData = dataUpdate[index] = newData;
                            
                    //         const {id, image, name, description, discountprice, price, start_date, end_date} = forNewData;
                    //         console.log(forNewData );

                    //         let upDateCourse = new FormData();

                    //         upDateCourse.append('courseid', id);
                    //         upDateCourse.append('course_name', name);
                    //         upDateCourse.append('image', image);
                    //         upDateCourse.append('course_description', description);
                    //         upDateCourse.append('discountprice', discountprice);
                    //         upDateCourse.append('price', price);
                    //         upDateCourse.append('startdate', start_date);
                    //         upDateCourse.append('enddate', end_date);

                    //         const updateURL = 'https://pluralcode.academy/academyAPI/api/updatecourse.php'
                    //         dispatch(customPostAction(updateURL, upDateCourse));
                            
                    //         resolve();
                    //         dispatch(courseListAction());
                    //         }, 1000)
                    //     }),
                        
                    //     onRowDelete: (oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                               
                    //             const dataDelete = [...courseListContent.active];
                    //             const deleteIndex = oldData.tableData.id;
                                
                    //             const forNewData = dataDelete[deleteIndex]
                    //             const {id} = forNewData;
              
                    //             let deleteID = new FormData();
                    //              deleteID.append('courseid', id);

                    //             const deleteURL = 'https://pluralcode.academy/academyAPI/api/deletecourse.php'
                    //             dispatch(customPostAction(deleteURL, deleteID));
                            
                    //             resolve();
                    //             dispatch(courseListAction());
                    //         }, 1000);
                    //     })
                    // }}
                    
                    />
                </CCard>
            </CCol>
           
            {/* Pending */}
            <CCol xl={12}>
                <CCard>
                    <MaterialTable
                    icons={tableIcons}
                    columns={pendingColumns}
                    data = {pendingData}
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
                    
                    
                    // editable={{
                    //     onRowUpdate: (newData, oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //         const dataUpdate = [...courseListContent.pending];
                            
                    //         const index = oldData.tableData.id;
                    //         const forNewData = dataUpdate[index] = newData;
                            
                    //         const {id, image, name, description, discountprice, price, start_date, end_date} = forNewData;
                    //         console.log(forNewData );

                    //         let upDateCourse = new FormData();

                    //         upDateCourse.append('courseid', id);
                    //         upDateCourse.append('course_name', name);
                    //         upDateCourse.append('image', image);
                    //         upDateCourse.append('course_description', description);
                    //         upDateCourse.append('discountprice', discountprice);
                    //         upDateCourse.append('price', price);
                    //         upDateCourse.append('startdate', start_date);
                    //         upDateCourse.append('enddate', end_date);

                    //         const updateURL = 'https://pluralcode.academy/academyAPI/api/updatecourse.php'
                    //         dispatch(customPostAction(updateURL, upDateCourse));
                            
                    //         resolve();
                    //         dispatch(courseListAction());
                    //         }, 1000)
                    //     }),
                        
                    //     onRowDelete: (oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                               
                    //             const dataDelete = [...courseListContent.pending];
                    //             const deleteIndex = oldData.tableData.id;
                                
                    //             const forNewData = dataDelete[deleteIndex]
                    //             const {id} = forNewData;

              
                    //             let deleteID = new FormData();
                    //              deleteID.append('courseid', id);

                    //             const deleteURL = 'https://pluralcode.academy/academyAPI/api/deletecourse.php'
                    //             dispatch(customPostAction(deleteURL, deleteID));
                            
                    //             resolve();
                    //             dispatch(courseListAction());
                    //         }, 1000);
                    //     })
                    // }}
                    
                    />
                </CCard>
            </CCol>
            <CommunityModal modal={modal} 
                toggle={toggle}
                id={getID}
            />
        
        </CRow>

      )
  }
  
  export default CourseLists





















// import BTable from 'react-bootstrap/Table';
// import { CCard, CCol, CRow } from '@coreui/react'
// import React, { useEffect, useMemo } from 'react'
// import { useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
// import { COLUMNS } from './courseColumnsData'
// import { useDispatch, useSelector } from 'react-redux';
// import courseListAction from 'src/Redux Statement/actions/courseListAction';

// const CourseLists = () => {

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(courseListAction());
//     }, []);
    // const completedCourseList = useSelector(state => state.courseListData.courseList.completed);
    // const courseListContent = useSelector(state => state.courseListData.courseList.completed);
    // const courseListContent = useSelector(state => state.courseListData.courseList.completed);

//   let test = !(completedCourseList === null) ? [] : console.error();

    
    // const columns = useMemo(() => COLUMNS, []);
    // const completeData = useMemo(() => completedCourseList, [completedCourseList]);
    // const data = useMemo(() => completedCourseList, [completedCourseList]);

    // console.log(completedCourseList, completeData)


    // console.log(columns);

    // const completeData = courseListContent.map(item => item.complete)
    // console.log(courseListContent)

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    // } = useTable({columns, data});

    // const tableInstance = useTable(
    //     // { columns, data },
    //     useFilters,
    //     useGlobalFilter,
    //     useSortBy,
    //     usePagination
    //   );

    //   const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     page,
    //     nextPage,
    //     previousPage,
    //     canNextPage,
    //     canPreviousPage,
    //     prepareRow,
    //   } = tableInstance;

    // const {getTableProps, getTableBodyProps, headerGroups, rows, preparedRow} = tableInstance;
    // console.log(tableInstance);
//     return (
//         <CRow>
//             <CCol xl={12}>
//                 <CCard>
//                     {/* <BTable striped bordered hover size="sm" {...getTableProps()}>
//                         <thead>
//                             {headerGroups.map((headerGroup) => (
//                                 <tr {...headerGroup.getFooterGroupProps()}>
//                                     {
//                                         headerGroup.headers.map((column) => (
//                                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                                         ))
//                                     }
//                                 </tr>
//                             ))}
//                         </thead>
//                         <tbody {...getTableBodyProps()}>
//                             {
//                                 rows.map(row => {
//                                     preparedRow(row)
//                                     return (
//                                         <tr {...row.getRowProps()}>
//                                             {row.cells.map((cell) => {
//                                                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                             })}
//                                         </tr>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                     </BTable>
//                  */}
                
//                 </CCard>
//             </CCol>
//         </CRow>
//     )
// }

// export default CourseLists

