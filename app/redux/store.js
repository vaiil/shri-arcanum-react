import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import repoReducer from './reducers/repoReducer'
import treeReducer from './reducers/treeReducer'
import thunk from 'redux-thunk'

export const initializeStore = (preloadedState) => {
  return createStore(
    combineReducers({ repo: repoReducer, tree: treeReducer }),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
