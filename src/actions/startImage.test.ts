
import mockStore from '../store/index.mock'
import { fetchStartImage, recieveStatImage } from './startImage'

const mockFetch: any = fetch
const response = {
    img: 'img',
    text: 'text',
}

describe('test async action', () => {
    it('test fetchstartimage action', async () => {
        const store = mockStore()
        mockFetch.mockResponse(JSON.stringify(response))
        await store.dispatch(fetchStartImage())
        expect(store.getActions()).toMatchObject([
            recieveStatImage(response),
        ])
    })
})
