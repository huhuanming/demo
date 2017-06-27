import { shallow } from 'enzyme'
import React from 'react'
import { Image, View } from 'react-native'
import mockStore from '../../../store/index.mock'
import Splash from './Splash'

const ReduxSplash: any = Splash
const wrapper = (newObject: any = {}) => shallow(<ReduxSplash store={mockStore(newObject)} />)

describe('test splash component', () => {

    it('type is View in default', () => {
        expect(wrapper().dive().type()).toBe(View)
    })

    it('type is image When image is string', () => {
        expect(wrapper({
            article: {
                image: 'image',
                content: 'content',
            },
        }).dive().type()).toBe(Image)
    })

    it('test no children', () => {
        expect(wrapper().children().length).toBe(0)
    })
})
