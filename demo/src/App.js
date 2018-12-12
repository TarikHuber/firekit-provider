import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withFirebase from 'firekit-provider/lib/withFirebase'

const App = (props, context) => {
  const { firebaseApp } = props

  console.log('App props', props)

  return (
    <div>
      <h1>{firebaseApp.options.projectId}</h1>
    </div>
  )
}

export default compose(
  connect(),
  withFirebase
)(App)
