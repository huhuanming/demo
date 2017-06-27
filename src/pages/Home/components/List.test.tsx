import { shallow } from 'enzyme'
import React from 'react'
import { View } from 'react-native'
import List from './List'

describe('test Swiper component', () => {
    it('test Swiper', () => {
        const wrapper = shallow(<List />)
        expect(wrapper.type()).toBe(View)
    })
})
