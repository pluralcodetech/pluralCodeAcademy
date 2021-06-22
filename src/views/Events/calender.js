// import React, { useState } from 'react'
// import FullCalendar, { formatDate } from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { createEventId, INITIAL_EVENTS } from './event-utills'

// const Calender = () => {
//     const [state, setState] = useState({
//         weekendsVisible: true,
//         currentEvents: []
//     });

//     // const handleWeekendsToggle = () => {
//     //     setState({
//     //       weekendsVisible: !state.weekendsVisible
//     //     })
//     // }
    
//     const handleDateSelect = (selectInfo) => {
//         console.log(selectInfo)
//         let title = prompt('Please enter a new title for your event')
//         // console.log(title.value)
//         let calendarApi = selectInfo.view.calendar
//         // console.log(calendarApi)
    
//         // calendarApi.unselect() // clear date selection
    
//         if (title) {
//           calendarApi.addEvent({
//             id: createEventId(),
//             title,
//             start: selectInfo.startStr,
//             end: selectInfo.endStr,
//             allDay: selectInfo.allDay
//           })
//         }
//     }
    
//     const handleEventClick = (clickInfo) => {
//         if (prompt(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//           clickInfo.event.remove()
//         }
//     }
    
//     const handleEvents = (events) => {
//         setState({
//           currentEvents: events
//         })
//     }

//     const handleEventAdd = (data) => {
//         console.log(data)
//     }

//     return (
//         <div className='demo-app'>
        
//         <div className='demo-app-main'>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             }}
//             initialView='dayGridMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={true}
//             initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             select={handleDateSelect}
//             eventContent={renderEventContent} // custom render function
//             eventClick={handleEventClick}
//             eventsSet={handleEvents} // called after events are initialized/added/changed/removed
//             /* you can update a remote database when these fire:*/
//             // eventAdd={function(){}}
//             // eventChange={function(){}}
//             // eventRemove={function(){}}

//             eventAdd={(event) => handleEventAdd(event)}
//             // eventChange={function(){}}
//             // eventRemove={function(){}}
            
//           />
//         </div>
//       </div>
//     )
// }

// function renderEventContent(eventInfo) {
//     return (
//       <>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </>
//     )
// }
  
// // function renderSidebarEvent(event) {
// //     return (
// //       <li key={event.id}>
// //         <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
// //         <i>{event.title}</i>
// //       </li>
// //     )
// // }

// export default Calender

// 


// import React, { useState, useRef }from 'react'
// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import AddEventModal from './AddEventModal';
// import { CButton } from '@coreui/react';

// const Calender = () => {

    // const [modal, setModal] = useState(false);
    // const toggle = () =>{
    //     setModal(!modal);
    //     console.log(modal);
    // }

    
//     const calendarRef = useRef(null);

    // const onEventAdded = (e) => {
    //   let calendarApi = calendarRef.current.getApi()
    //   calendarApi.addEvent(e);
    // }
//   return (
//     <>
//     <CButton onClick={() => toggle()}>Add Event</CButton>
//     <FullCalendar
//       ref={calendarRef}
//       plugins={[ dayGridPlugin ]}
//       initialView="dayGridMonth"
//       weekends={true}
//       editable={true}
//       selectable={true}
//       selectMirror={true}
//       dayMaxEvents={true}
//     />
//     <AddEventModal modal={modal} 
//       toggle={toggle}
//       onEventAdded={(e) => onEventAdded(e)}
//     />
//     </>
//   )
// }

// export default Calender


// 


// import React, { useRef, useState } from 'react'
// import FullCalendar, { formatDate } from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { createEventId, INITIAL_EVENTS } from './event-utills'
// import AddEventModal from './AddEventModal'
// import { useSelector } from 'react-redux'

// const Calender = () => {
//     const [state, setState] = useState({
//         weekendsVisible: true,
//         currentEvents: []
//     });

//     const [modal, setModal] = useState(false);
//     const toggle = () =>{
//         setModal(!modal);
//         console.log(modal);

//     }

//     const calendarRef = useRef(null);

//     // const onEventAdded = (e) => {
//     //   let calendarApi = calendarRef.current.getApi()
//     //   calendarApi.addEvent(e);
//     // }
    

    
//     const handleEventClick = (clickInfo) => {
//         if (prompt(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//           clickInfo.event.remove()
//         }
//     }
    
//     const handleEvents = (events) => {
//         setState({
//           currentEvents: events
//         })
//     }

//     const handleEventAdd = (data) => {
//         console.log(data)
//     }

//     const calendarDataContent = useSelector(state => state.calendarData.data)

//     return (
//         <div className='demo-app'>
        
//         <div className='demo-app-main'>
//           <FullCalendar
//             ref={calendarRef}
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             }}
//             initialView='dayGridMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={true}
//             initialEvents={calendarDataContent, (data) => console.log(data)} // alternatively, use the `events` setting to fetch from a feed
//             select={toggle}
//             eventContent={renderEventContent} // custom render function
//             eventClick={handleEventClick}
//             eventsSet={handleEvents} // called after events are initialized/added/changed/removed
//             /* you can update a remote database when these fire:*/
//             // eventAdd={function(){}}
//             // eventChange={function(){}}
//             // eventRemove={function(){}}

//             // eventAdd={(event) => handleEventAdd(event)}
//             // eventChange={function(){}}
//             // eventRemove={function(){}}
            
//           />

//           <AddEventModal modal={modal} 
//               toggle={toggle}
//               // onEventAdded=''
//             />

// {/* {(e) => onEventAdded(e)} */}
//         </div>
        
//       </div>
//     )
// }
// {/* <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>  */}

// function renderEventContent(eventInfo) {
//   console.log(eventInfo)
//     return (
//       <>
//         {/* <b>{eventInfo.}</b>
//         <i>{eventInfo.event.title}</i>  */}
//       </>
//     )
// }
  
// // function renderSidebarEvent(event) {
// //     return (
// //       <li key={event.id}>
// //         <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
// //         <i>{event.title}</i>
// //       </li>
// //     )
// // }

// export default Calender


// import React, { useState, useRef }from 'react'
// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import AddEventModal from './AddEventModal';
import { CButton } from '@coreui/react';
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
import { CCard, CCol, CRow } from '@coreui/react';

const Calender = () => {

    const [modal, setModal] = useState(false);
    
    const toggle = () =>{
        setModal(!modal);
        console.log(modal);
    }

    // const calendarRef = useRef(null);

    // const onEventAdded = (event) => {
    //   let calendarApi = calendarRef.current.getApi();
    //   calendarApi.addEvent(event);
    // }

    const courseListContent = useSelector(state => state.courseListData.courseList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(courseListAction());
    }, [])

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
    {title: 'Name', field: 'name'},
    {title: 'Description', field: 'description'},
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
  ]
  return (
    <>
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <CButton onClick={() => toggle()}>Add Event</CButton>

            <CRow>
              <CCol xl={12}>
                  <CCard>
                      <MaterialTable
                      icons={tableIcons}
                      columns={columns}
                      data = {courseListContent}
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


            <AddEventModal modal={modal} 
              toggle={toggle}
              // onEventAdded={(e) => onEventAdded(e)}
            />
          </div>
        </div>
      </div>
    </div>
            
                
                    
    
    {/* <FullCalendar
      ref={calendarRef}
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      weekends={true}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
    /> */}
    
    </>
  )
}

export default Calender