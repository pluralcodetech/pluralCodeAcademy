import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../assets/logo/pluralCode_logo.jfif'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CSidebarFooter,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import sidebarShowAction from 'src/Redux Statement/actions/sidebarShowAction'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.nav.sidebarShow);

  return (
    <CSidebar
    show={show}
    onShowChange={(val) => dispatch(sidebarShowAction(val))}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          src={logo}
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          src={logo}
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      
      <CSidebarMinimizer className="c-d-md-down-none"/>
      <CSidebarFooter className=" text-center">
          {/* <CIcon customClasses="c-sidebar-nav-icon" name={'cilSettings'} /> */}
          Log out
      </CSidebarFooter>
     
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
