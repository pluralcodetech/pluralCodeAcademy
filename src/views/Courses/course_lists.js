import React, { forwardRef, useEffect } from 'react';
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
import { CCard, CCol, CRow } from '@coreui/react';
import {
    Link, useHistory
  } from "react-router-dom";
import customStatusUpdateAction from 'src/Redux Statement/actions/customStatusUpdateAction';

  const CourseLists = () => {
    const courseListContent = useSelector(state => state.courseListData.courseList);
    console.log(courseListContent);

    console.log(courseListContent.pending);
    
    let history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(courseListAction());
     
    }, [])

    const handleOPenDetails =(item) => {
        history.push(`/course_details/${item}`);   
    };


    const handleUpdateActive = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/updatingactive.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id)
        dispatch(customStatusUpdateAction(url, setIdFormDate))
    }

    

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
        {title: 'Image', field: 'image', render: item => <img src={item.image} alt="" border="3" height="100" width="100" />},
        {title: 'Name', field: 'name'},
        {title: 'Description', field: 'description', render: item => <Link onClick={() => handleOPenDetails(item.id)}>{item.description}</Link>},
        {title: 'Discount Price', field: 'discountprice'},
        {title: 'Price', field: 'price'},
        {title: 'Start Date', field: 'start_date'},
        {title: 'End Date', field: 'end_date',
            editComponent: editProps => (
                <Input
                    autoFocus={true}
                    onChange={e => editProps.onChange(e.target.value)}
                />
            )
        },
        {title: 'Status', field: 'status'},
    ]

    // Columns for Active and Pending columns
    const  activeColumns = [
        {title: 'Image', field: 'image', render: item => <img src={item.image} alt="" border="3" height="100" width="100" />},
        {title: 'Name', field: 'name'},
        {title: 'Description', field: 'description', render: item => <Link onClick={() => handleOPenDetails(item.id)}>{item.description}</Link>},
        {title: 'Discount Price', field: 'discountprice'},
        {title: 'Price', field: 'price'},
        {title: 'Start Date', field: 'start_date'},
        {title: 'End Date', field: 'end_date',
            editComponent: editProps => (
                <Input
                    autoFocus={true}
                    onChange={e => editProps.onChange(e.target.value)}
                />
            )
        },
        {title: 'Status', field: 'status', render: item => <button onClick={() => handleUpdateActive(item.id)}>{item.status}</button>},
    ]

    const pendingColumns = [
        {title: 'Image', field: 'image', render: item => <img src={item.image} alt="" border="3" height="100" width="100" />},
        {title: 'Name', field: 'name'},
        {title: 'Description', field: 'description', render: item => <Link onClick={() => handleOPenDetails(item.id)}>{item.description}</Link>},
        {title: 'Discount Price', field: 'discountprice'},
        {title: 'Price', field: 'price'},
        {title: 'Start Date', field: 'start_date'},
        {title: 'End Date', field: 'end_date',
            editComponent: editProps => (
                <Input
                    autoFocus={true}
                    onChange={e => editProps.onChange(e.target.value)}
                />
            )
        },
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
                    title="Course List"
                    options={{
                        exportButton: true,
                        
                    }}
                    
                    editable={{
                        onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   setData([...data, newData]);
            
                            //   resolve();
                            }, 1000);
                        }),
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   const dataUpdate = [...data];
                            //   const index = oldData.tableData.id;
                            //   dataUpdate[index] = newData;
                            //   setData([...dataUpdate]);
            
                            resolve();
                            }, 1000);
                        }),
                        onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   const dataDelete = [...data];
                            //   const index = oldData.tableData.id;
                            //   dataDelete.splice(index, 1);
                            //   setData([...dataDelete]);
            
                            resolve();
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
                    title="Course List"
                    options={{
                        exportButton: true,
                        
                    }}
                    
                    editable={{
                        onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   setData([...data, newData]);
            
                            //   resolve();
                            }, 1000);
                        }),
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   const dataUpdate = [...data];
                            //   const index = oldData.tableData.id;
                            //   dataUpdate[index] = newData;
                            //   setData([...dataUpdate]);
            
                            resolve();
                            }, 1000);
                        }),
                        onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   const dataDelete = [...data];
                            //   const index = oldData.tableData.id;
                            //   dataDelete.splice(index, 1);
                            //   setData([...dataDelete]);
            
                            resolve();
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
                    title="Course List"
                    options={{
                        exportButton: true,
                        
                    }}
                    
                    editable={{
                        onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   setData([...data, newData]);
            
                            //   resolve();
                            }, 1000);
                        }),
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   const dataUpdate = [...data];
                            //   const index = oldData.tableData.id;
                            //   dataUpdate[index] = newData;
                            //   setData([...dataUpdate]);
            
                            resolve();
                            }, 1000);
                        }),
                        onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                            //   const dataDelete = [...data];
                            //   const index = oldData.tableData.id;
                            //   dataDelete.splice(index, 1);
                            //   setData([...dataDelete]);
            
                            resolve();
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
