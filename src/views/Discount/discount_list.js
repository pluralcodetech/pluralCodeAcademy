import { CButton, CCard, CCol, CRow, CSpinner } from '@coreui/react';
import MaterialTable from 'material-table';
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

import { useDispatch, useSelector } from 'react-redux';
import discountListAction from 'src/Redux Statement/actions/discountListAction';
import { useHistory} from "react-router-dom";
import moment from 'moment';

const DiscountList = () => {
    const discountListContent = useSelector(state => state.discountListData.discountList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(discountListAction());
    }, [dispatch]);

    let history = useHistory();

    const handleOPenDetails =(item) => {
        history.push(`/course_details/${item}`);   
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

    // Columns
    const columns = [
        {title: 'Image', field: 'image', render: item => <img src={item.image} alt="" border="3" height="100" width="100" />},
        {title: 'Name', field: 'name', render : item => <small>{item.name}</small>},
        {title: 'Price', field: 'price', render: item => <small>{item.price}</small>},
        {title: 'Start Date', field: 'start_date', render : item => <small>{moment(item.start_date).format('MMMM Do YYYY, h:mm:ss a')}</small> },
        {title: 'End Date', field: 'end_date', render : item => <small>{moment(item.end_date).format('MMMM Do YYYY, h:mm:ss a')}</small>},
        {title: 'View More', render: item => <CButton color='info' size={'sm'} className="m-2 primary" onClick={() => handleOPenDetails(item.id)}>Details</CButton>},
    ]
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <MaterialTable
                    icons={tableIcons}
                    columns={columns}
                    data = {discountListContent}
                    title="Course List"
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

export default DiscountList
