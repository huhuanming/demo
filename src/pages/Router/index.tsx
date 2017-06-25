import React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { NavigationState } from 'react-navigation'
import { connect, DispatchProp } from 'react-redux'
import { IStoreState } from '../../declarations'
import Article from '../Article/index'
import Home from '../Home/index'

export const Nagvigator = StackNavigator({
    Home: {
        screen: Home,
    },
    Article: {
        screen: Article,
    },
}, {
    initialRouteName: 'Home',
})

const mapStateToProps = (state: IStoreState) => ({
    router: state.router,
})

interface IStateProps {
    router: NavigationState
}

interface IOwnProps {
}

interface IDispatchProps {
}

type IProps = IStateProps & IDispatchProps & IOwnProps & DispatchProp<any>

class Router extends React.Component<IProps, {}> {
    render() {
        return (
            <Nagvigator
                navigation={
                    addNavigationHelpers({
                        state: this.props.router,
                        dispatch: this.props.dispatch,
                    })
                }
            />
        )
    }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps)(Router)
