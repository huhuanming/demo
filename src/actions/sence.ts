export enum SCENE_TYPE {
    START_IMAGE,
    HOME_PAGE,
}

export const changeScene = createxAction(
    'changeSence',
    (sceneType: SCENE_TYPE) => sceneType,
)
