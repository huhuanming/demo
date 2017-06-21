import { Dispatch } from 'redux'
import { createAction } from 'redux-actions'
import { IStartImage, IStoreState } from '../declarations'

export const fetchStartImage = () => async (dispatch: Dispatch<IStoreState>) => {
    const response = await fetch('http://localhost:8111/start-image')
    const json: IStartImage = await response.json()
    dispatch(recieveStatImage(json))
}

export const recieveStatImage = createAction(
    'recieveStatImage',
    (startImage: IStartImage) => startImage,
)
