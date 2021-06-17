import React, { useState } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId, INITIAL_EVENTS } from './event-utills'

const Calender = () => {
    const [state, setState] = useState({
        weekendsVisible: true,
        currentEvents: []
    });

    // const handleWeekendsToggle = () => {
    //     setState({
    //       weekendsVisible: !state.weekendsVisible
    //     })
    // }
    
    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
    }
    
    const handleEventClick = (clickInfo) => {
        if (prompt(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove()
        }
    }
    
    const handleEvents = (events) => {
        setState({
          currentEvents: events
        })
    }
    

    return (
        <div className='demo-app'>
        
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:*/
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            
          />
        </div>
      </div>
    )
}

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
}
  
// function renderSidebarEvent(event) {
//     return (
//       <li key={event.id}>
//         <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//         <i>{event.title}</i>
//       </li>
//     )
// }

export default Calender
