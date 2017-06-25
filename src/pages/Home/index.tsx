import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { NavigationActions, NavigationNavigateActionCreator } from 'react-navigation'
import { connect } from 'react-redux'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
    navigate: NavigationActions.navigate,
}

interface IStateProps {
}

interface IDispatchProps {
    navigate: NavigationNavigateActionCreator
}

interface IOwnProps {
}

type IProps = IStateProps & IDispatchProps & IOwnProps

class Home extends React.Component<IProps, {}> {

    handlePress = () => {
        this.props.navigate({
            routeName: 'Article',
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ width: 50, height: 50, backgroundColor: 'red' }}
                    onPress={this.handlePress}
                />
            </View>
        )
    }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
