import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { Loading } from 'src/routes';
import UserCard from '../userCard/userCard';
import EventDetailsCard from './EventDetailsCard';

const EventDetail = () => {
    let listDataId  = useParams(); 
    const {id} = listDataId

    // Appending  ListDataId Id Values before Sending to API
    var listID = new FormData();
    listID.append('eventid', id);

    const dispatch = useDispatch();

    useEffect(() => {
        const eventDetailsURL = 'https://pluralcode.academy/academyAPI/api/admineventsdetails.php'
        dispatch(customPostAction(eventDetailsURL, listID));
    }, []);

    const customPostMain  = useSelector(state => state.customPostData);
    const {customPost, loading} = customPostMain;

    const {student} = customPost ;

    console.log(customPost.Events, student)

    
    return (
        <CRow>
        <CCol lg={8}>
            {loading ? (<Loading/>
                ) : (
                    customPost.Events?.map(({image, name, category, description, venue, start_date, end_date, eventlink}) => (
                        <EventDetailsCard 
                            image={image} 
                            name={name} 
                            description = {description} 
                            category={category} 
                            start_date={start_date} 
                            end_date={end_date} 
                            venue={venue} 
                            eventlink = {eventlink}
                        />
                    ))
                )
            }
            
        </CCol>
        <CCol lg={4}>
                <CCard>
                    <CCardHeader class="text-primary text-center mt-2 mb-2">Registered Students</CCardHeader>
                    <CCardBody>
                        {
                            student?.map(({name, lastname, email, phone_number}) => (
                                <UserCard name={name} lastname={lastname} email={email} phone_number={phone_number}/>
                            ))
                        }
                    </CCardBody>
                </CCard>
            </CCol>
    </CRow>

    )
}

export default EventDetail
