import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import courseDetailsAction from 'src/Redux Statement/actions/courseDetailsAction';
import CourseDetailsCard from './CourseDetailsCard'
import CourseList from './course_list'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import UserCard from '../userCard/userCard';

const CourseDetails = () => {
    let listDataId  = useParams(); 
    const {id} = listDataId


    // Appending  ListDataId Id Values before Sending to API
    var courseDetailsFormData = new FormData();
    courseDetailsFormData.append('courseid', id);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(courseDetailsAction(courseDetailsFormData))
    }, []);

    const courseDetailsContent = useSelector(state => state.courseDetailsData.courseDetails)
    console.log(courseDetailsContent)
    return (
        <CRow>
            <CCol lg={8}>
            {
                courseDetailsContent?.map((item) => item.course?.map(({image, name, description, price, start_date, end_date, discountprice, discountstartdate, discountenddate}) => (
                    <CourseDetailsCard 
                        image={image} name={name} 
                        description = {description} 
                        price={price} start_date={start_date} 
                        end_date={end_date} discountprice={discountprice} 
                        discountstartdate = {discountstartdate}
                        discountenddate={discountenddate}
                    />
                )))
            }
            </CCol>
            <CCol lg={4}>
                    <CCard>
                        <CCardHeader>Registered Students</CCardHeader>
                        <CCardBody>
                            {
                                courseDetailsContent?.map((items) => items.student?.map(({name, lastname, email, phone_number}) => (
                                    <UserCard name={name} lastname={lastname} email={email} phone_number={phone_number}/>
                                )))
                            }
                        </CCardBody>
                    </CCard>
                </CCol>
        </CRow>
        
        // <div>
        //     {/* console.log(item.image) */}
        //     {
        //         courseDetailsContent?.map((item) => item.course?.map(({image, name, description, price, start_date, end_date, discountprice, discountstartdate, discountenddate}) => (
        //             <CourseDetailsCard 
        //                 image={image} name={name} 
        //                 description = {description} 
        //                 price={price} start_date={start_date} 
        //                 end_date={end_date} discountprice={discountprice} 
        //                 discountstartdate = {discountstartdate}
        //                 discountenddate={discountenddate}
        //             />
        //         )))
        //     }

            

            
        // </div>
    )
}

export default CourseDetails
