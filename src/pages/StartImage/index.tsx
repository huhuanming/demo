import React from 'react'
import { Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { returntypeof } from 'react-redux-typescript'
import { fetchStartImage } from '../../actions/startImage'
import { IStoreState } from '../../declarations'

const mapStateToProps = (state: IStoreState) => ({
    startImage: state.startImage,
})

const mapStateToPropsType = returntypeof(mapStateToProps)
type IStateProps = typeof mapStateToPropsType

const mapDispatchToProps = {
    fetchStartImage,
}

type IDispatchProps = typeof mapDispatchToProps

interface IOwnProps {
}

type IProps = IStateProps & IDispatchProps & IOwnProps

export class StartImage extends React.Component<IProps, {}> {

    componentDidMount() {
        this.props.fetchStartImage()
    }

    render() {
        return (
            <Image
                source={{ uri: this.props.startImage.img  }}
                style={{ flex: 1 }}
            >
                <Text
                    style={
                        {
                            position: 'absolute',
                            bottom: 20,
                            color: 'white',
                            fontSize: 16,
                            alignSelf: 'center',
                            backgroundColor: 'transparent',
                        }
                    }
                >
                    {this.props.startImage.text}
                </Text>
            </Image>
        )
    }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(StartImage)
