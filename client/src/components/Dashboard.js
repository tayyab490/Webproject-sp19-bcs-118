import React from 'react'
import {Helmet} from 'react-helmet'


const Dashboard = () => {
  return (
        
        <div style={{marginTop:"2rem"}}>
            <Helmet>
              <title>User Dashboard</title>
              <meta name='description' content='User Dashboard' />
            </Helmet>
            <h1>User Dashboard</h1>
        </div>
  )
}

export default Dashboard