import { SCENE_TYPE } from './actions/sence'
import { NavigationState } from 'react-navigation'

export interface IStartImage {
    img: string
    text: string
}

export interface ISCENE {
    sceneType: SCENE_TYPE
}

export interface IStoreState {
    scene: ISCENE
    startImage: IStartImage
    router: NavigationState
}