import { shallow } from 'enzyme'
import React from 'react'
import { Image, Text } from 'react-native'
import configureMockStore from 'redux-mock-store'
import { SCENE_TYPE } from '../../actions/sence'
import { IStoreState } from '../../declarations'
import ReduxStartImage, { StartImage } from './index'

const noop = () => undefined
describe('Test StartImage Index', () => {
    it('Test Raw Index', () => {
        const wrapper = shallow(
            <StartImage
                startImage={{ img: '', text: '' }}
                fetchStartImage={noop}
            />,
        )
        expect(wrapper.type()).toBe(Image)
        expect(wrapper.find(Image).length).toBe(1)
        expect(wrapper.find(Text).length).toBe(1)
    })

    it('Test Redux Index', () => {
        const mockCreateStore = configureMockStore<IStoreState>()
        const mockStore = mockCreateStore({
            startImage: { img: '', text: '' },
            scene: { sceneType: SCENE_TYPE.START_IMAGE },
        })

        const ReduxStoreStartImage: any = ReduxStartImage
        const wrapper = shallow(
            <ReduxStoreStartImage store={mockStore} />,
        )
        expect(wrapper.dive().type()).toBe(Image)
        expect(wrapper.dive().find(Image).length).toBe(1)
        expect(wrapper.dive().find(Text).length).toBe(1)
    })
})
