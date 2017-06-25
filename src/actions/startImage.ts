import { Dispatch } from 'redux'
import { createAction } from 'redux-actions'
import { IStartImage, IStoreState } from '../declarations'
import { changeScene, SCENE_TYPE } from './sence'

export const fetchStartImage = () => async (dispatch: Dispatch<IStoreState>) => {
    const response = await fetch('http://10.0.0.10:8111/start-image')
    const json: IStartImage = await response.json()
    await dispatch(recieveStatImage(json))
    setTimeout(() => {
        dispatch(changeScene(SCENE_TYPE.HOME_PAGE))
    }, 1500)
}

export const recieveStatImage = createAction(
    'recieveStatImage',
    (startImage: IStartImage) => startImage,
)
