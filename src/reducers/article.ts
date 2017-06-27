import { handleActions, Action } from 'redux-actions'
import { IArticle } from '../declarations'

export const articleDefauleValue = {
            image: '',
            content: '',
        }

export default handleActions({
    recieveArticle: (_: IArticle, action: Action<IArticle>) => action.payload,
}, articleDefauleValue)
