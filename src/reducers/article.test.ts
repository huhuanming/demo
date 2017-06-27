import { recieveArticle } from '../actions/article'
import article from './article'

describe('test article reducer', () => {
    it('test article default value', () => {
        expect(article(undefined, {type: ''})).toMatchObject({
            image: '',
            content: '',
        })
    })

    it('test recieve article', () => {
        const newArticleData = {
            image: 'image',
            content: 'content',
        }
        expect(article(undefined, recieveArticle(newArticleData))).toMatchObject(newArticleData)
    })
})
