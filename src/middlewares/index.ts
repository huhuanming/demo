
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const HOST = 'http://10.0.0.6:8111'

const extraArgument = {
    ajax: (uri: string) => fetch(`${HOST}${uri}`),
}

export type IExtraArgument = typeof extraArgument

export default applyMiddleware(thunk.withExtraArgument(extraArgument))
