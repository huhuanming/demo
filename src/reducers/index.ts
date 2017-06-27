import { combineReducers } from 'redux'
import article from './article'
import router from './router'
import scene from './scene'
import startImage from './startImage'

export default combineReducers({
    startImage,
    scene,
    router,
    article,
})
