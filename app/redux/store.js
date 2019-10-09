import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import repoReducer from './reducers/repoReducer'
import treeReducer from './reducers/treeReducer'
import branchReducer from './reducers/branchReducer'
import thunk from 'redux-thunk'

export const initializeStore = (preloadedState) => {
  return createStore(
    combineReducers({ repo: repoReducer, tree: treeReducer, branch: branchReducer }),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
