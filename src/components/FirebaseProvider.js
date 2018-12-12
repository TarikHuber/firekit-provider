import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FirekitContext } from './Context'

class Provider extends Component {
  render() {
    const { firebaseApp, context } = this.props

    return <FirekitContext.Provider value={{ firebaseApp, context }}>{this.props.children}</FirekitContext.Provider>
  }
}

Provider.propTypes = {
  children: PropTypes.any,
  firebaseApp: PropTypes.object.isRequired
}

export default Provider
