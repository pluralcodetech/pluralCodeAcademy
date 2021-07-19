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
import { CButton, CCard, CCol, CRow, CSpinner } from '@coreui/react';

import moment from 'moment';
import { useHistory } from 'react-router-dom';
import addEventAction from 'src/Redux Statement/actions/addEventAction';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { Loading } from 'src/routes';
import webSeriesListAction from 'src/Redux Statement/actions/webSeriesListAction';

const WebSeriesList = () => {
    

    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispatch(webSeriesListAction());
    }, []);
    
    const webSeriesListContent = useSelector(state => state.webSeriesListData);
    const {webSeriesList} = webSeriesListContent;
    console.log(webSeriesList)



    const customPostMain  = useSelector(state => state.customPostData);
    const {customPost, loading} = customPostMain;

    const handleAddCourse =() => {
        history.push(`/create_webSeries`);   
    };
    const handleWebseriesEdit = (courseData) => {
        const {id} = courseData;
        history.push(`/update_webSeries/${id}`)
    };

    const handleWebseriesDelete = (webseriesData) => {
        const {id} = webseriesData;
    
        let deleteID = new FormData();
        deleteID.append('eventid', id);

        const deleteURL = 'https://pluralcode.academy/academyAPI/api/deleteseries.php'
        dispatch(customPostAction(deleteURL, deleteID));
        setTimeout (() => dispatch(webSeriesListAction()) , 300);
    };

    const handleOPenDetails =(item) => {
        history.push(`/webSeries_details/${item}`);   
    };

    

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
        {title: 'Date', field: 'date', render : item => <small>{moment(item.date).format('MMMM Do YYYY')}</small> },
        {title: 'View More', render: item => <CButton color='info' size={'sm'} className="m-2 primary" onClick={() => handleOPenDetails(item.id)}>Details</CButton>},
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
                                data = {webSeriesList}
                                localization= {{
                                    body: {
                                        emptyDataSourceMessage: <CSpinner
                                        color="primary"
                                        style={{width:'4rem', height:'4rem'}}
                                    />,
                                        
                                    }
                                }}
                            
                                title="Web Series List"
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
                                        onClick: (event, rowData) =>  handleWebseriesEdit(rowData)
                                    },
                                    rowData => ({
                                        icon: DeleteOutline,
                                        tooltip: 'Delete User', 
                                        onClick: (event, rowData) =>  handleWebseriesDelete(rowData)
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

export default WebSeriesList
