import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import repoReducer from './reducers/repoReducer'
import treeReducer from './reducers/treeReducer'
import branchReducer from './reducers/branchReducer'
import thunk from 'redux-thunk'
import { State } from './@types/state'

export const initializeStore = (preloadedState: State) : Store => {
  return createStore(
    combineReducers({ repo: repoReducer, tree: treeReducer, branch: branchReducer }),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
