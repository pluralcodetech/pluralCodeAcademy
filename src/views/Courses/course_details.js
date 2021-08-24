import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import courseDetailsAction from 'src/Redux Statement/actions/courseDetailsAction';
import CourseDetailsCard from './CourseDetailsCard'
import { CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react'
import UserCard from '../userCard/userCard';
import { Loading } from 'src/routes';
import {ErrorBoundary} from 'react-error-boundary'
import Page404 from '../pages/page404/Page404';



const CourseDetails = () => {
    let listDataId  = useParams(); 
    const {id} = listDataId

    // Appending  ListDataId Id Values before Sending to API
    var courseDetailsFormData = new FormData();
    courseDetailsFormData.append('courseid', id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(courseDetailsAction(courseDetailsFormData))
    }, [dispatch]);

    const courseDetailsContent = useSelector(state => state.courseDetailsData.courseDetails)

    const courseDetails = useSelector(state => state.courseDetailsData)
    console.log(courseDetails);

    const {loading} = courseDetails;

    const {course, student} = courseDetailsContent;

    const myErrorHandler = (error, errorInfo) => {
        console.log('Logging', error, errorInfo);
      }

   
    return (
        <CRow>
            <CCol lg={8}>
                {loading ? (<Loading/>
                    ) : (
                        course?.map(({image, name, description, price, start_date, end_date, discountprice, discountstartdate, discountenddate, community, curriculum, courselink}) => (
                            <ErrorBoundary FallbackComponent={Page404} onError={myErrorHandler}>
                                <CourseDetailsCard 
                                    image={image} 
                                    name={name}
                                    description = {description} 
                                    price={price} 
                                    start_date={start_date} 
                                    end_date={end_date} 
                                    discountprice={discountprice} 
                                    discountstartdate = {discountstartdate}
                                    discountenddate={discountenddate}
                                    community = {community}
                                    curriculum = {curriculum}
                                    courselink = {courselink}
                                />
                            </ErrorBoundary>
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

export default CourseDetails
