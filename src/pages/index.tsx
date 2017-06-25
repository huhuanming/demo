import React from 'react'
import { connect } from 'react-redux'
import { SCENE_TYPE } from '../actions/sence'
import { IStoreState } from '../declarations'
import Router from './Router/index'
import StartImage from './StartImage/index'

const mapStateToProps = (state: IStoreState) => ({
  senceType: state.scene.sceneType,
})

interface IStateProps {
  senceType: SCENE_TYPE
}

interface IDispatchProps {}

interface IOwnProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps

class App extends React.Component<IProps, {}> {
  render() {
    return this.props.senceType === SCENE_TYPE.START_IMAGE ?
      <StartImage /> : <Router />

  }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, {})(App)
