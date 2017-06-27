import { shallow } from 'enzyme'
import React from 'react'
import { SectionList } from 'react-native'
import mockStore from '../../../store/index.mock'
import List from './List'

describe('test List component', () => {
    it('test List', () => {
        const ReduxList: any = List
        const wrapper = shallow(<ReduxList store={mockStore()} />)
        expect(wrapper.dive().type()).toBe(SectionList)
    })
})
