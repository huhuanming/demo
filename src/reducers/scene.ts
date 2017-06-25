import { handleActions, Action } from 'redux-actions'
import { SCENE_TYPE } from '../actions/sence'
import { ISCENE } from '../declarations'

const defaultValue: ISCENE = {
  sceneType: SCENE_TYPE.START_IMAGE,
}

export default handleActions({
  changeScene: (_, action: Action<ISCENE> ) => ({
      sceneType: action.payload,
  }),
}, defaultValue)
