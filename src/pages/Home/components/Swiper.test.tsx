import { shallow } from 'enzyme'
import React from 'react'
import ReactNativeSwiper from 'react-native-swiper'
import Swiper from './Swiper'

describe('test Swiper component', () => {
    it('test Swiper', () => {
        const wrapper = shallow(<Swiper />)
        expect(wrapper.type()).toBe(ReactNativeSwiper)
    })
})
