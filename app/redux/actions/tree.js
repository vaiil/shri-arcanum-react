import fetch from 'isomorphic-unfetch'
import { GET_TREE_FAILURE, GET_TREE_REQUEST, GET_TREE_SUCCESS } from '../actionTypes/tree'

function requestTree (path) {
  return {
    type: GET_TREE_REQUEST,
    path
  }
}

function receiveTree (path, json) {
  return {
    type: GET_TREE_SUCCESS,
    tree: json,
    path
  }
}

function rejectTree (path, reason) {
  return {
    type: GET_TREE_FAILURE,
    reason,
    path
  }
}

export function fetchTree ({ repoName, path = '', branch = 'master' }) {
  return function (dispatch) {

    dispatch(requestTree())

    return fetch(`http://localhost:3003/api/repos/${repoName}/tree/${branch}/${path}`)
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
