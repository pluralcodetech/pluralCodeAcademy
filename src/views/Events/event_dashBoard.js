import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
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
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable, { MTableBodyRow } from 'material-table';
import { Input } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import courseListAction from 'src/Redux Statement/actions/courseListAction';
import { CButton, CCard, CCol, CRow, CSpinner } from '@coreui/react';
import AddEventModal from './AddEventModal';
import eventListAction from 'src/Redux Statement/actions/eventListAction';
import moment from 'moment';
import deleteEventAction from 'src/Redux Statement/actions/deleteEventAction';
import upDateEventAction from 'src/Redux Statement/actions/upDateEventAction';
import { useHistory } from 'react-router-dom';
import addEventAction from 'src/Redux Statement/actions/addEventAction';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { Loading } from 'src/routes';

const EventDashBoard = () => {
    

    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispatch(eventListAction());
    }, 3000);
    

    const eventListContent = useSelector(state => state.eventListData);
    const {eventList} = eventListContent;

    const  eventListData = useMemo(() => eventList, [eventList]);


    const customPostMain  = useSelector(state => state.customPostData);
    const {customPost, loading} = customPostMain;
    const customPostMessageData = useMemo(() => customPost, [customPost]);


    const [modal, setModal] = useState(false);
    

    
    const toggle = () =>{
        setModal(!modal);
        console.log(modal);
    }

    const handleAddCourse =() => {
        history.push(`/create_event`);   
    };
    const handleEditEvent = (courseData) => {
        const {id} = courseData;
        history.push(`/update_event/${id}`)
    };

    const handleDeleteEvent = (eventData) => {
        const {id} = eventData;
    
        let deleteID = new FormData();
        deleteID.append('eventid', id);

        const deleteURL = 'https://pluralcode.academy/academyAPI/api/deleteevent.php'
        dispatch(customPostAction(deleteURL, deleteID));
        setTimeout (() => dispatch(eventListAction()) , 300);
    };

    const handleOPenDetails =(item) => {
        history.push(`/event_details/${item}`);   
    };

     // Handle Show Event State
     const handleShowEvent = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/show.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id)
        // dispatch(customStatusUpdateAction(url, setIdFormDate));
        dispatch(customPostAction(url, setIdFormDate));
        setTimeout (() => dispatch(eventListAction()) , 300);

    }

     // Handle Hide Event State 
     const handleHideEvent = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/hide.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id)
        // dispatch(customStatusUpdateAction(url, setIdFormDate));
        dispatch(customPostAction(url, setIdFormDate));
        setTimeout (() => dispatch(eventListAction()) , 300);
    }

    

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
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
        RefreshIcon: forwardRef((props, ref) => <RefreshIcon {...props} ref={ref} />),
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
        {title: 'Venue', field: 'venue'},
        {title: 'Category', field: 'categorytype'},
        {title: 'Start Date', field: 'start_date', render : item => <h6>{moment(item.start_date).format('MMMM Do YYYY, h:mm:ss a')}</h6>,
            editComponent: editProps => (
                <Input
                    type="datetime-local"
                    autoFocus={true}
                    onChange={e => editProps.onChange(e.target.value)}
                />
            )
         },
        {title: 'End Date', field: 'end_date', render : item => <h6>{moment(item.end_date).format('MMMM Do YYYY, h:mm:ss a')}</h6>,
            editComponent: editProps => (
                <Input
                    type="datetime-local"
                    autoFocus={true}
                    onChange={e => editProps.onChange(e.target.value)}
                />
            )
        },
        {title: 'Visible', field: 'visible', render : item => (
            <>
                {
                    item.visible === 'YES' ?
                    <CButton color='danger' size={'sm'} className="m-2" onClick={() => handleHideEvent(item.id)}>Hide</CButton>
                    :  
                    <CButton color='primary' size={'sm'} className="m-2" onClick={() => handleShowEvent(item.id)}>Show</CButton> 
                }
            </>
        )},
        {title: 'View More', render: item => <CButton color='info' size={'sm'} className="m-2" onClick={() => handleOPenDetails(item.id)}>Details</CButton>},
    ]
    return (
        <div>
            { loading ? <Loading/> 
                :
                (
                    <CRow>
                        <CCol xl={12}>

                            <CCard>
                                <MaterialTable
                                icons={tableIcons}
                                columns={columns}
                                data = {eventListData}
                                localization= {{
                                    body: {
                                        emptyDataSourceMessage: <CSpinner
                                        color="primary"
                                        style={{width:'4rem', height:'4rem'}}
                                    />,
                                        
                                    }
                                }}
                            
                                title="Event List"
                                options={{
                                    exportButton: true,
                                    
                                }}

                                actions={[
                                    {
                                        icon: AddBox,
                                        tooltip: 'Add Event',
                                        isFreeAction: true,
                                        onClick: (event) => handleAddCourse()
                                    },
                                    {
                                        icon: Edit,
                                        tooltip: 'Edit Course',
                                        onClick: (event, rowData) =>  handleEditEvent(rowData)
                                    },
                                    rowData => ({
                                        icon: DeleteOutline,
                                        tooltip: 'Delete User', 
                                        onClick: (event, rowData) =>  handleDeleteEvent(rowData)
                                    })
                                    
                                ]}
                            
                                
                                />
                            </CCard>
                        </CCol>
                    </CRow>
    
                )
            }
        </div>
        
    )
}

export default EventDashBoard
