import fetch from 'isomorphic-unfetch'
import {
  GET_TREE_FAILURE,
  GET_TREE_REQUEST,
  GET_TREE_SUCCESS, GetTreeFailureAction,
  GetTreeRequestAction,
  GetTreeSuccessAction
} from '../actionTypes/tree'
import { baseApiUrl } from '../../api/urls'
import { Tree, TreeObjectRequest } from '../@types/tree'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

function requestTree(path: string): GetTreeRequestAction {
  return {
    type: GET_TREE_REQUEST,
    path
  }
}

function receiveTree(path: string, json: Tree): GetTreeSuccessAction {
  return {
    type: GET_TREE_SUCCESS,
    tree: json,
    path
  }
}

function rejectTree(path: string, reason: string): GetTreeFailureAction {
  return {
    type: GET_TREE_FAILURE,
    reason,
    path
  }
}

export function fetchTree({ repoName, path = '', branch = 'master' }: TreeObjectRequest) {
  return function(dispatch: ThunkDispatch<{}, {}, AnyAction>) {

    dispatch(requestTree(path))

    return fetch(`${baseApiUrl}/api/repos/${repoName}/tree/${branch}/${path}`)
      .then(response => {
        const data = response.json()
        return data.then(data => {
          if (response.status !== 200) {
            return Promise.reject(data.message || 'Error')
          }
          return data
        })
      })
      .then(tree => {
        dispatch(receiveTree(path, tree))
      })
      .catch(reason => {
        dispatch(rejectTree(path, reason))
      })
  }
}
