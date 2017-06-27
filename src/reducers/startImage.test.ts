import { recieveStatImage } from '../actions/startImage'
import startImage from './startImage'

const defaultValue = {
    img: 'https://ooo.0o0.ooo/2017/06/16/5942e6866f7ef.jpg',
    text: '',
}

const emptyAction = ({
    type: '',
})

const startImageTestData = {
    img: 'img',
    text: 'text',
}

describe('test startImage Reducer', () => {
    it('test other Action', () => {
        expect(startImage(undefined, emptyAction)).toMatchObject(defaultValue)
    })

    it('test recieve startImage Action', () => {
        expect(startImage(undefined, recieveStatImage(startImageTestData))).toMatchObject(startImageTestData)
    })
})
