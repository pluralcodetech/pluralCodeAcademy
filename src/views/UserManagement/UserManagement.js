import React, { forwardRef, useEffect, useState } from 'react';
import { ArrowDownward } from "@material-ui/icons";
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
import { CButton, CCard, CCol, CRow, CSpinner } from '@coreui/react';
import userManagementAction from 'src/Redux Statement/actions/UserManagementAction';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { Loading } from 'src/routes';
import Select from 'react-select';
import courseNameAction from '../../Redux Statement/actions/courseNameAction'

const UserManagement = () => {
    const tableRef = React.createRef();

    const dispatch = useDispatch();

    const userManagementcontent = useSelector(state => state.userManagementData);
    const {userManagement} = userManagementcontent;

    const customPostMain  = useSelector(state => state.customPostData);
    const {loading} = customPostMain;

    function refreshPage() {
        window.location.reload(false);
    }

    // userManagement
    useEffect(() => {
        dispatch(userManagementAction());
        dispatch(courseNameAction());
    }, [dispatch]);

     // Handle active State to Active
     const handleActive = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/activateuser.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id);
        dispatch(customPostAction(url, setIdFormDate));
        setTimeout (() => dispatch(userManagementAction()) , 300);

    }

     // Handle suspend State to Active
     const handleSuspend = (id) => {
        const url = 'https://pluralcode.academy/academyAPI/api/suspend.php'
        let setIdFormDate = new FormData()
        setIdFormDate.append('id', id);
        dispatch(customPostAction(url, setIdFormDate));
        setTimeout (() => dispatch(userManagementAction()) , 300);
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

    const courseNameContent = useSelector(state => state.courseNameData);
    const {courseName} = courseNameContent;

    // Getting Course Name Values
    let options = [];

    courseName?.map(({id, name}) => {
        options = [
            {
                value: id,
                label: name
            },
            ...options
        ]
    });

    const [selectState, setSelectState] = useState({
        selectedOption: null,
    })

    const { selectedOption } = selectState;

    const handleSelectChange = selectedOption => {
        setSelectState({ selectedOption });
    };


    // Handle Payment Update
    const handlePaymentUpdate = (item) => {
        if (selectedOption === null) {
            alert('Please, select a course');

        } else {
            const {value} = selectedOption
            console.log(value, item.id);
            const url = 'https://pluralcode.academy/academyAPI/api/backdoor.php'
            
            let paymentUpdate = new FormData();
            paymentUpdate.append('studentid', item.id);
            paymentUpdate.append('courseid', value);

            const submitData = prompt(`Are you sure you want to enroll ${item.name} ${item.lastname}`);
            if (submitData === 'yes') {
                dispatch(customPostAction(url, paymentUpdate));
                setTimeout (() => dispatch(userManagementAction()) , 300);
            }
        };

    }

      
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
                {
                    item.active === 'YES' ?
                    <CButton color='danger' size={'sm'} className="m-2" onClick={() => handleSuspend(item.id)}>{item.suspend}</CButton>
                    :  
                    <CButton color='primary' size={'sm'} className="m-2" onClick={() => handleActive(item.id)}>{item.activate}</CButton> 
                }
            </>
        )},
        {title: 'Payment Update', field: 'activate', render : item => (
            <div className="text-center text-xs">
                <Select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    required
                />

                <CButton color='primary' size={'sm'} className="m-2" onClick={() => handlePaymentUpdate(item)}>Enroll</CButton>
            </div>
        )}
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
                                    data = {userManagement}
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
        </div>
        
    )
}

export default UserManagement
