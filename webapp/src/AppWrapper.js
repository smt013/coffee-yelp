import React from 'react'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './views/HomePage'
import { useSelector } from 'react-redux'

const AppWrapper = () => {

  let authenticated = useSelector(state => state.authenticated)

  if( !authenticated ) {
    console.log("HERE")
    return <Redirect to="/login" />
  } else {
    return <Redirect to="/home" component={HomePage} />
  }

  // return (
  //   <Router>
  //     <div>
  //       <Route path="/home" component={HomePage} />
  //     </div>
  //   </Router>
  // )
}

export default AppWrapper
