import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { fetchArticle } from '../../actions/article'
import Content from './components/Content'
import Splash from './components/Splash'
import Toolbar from './components/Toolbar'

const mapStateToProps = () => ({})
interface IStateProps {
}

const mapDispatchToProps = {
    fetchArticle,
}
type IDispatchProps = typeof mapDispatchToProps

interface IOwnProps {
}

type IProps = IStateProps & IDispatchProps & IOwnProps

class Article extends React.Component<IProps, {}> {

    static navigationOptions = {
        title: '正文',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#0F88EB',
        },
    }

    componentDidMount() {
        this.props.fetchArticle()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Splash />
                <Content />
                <Toolbar />
            </View>
        )
    }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(Article)
