import React from 'react'
import { StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import List from './components/List'
import Swiper from './components/Swiper'

class Home extends React.Component<{}, {}> {

    static navigationOptions = {
        title: '今日要闻',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#0F88EB',
        },
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" />
                <Swiper />
                <List />
            </View>
        )
    }
}

export default Home
