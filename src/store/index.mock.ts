import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { IStoreState } from '../declarations'
import { articleDefauleValue } from '../reducers/article'
import { routerDefaultValue } from '../reducers/router'
import { sceneDefaultValue } from '../reducers/scene'
import { startImageDefaultValue } from '../reducers/startImage'

const HOST = 'https://example.com'
const mockCreateStore = configureMockStore<IStoreState>([thunk.withExtraArgument({
    ajax: (uri: string) => fetch(`${HOST}${uri}`),
})])

const mockStore = (newObject: any = {}) => mockCreateStore({
            startImage: startImageDefaultValue,
            scene: sceneDefaultValue,
            router: routerDefaultValue,
            article: articleDefauleValue,
            ...newObject,
        })
export default mockStore
