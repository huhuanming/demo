import React from 'react'
import { Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchStartImage } from '../../actions/startImage'
import { IStartImage, IStoreState } from '../../declarations'

interface IStateProps {
    startImage: IStartImage
}

interface IDispatchProps {
    fetchStartImage: () => void
}

interface IOwnProps {
}

type IProps = IStateProps & IDispatchProps & IOwnProps

const mapStateToProps = (state: IStoreState) => ({
    startImage: state.startImage,
})

const mapDispatchToProps = {
    fetchStartImage,
}

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
