import { CButton, CCard, CCol, CRow, CSpinner } from '@coreui/react';
import MaterialTable from 'material-table';
import React, { forwardRef, useEffect, useMemo } from 'react';
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

import { useDispatch, useSelector } from 'react-redux';

import {
    Link, useHistory
} from "react-router-dom";
import moment from 'moment';
import customReadAction from 'src/Redux Statement/actions/CRUD/customReadAction';

const  AdminList = () => {
    const adminListContent = useSelector(state => state.customReadData.customRead);
    console.log(adminListContent);

    const adminData = useMemo(() => adminListContent, [adminListContent]);

    const dispatch = useDispatch();

    useEffect(() => {
        const url = 'https://pluralcode.academy/academyAPI/api/adminprofile.php'
        dispatch(customReadAction(url));
    }, []);

    let history = useHistory();

    // const handleOPenDetails =(item) => {
    //     history.push(`/course_details/${item}`);   
    // }

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

    // Columns
    const columns = [
        {title: 'Image', field: 'image', render: item => console.log(item)},
        {title: 'Author Image', field: 'authorimage', render: item => <img src={item.authorimage} alt="" border="3" height="100" width="100" />},
        {title: 'Name', field: 'name', render : item => <small>{item.name}</small>}
    ]
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <MaterialTable
                    icons={tableIcons}
                    columns={columns}
                    data = {adminData}
                    title="Admin List"
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
                    
                    />
                </CCard>
            </CCol>
        </CRow>
    
    )
}

export default  AdminList