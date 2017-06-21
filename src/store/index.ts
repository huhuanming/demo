import { compose, createStore } from 'redux'
import middlewares from '../middlewares'
import reducers from '../reducers'

const g: any = global
const composeAction = g.reduxNativeDevToolsCompose ? g.reduxNativeDevToolsCompose : compose
const enhancer = composeAction(middlewares)

const store = createStore(reducers, enhancer)

export default store
