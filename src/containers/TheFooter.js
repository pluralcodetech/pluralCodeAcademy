import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={true}>
      <div className="m-auto">
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a> */}
        <span className="ml-1">&copy; 2020 Pluralcode.</span>
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
