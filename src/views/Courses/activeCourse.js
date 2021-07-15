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

const ActiveCourse = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const customPostMain  = useSelector(state => state.customPostData);
    const {customPost, loading} = customPostMain;
    const customPostMessageData = useMemo(() => customPost, [customPost]);

    const compleCourseList = useSelector(state => state.courseListData.courseList);
    const {active} = compleCourseList;
    const activeData = useMemo(() => active, [active]);
    // console.log();

    const [modal, setModal] = useState(false);
    const [getID, setGetID] = useState('');
    const [getAllCourses, setGetAllCourses] = useState('');
    
    const toggle = (id) =>{
        setModal(!modal);
        setGetID(id)
    }

    useEffect(() => {
        dispatch(courseListAction());
    }, [ ]); //dispatch(courseListAction())

    const handleOPenDetails =(item) => {
        history.push(`/course_details/${item}`);   
    };

    // const handleAddCourse =() => {
    //     history.push(`/create_course`);   
    // };

    const handleEditCourse = (courseData) => {
        const {id} = courseData;
        
        history.push(`/update_completed_course/${id}`)
    }

    const handleDeleteCourse = (courseData) => {
        const {id} = courseData;
    
        let deleteID = new FormData();
        deleteID.append('courseid', id);

        const deleteURL = 'https://pluralcode.academy/academyAPI/api/deletecourse.php'
        dispatch(customPostAction(deleteURL, deleteID));
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

    // Columns for Active and Pending columns
    const  activeColumns = [
        
        {title: 'Image', field: 'image', render: item => (
            <>
                {
                    item.filetype === 'image' ? <img src={item.image} alt="" border="3" height="100" width="100" />
                    :  item.filetype === 'video' ?
                    <video border="3" height="100" width="100" controls>
                        <source src={item.video} type="video/mp4"/>
                    </video>
                    : null
                }
            </>
        )},
        
        {title: 'Name', field: 'name'},
        {title: 'Discount Price', field: 'discountprice'},
        {title: 'Price', field: 'price'},
        {title: 'Start Date', field: 'start_date', render : item => <h6>{moment(item.start_date).format('MMMM Do YYYY, h:mm:ss a')}</h6> },
        {title: 'End Date', field: 'end_date', render : item => <h6>{moment(item.end_date).format('MMMM Do YYYY, h:mm:ss a')}</h6>},
        {title: 'Status', field: 'status'},
        {title: 'Create Comunity', field: 'createComunity', render: item => <CButton color='primary' size={'sm'} className="m-2 primary" onClick={() => toggle(item.id)}>Create Community</CButton>},
        {title: 'View More', render: item => <CButton color='primary' size={'sm'} className="m-2 primary" onClick={() => handleOPenDetails(item.id)}>Category</CButton>},
    ]
    return (
        <CRow>
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

                        actions={[
                            {
                                icon: Edit,
                                tooltip: 'Edit Course',
                                onClick: (event, rowData) =>  handleEditCourse(rowData)
                            },
                            rowData => ({
                                icon: DeleteOutline,
                                tooltip: 'Delete User', 
                                onClick: (event, rowData) =>  handleDeleteCourse(rowData)
                                
                            })
                        ]}
                    
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

export default ActiveCourse
