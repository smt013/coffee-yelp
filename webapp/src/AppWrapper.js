import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const AppWrapper = () => {
  <Router>
    <div>
      <Route path="/home" component={HomePage} />
    </div>
  </Router>
}

export default AppWrapper
