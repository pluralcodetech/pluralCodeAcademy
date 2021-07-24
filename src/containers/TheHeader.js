import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import logo from '../assets/logo/pluralCode_logo.jfif'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'
import sidebarShowAction from 'src/Redux Statement/actions/sidebarShowAction'
import loginStatusAction from 'src/Redux Statement/actions/loginStatusAction'
import { Redirect, useHistory } from 'react-router-dom'

const TheHeader = () => {
  let history = useHistory();
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.nav.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch(sidebarShowAction(val));

  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch(sidebarShowAction(val));
    
    
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(loginStatusAction(""));
    // history.push('/dashboard');
    setTimeout(() => refreshPage(), 300)
    
    
  };



  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon src={logo} name="logo" scr height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/course_list">Course</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/discount_list/:id">Discount</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to='/event_dashBoard'>Event</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to='/user_management'>User</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      {/* <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/>
        <TheHeaderDropdown/>
      </CHeaderNav> */}

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              // to="/"
              onClick={logout}
            >
              <CIcon name="cil-user" alt="log out" />&nbsp;Log out
            </CLink>
            
          </div>
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
