import React from 'react'
import CIcon from '@coreui/icons-react'
import { MdLocalLibrary } from "react-icons/md";




const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // Naviagtion
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Navigation']
  },

  // cil-library-books
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Course',
    route: '/base',
    icon: "cil-notes",
    _children: [ 
      {
        _tag: 'CSidebarNavItem',
        name: 'List',
        to: '/course_list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Details',
        to: '/course_details',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Course',
        to: '/create_course',
      }
    ],
  },

  // 

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Discount',
    route: '/base',
    icon: <CIcon name="cil-cursor" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'List',
        to: '/discount_list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Details',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Discount',
        to: '/base/carousels',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Event',
    route: '/buttons',
    icon: <CIcon name="cil-puzzle" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Calender',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Event Dash Board',
        to: '/buttons/brand-button',
      }
    ],
  },

  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'User Management',
    to: '/dashboard',
    icon: <CIcon customClasses="c-sidebar-nav-icon" name={'cilSettings'} />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Community',
    to: '/dashboard',
    icon: <CIcon customClasses="c-sidebar-nav-icon" name={'cil-graph'} />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },


  
]

export default _nav
