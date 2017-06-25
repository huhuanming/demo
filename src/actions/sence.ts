import { createAction } from 'redux-actions'

export enum SCENE_TYPE {
    START_IMAGE,
    HOME_PAGE,
}

export const changeScene = createAction(
    'changeScene',
    (sceneType: SCENE_TYPE) => sceneType,
)
