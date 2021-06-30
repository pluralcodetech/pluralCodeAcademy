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
import MaterialTable from 'material-table';
import { Input } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import courseListAction from 'src/Redux Statement/actions/courseListAction';
import { CButton, CCard, CCol, CRow } from '@coreui/react';
import AddEventModal from './AddEventModal';
import eventListAction from 'src/Redux Statement/actions/eventListAction';
import moment from 'moment';
import deleteEventAction from 'src/Redux Statement/actions/deleteEventAction';

const EventDashBoard = () => {
    const eventListContent = useSelector(state => state.eventListData.eventList);

    const [modal, setModal] = useState(false);
    
    const toggle = () =>{
        setModal(!modal);
        console.log(modal);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventListAction());
     
    }, [])

    const tableIcons = {
        // Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
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

      
    // Columns
    const columns = [
        {title: 'Image', field: 'image', render: item => <img src={item.image} alt="" border="3" height="100" width="100" />},
        {title: 'Name', field: 'name'},
        {title: 'Description', field: 'description'},
        {title: 'Venue', field: 'venue'},
        {title: 'Start Date', field: 'start_date', render : item => <h5>{moment(item.start_date).format('MMMM Do YYYY, h:mm:ss a')}</h5> },
        {title: 'End Date', field: 'end_date', render : item => <h6>{moment(item.end_date).format('MMMM Do YYYY, h:mm:ss a')}</h6>,
        
            editComponent: editProps => (
                <Input
                    autoFocus={true}
                    onChange={e => editProps.onChange(e.target.value)}
                />
            )
        },
    ]
    return (
        <CRow>
            <CCol xl={12}>

                <CCard>
                    <CButton color='primary' size={'lg'} className="m-2 primary" onClick={() => toggle()}>Add Event</CButton>
                    <MaterialTable
                    icons={tableIcons}
                    columns={columns}
                    data = {eventListContent}
                    title="Event List"
                    options={{
                        exportButton: true,
                        
                    }}
                    
                    editable={{
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
                              const index = oldData.id;
                              let deleteID = new FormData();
                              deleteID.append('eventid', index);
                              dispatch(deleteEventAction(deleteID))
                            resolve();
                            }, 1000);
                        })
                    }}
                    
                    />
                </CCard>
                <AddEventModal modal={modal} 
                    toggle={toggle}
                />
            </CCol>
        </CRow>
    
    )
}

export default EventDashBoard
