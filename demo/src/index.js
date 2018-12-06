import App from './App'
import FirebaseProvider from 'firekit-provider/lib/components/FirebaseProvider'
import React, { Component } from 'react'
import firebase from 'firebase/app'
import store from './store'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

//Get the configs of your firebase project
const firebaseConf = {
  apiKey: 'AIzaSyBQAmNJ2DbRyw8PqdmNWlePYtMP0hUcjpY',
  authDomain: 'react-most-wanted-3b1b2.firebaseapp.com',
  databaseURL: 'https://react-most-wanted-3b1b2.firebaseio.com',
  projectId: 'react-most-wanted-3b1b2',
  storageBucket: 'react-most-wanted-3b1b2.appspot.com',
  messagingSenderId: '258373383650'
}

//Initialise your firebase app
const firebaseApp = firebase.initializeApp(firebaseConf)

class Demo extends Component {
  render() {
    return (
      <Provider store={store}>
        <FirebaseProvider firebaseApp={firebaseApp}>
          <App />
        </FirebaseProvider>
      </Provider>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
