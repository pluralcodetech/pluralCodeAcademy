import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react';

import courseListAction from 'src/Redux Statement/actions/courseListAction';

import { useDispatch, useSelector } from 'react-redux'
import usersData from '../users/UsersData';

const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
}



const CourseLists = () => {
    const courseListContent = useSelector(state => state.courseListData.courseList);
    // console.log();
    const history = useHistory()
    const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
    const [page, setPage] = useState(currentPage)
  
    const pageChange = newPage => {
      currentPage !== newPage && history.push(`/course_list?page=${newPage}`)
    }
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(courseListAction());
      currentPage !== page && setPage(currentPage)
    }, [currentPage, page])

    const columns = [
        {datafield: 'image', text: 'Image'},
        {datafield: 'name', text: 'Title'},
        {datafield: 'description', text: 'Description'},
        {datafield: 'price', text: 'Price'},
        {datafield: 'start_date', text: 'State Date'},
        {datafield: 'end_date', text: 'End Date'},
    ]


    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                <CCardHeader>
                    Course Lists
                </CCardHeader>
                <CCardBody>
                <CDataTable
                    items={courseListContent}
                    fields={[
                    { key: 'image', _classes: 'font-weight-bold' },
                    'name', 'description', 'price', 'start_date', 'end_date'
                    ]}
                    columnFilter
                    tableFilter
                    itemsPerpageSelect
                    hover
                    striped
                    sorter
                    itemsPerPage={5}
                    activePage={page}
                    clickableRows
                    onRowClick={(item) => history.push(`/course_list/${item.id}`)}
                    scopedSlots = {{
                    'status':
                        (item)=>(
                        <td>
                            <CBadge color={getBadge(item.status)}>
                            {item.status}
                            </CBadge>
                        </td>
                        )
                    }}
                />
                <CPagination
                    activePage={page}
                    onActivePageChange={pageChange}
                    pages={5}
                    doubleArrows={true} 
                    align="center"
                />
                </CCardBody>
                </CCard>
            </CCol>
            </CRow>

    
    )
}

export default CourseLists


// import React, { useEffect } from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';
// import { useDispatch, useSelector } from 'react-redux';
// import courseListAction from 'src/Redux Statement/actions/courseListAction';

// const CourseLists = () => {
//     const courseListContent = useSelector(state => state.courseListData.courseList);
//     // const {image} = courseListContent
//     console.log(JSON.parse(courseListContent.image));

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(courseListAction());
//     }, []);

    // const columns = [
    //     {datafield: 'image', text: 'Image'},
    //     {datafield: 'name', text: 'Title'},
    //     {datafield: 'description', text: 'Description'},
    //     {datafield: 'price', text: 'Price'},
    //     {datafield: 'start_date', text: 'State Date'},
    //     {datafield: 'end_date', text: 'End Date'},
    // ]

    // const data = [
    //     {
    //         "id": 1,
    //         "image": "WEB Development",
    //         "name": "WEB Development",
    //         "description": "you get to learn to use react native, Laravel , Node js",
    //         "price": "2500",
    //         "start_date": "2021-06-09",
    //         "end_date": "2021-06-16"
    //     },
    //     {
    //         "id": 2,
    //         "image": "IOT",
    //         "name": "IOT",
    //         "description": "Use themes to build beautiful websites",
    //         "price": "45000",
    //         "start_date": "2021-06-17",
    //         "end_date": "2021-06-23"
    //     },
    //     {   
    //         "id": 3,
    //         "image": "blockchain",
    //         "name": "blockchain",
    //         "description": "learn crypto trading ",
    //         "price": "45000",
    //         "start_date": "2021-06-23",
    //         "end_date": "2021-06-25"
    //     },
    //     {
    //         "id": 3,
    //         "image": "Degital marketing",
    //         "name": "Degital marketing",
    //         "description": "learn degital marketing ",
    //         "price": "60000",
    //         "start_date": "2021-06-27",
    //         "end_date": "2021-06-29"
    //     },
    //     {
    //         "id": 4,
    //         "image": "WEB DEV starter class",
    //         "name": "WEB DEV starter class",
    //         "description": "learn dev",
    //         "price": "2300",
    //         "start_date": "0000-00-00",
    //         "end_date": "0000-00-00"
    //     },
    //     {
    //         "id": 5,
    //         "image": "WEB DEV starter class",
    //         "name": "WEB DEV starter class",
    //         "description": "learn dev",
    //         "price": "2300",
    //         "start_date": "0000-00-00",
    //         "end_date": "0000-00-00"
    //     },
    //     {
    //         "id": 6,
    //         "image": "WEB DEV class",
    //         "name": "WEB DEV class",
    //         "description": "learn dev",
    //         "price": "2300",
    //         "start_date": "0000-00-00",
    //         "end_date": "0000-00-00"
    //     },
    //     {
    //         "id": 6,
    //         "image": "IOT sandbox",
    //         "name": "IOT sandbox",
    //         "description": "learcn codding with your felllow team members",
    //         "price": "2500",
    //         "start_date": "2021-06-23",
    //         "end_date": "2021-06-23"
    //     },
    //     {
    //         "id": 7,
    //         "image": "IOT sandbox",
    //         "name": "IOT sandbox",
    //         "description": "learcn codding with your felllow team members",
    //         "price": "2500",
    //         "start_date": "2021-06-23",
    //         "end_date": "2021-06-23"
    //     },
    //     {
    //         "id": 8,
    //         "image": "ui/ux",
    //         "name": "ui/ux",
    //         "description": "fine course",
    //         "price": "2300",
    //         "start_date": "2021-04-23",
    //         "end_date": "2021-04-23"
    //     },
    //     {
    //         "id": 9,
    //         "image": "ui/ux",
    //         "name": "ui/ux",
    //         "description": "fine course",
    //         "price": "2300",
    //         "start_date": "2021-04-23",
    //         "end_date": "2021-04-23"
    //     }
    // ]

//     return (
//         // <div className='overflow-scroll'>
//         //     <BootstrapTable  keyField= 'id' columns={columns} sort={true} data={data} />
//         // </div>

        
            
//     )
// }

// export default CourseLists
