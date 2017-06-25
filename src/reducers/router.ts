import { NavigationNavigateAction, NavigationState } from 'react-navigation'
import { Nagvigator } from '../pages/Router/index'

export default (state: NavigationState, action: NavigationNavigateAction) => {
  const newState = Nagvigator.router.getStateForAction(action, state)
  return newState || state
}
