import { createStore, applyMiddleware, combineReducers, Store, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import repoReducer from './reducers/repoReducer'
import treeReducer from './reducers/treeReducer'
import branchReducer from './reducers/branchReducer'
import thunk, {ThunkDispatch} from 'redux-thunk'
import { BaseState, State } from './@types/state'

export const initializeStore = (preloadedState: State) => {
  return createStore(
    combineReducers({ repo: repoReducer, tree: treeReducer, branch: branchReducer }),
    preloadedState,
    composeWithDevTools(applyMiddleware<ThunkDispatch<BaseState, null, Action>>(thunk))
  )
}
