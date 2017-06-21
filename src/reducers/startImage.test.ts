import { recieveStatImage } from '../actions/startImage'
import startImage from './startImage'

const defaultValue = {
    img: '',
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
