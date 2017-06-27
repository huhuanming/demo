import React from 'react'
import { SectionList, SectionListData, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { returntypeof } from 'react-redux-typescript'
import { IStoreState } from '../../../declarations'

const testSectionData = [
  [
    {
      title: 'sed-ex-quam',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'mollitia-nemo-quibusdam',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'iusto-dolores-et',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'nihil-ipsa-expedita',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'amet-ducimus-maxime',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'quasi-excepturi-illum',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'quis-molestias-ut',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'tempora-veritatis-necessitatibus',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'eaque-aut-incidunt',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
    {
      title: 'quae-voluptates-sequi',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-26T16:17:20.974Z',
    },
  ],
  [
    {
      title: 'suscipit-id-quaerat',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'modi-nam-molestiae',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'quasi-aut-fugiat',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'et-delectus-facilis',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'sed-facere-qui',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'impedit-tempore-asperiores',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'voluptas-rerum-sint',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'molestiae-mollitia-quibusdam',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'quibusdam-quis-debitis',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'consectetur-quis-unde',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'aliquid-voluptatibus-dolorem',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'nisi-architecto-architecto',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'quos-ipsum-est',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
    {
      title: 'laboriosam-quo-est',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-25T16:17:20.974Z',
    },
  ],
  [
    {
      title: 'in-eligendi-cupiditate',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'commodi-ea-quia',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'adipisci-sed-aliquam',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'consequatur-qui-impedit',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'ut-qui-ea',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'deserunt-et-nobis',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'illum-quidem-animi',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'ab-aliquam-qui',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'debitis-incidunt-aut',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'harum-recusandae-qui',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
    {
      title: 'in-voluptatum-voluptatem',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-24T16:17:20.974Z',
    },
  ],
  [
    {
      title: 'ad-nihil-et',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'et-necessitatibus-ipsa',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'ipsa-aut-in',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'sed-consequatur-et',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'harum-ullam-quia',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'id-tempore-non',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'corporis-optio-est',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'totam-et-deleniti',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'tenetur-est-voluptate',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'aut-est-veritatis',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'placeat-ut-qui',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
    {
      title: 'aut-voluptatem-perferendis',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-23T16:17:20.974Z',
    },
  ],
  [
    {
      title: 'aut-eum-tempore',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'iusto-consequuntur-aut',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'quia-cum-autem',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'rerum-voluptatem-non',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'est-iure-temporibus',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'enim-maiores-et',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'tenetur-dolorum-neque',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'officia-aut-illo',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'quis-odit-non',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'nihil-modi-voluptas',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'ratione-non-similique',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
    {
      title: 'quam-dolorem-molestias',
      img: 'http://lorempixel.com/640/480/nature',
      date: '2017-06-22T16:17:20.974Z',
    },
  ],
]

interface ISectionData {
    title: string
    img: string
    date: string
}

const mapStateToProps = (_: IStoreState) => ({})

const mapStateToPropsType = returntypeof(mapStateToProps)
type IStateProps = typeof mapStateToPropsType

const mapDispatchToProps = {
  navigate: NavigationActions.navigate,
}

type IDispatchProps = typeof mapDispatchToProps

interface IOwnProps {
}

type IProps = IStateProps & IDispatchProps & IOwnProps

class List extends React.Component<IProps, {}> {
    render() {
        const sections = testSectionData.map((data) => ({
            data,
            key: data[0].date,
        }))
        return (
            <SectionList
                sections={sections}
                renderSectionHeader={this.renderSectionHeader}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
        )
    }

    private keyExtractor = (item: ISectionData) => item.title

    private renderSectionHeader = (info: {section: SectionListData<ISectionData>}) => (
        <Text>
            {info.section.key}
        </Text>
    )

    private renderItem = (info: {item: ISectionData, index: number}) => (
        <TouchableOpacity onPress={this.handlePressItem(info.item)}>
          <View style={{ height: 88 }}>
            <Text>{info.item.title}</Text>
          </View>
        </TouchableOpacity>
    )

    private handlePressItem = (item: ISectionData) => () => {
      this.props.navigate({
        routeName: 'Article',
        params: {
          item,
        },
      })
    }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(List)
