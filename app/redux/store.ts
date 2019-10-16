import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import repoReducer from './reducers/repoReducer'
import treeReducer from './reducers/treeReducer'
import branchReducer from './reducers/branchReducer'
import thunk from 'redux-thunk'
import { BaseState, BaseThunkDispatch } from './@types/base'

export const initializeStore = (preloadedState?: BaseState) => {
  return createStore(
    combineReducers({ repo: repoReducer, tree: treeReducer, branch: branchReducer }),
    preloadedState,
    composeWithDevTools(applyMiddleware<BaseThunkDispatch>(thunk))
  )
}
