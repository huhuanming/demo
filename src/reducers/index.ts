import { combineReducers } from 'redux'
import router from './router'
import scene from './scene'
import startImage from './startImage'

export default combineReducers({
    startImage,
    scene,
    router,
})
