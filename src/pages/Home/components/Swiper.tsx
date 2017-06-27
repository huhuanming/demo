import React from 'react'
import { Image, Text } from 'react-native'
import ReactNativeSwiper from 'react-native-swiper'

const fakeData = [
  {
    comment: '',
    title: '北弗里斯兰 · 不如去旅行',
    url: 'https://ooo.0o0.ooo/2017/06/26/59512bbddc037.jpg',
  },
  {
    comment: '',
    title: '也许只是承让了',
    url: 'https://ooo.0o0.ooo/2017/06/26/59512bbddc299.jpg',
  },
  {
    comment: '',
    title: '人类学研究笔记',
    url: 'https://ooo.0o0.ooo/2017/06/26/59512bbddcccc.jpg',
  },
]

class Swiper extends React.Component<{}, {}> {
    render() {
        return (
            <ReactNativeSwiper
                loop
                pagingEnabled
                height={200}
            >
                {fakeData.map((data) => (
                    <Image
                        key={data.url}
                        style={{ flex: 1 }}
                        source={{ uri: data.url}}
                    >
                        <Text>{data.title}</Text>
                    </Image>
                ))}
            </ReactNativeSwiper>
        )
    }
}

export default Swiper
