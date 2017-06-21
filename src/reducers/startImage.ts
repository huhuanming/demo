import { handleActions, Action } from 'redux-actions'
import { IStartImage } from '../declarations'

const defaultValue = {
  text: '',
  img: '',
}

export default handleActions({
  recieveStatImage: (_: IStartImage, action: Action<IStartImage> ) => action.payload,
}, defaultValue)
