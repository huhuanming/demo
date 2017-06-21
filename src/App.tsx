import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Page from './pages'
import store from './store/index'

export default class App extends Component<{}, {}> {
  render() {
    return (
     <Provider store={store}>
       <Page />
     </Provider>
    )
  }
}
