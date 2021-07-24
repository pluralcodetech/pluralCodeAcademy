import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const LoginComponent = ({render, path, exact, name}) => {
    const userMail = useSelector(state => state.loginStatusData.loginStatus);
    const {status} = userMail
    // console.log()
    return status === "success" ? (<Route  path={path} name={name} exact={exact} render={render} />) : (<Redirect  to="/"  />);
}

export default LoginComponent;