import { shallow } from 'enzyme'
import React from 'react'
import { View } from 'react-native'
import List from './components/List'
import Swiper from './components/Swiper'
import Home from './index'

describe('test home container component', () => {
    it('test home containner', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.type()).toBe(View)
        expect(wrapper.find(Swiper).length).toBe(1)
        expect(wrapper.find(List).length).toBe(1)
    })
})
