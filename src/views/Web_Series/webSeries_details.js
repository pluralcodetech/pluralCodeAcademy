import { CCol, CRow } from '@coreui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import customPostAction from 'src/Redux Statement/actions/CRUD/customPostAction';
import { Loading } from 'src/routes';
import WebseriesDetailsCard from './WebseriesDetailsCard';

const WebSeriesDetails = () => {
    let listDataId  = useParams(); 
    const dispatch = useDispatch();

    const {id} = listDataId;

    // Appending  ListDataId Id Values before Sending to API
    var listID = new FormData();
    listID.append('id', id);

    useEffect(() => {
        const webSeriesDetailsURL = 'https://pluralcode.academy/academyAPI/api/webseriesdetails.php'
        dispatch(customPostAction(webSeriesDetailsURL, listID));
    }, []);

    const customPostMain  = useSelector(state => state.customPostData);
    const {customPost, loading} = customPostMain;

    const {image, name, description, date, link} = customPost;

    console.log(image, name, description, date, link)

    console.log(customPost)

    return (
        <CRow>
        <CCol lg={8}>
            {
                loading ? (<Loading/>)
                :
                (<WebseriesDetailsCard
                    image={image} 
                    name={name} 
                    description = {description} 
                    link={link} 
                    date={date} 
                />)

            }
            {/* {loading ? (<Loading/>
                ) : (
                    customPost?.map(({image, name, description, date, link}) => (
                        <WebseriesDetailsCard
                            image={image} 
                            name={name} 
                            description = {description} 
                            link={link} 
                            date={date} 
                        />
                    ))
                )
            }
             */}
        </CCol>
        
    </CRow>

    )
}

export default WebSeriesDetails
