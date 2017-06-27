import React from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import {returntypeof} from 'react-redux-typescript'
import { IStoreState } from '../../../declarations'

const mapStateToProps = (state: IStoreState) => ({
    image: state.article.image,
})
const mapStateToPropsType = returntypeof(mapStateToProps)
type IStateProps = typeof mapStateToPropsType

interface IDispatchProps {
}

interface IOwnProps {
}

type IProps = IStateProps & IDispatchProps & IOwnProps

class Splash extends React.Component<IProps, {}> {
    render() {
        return this.props.image.length === 0 ? (
            <View
                style={{ height: 250, backgroundColor: 'white' }}
            />
        ) : (
            <Image
                source={{uri: this.props.image}}
                style={{ height: 250 }}
            />
        )
    }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(
    mapStateToProps,
    {},
)(Splash)
