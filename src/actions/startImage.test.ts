import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { IStoreState } from '../declarations'
import { SCENE_TYPE } from './sence'
import { fetchStartImage, recieveStatImage } from './startImage'

const mockFetch: any = fetch
const response = {
    img: 'img',
    text: 'text',
}

describe('test async action', () => {
    it('test fetchstartimage action', async () => {
        const mockCreateStore = configureMockStore<IStoreState>([thunk])
        const mockStore = mockCreateStore({
            startImage: { img: '', text: '' },
            scene: { sceneType: SCENE_TYPE.START_IMAGE },
        })

        mockFetch.mockResponse(JSON.stringify(response))

        await mockStore.dispatch(fetchStartImage())

        expect(mockStore.getActions()).toMatchObject([
            recieveStatImage(response),
        ])
    })
})
