import faker from 'faker'
import mockStore from '../store/index.mock'
import { fetchArticle, recieveArticle } from './article'

const mockFetch: any = fetch
const mockResponse = {
            image: faker.name.title(),
            content: faker.lorem.word(),
        }
describe('test atrticle actions', () => {
    it('test fetch article action', async () => {
        mockFetch.mockResponse(JSON.stringify(mockResponse))
        const store = mockStore()
        await store.dispatch(fetchArticle())
        expect(store.getActions()).toMatchObject([recieveArticle(mockResponse)])
    })
})
