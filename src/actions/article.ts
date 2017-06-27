import { Dispatch } from 'redux'
import { createAction } from 'redux-actions'
import { IArticle, IStoreState } from '../declarations'
import { IExtraArgument } from '../middlewares/index'

export const recieveArticle = createAction('recieveArticle', (article: IArticle) => article)

export const fetchArticle = () => async (
    dispatch: Dispatch<IStoreState>,
    _: () => IStoreState,
    extraArgument: IExtraArgument,
) => {
    const response = await extraArgument.ajax('/article')
    const article: IArticle = await response.json()
    dispatch(recieveArticle(article))
}
