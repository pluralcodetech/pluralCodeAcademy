import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const UpCompletedCourse = ({component, path, exact}) => {
    const userMail = useSelector(state => state.signinStatusData.email)
    return userMail ? (<Route  path={path}  exact={exact} component={component} />) : (<Redirect  to="/"  />);
}

export default UpCompletedCourse;