import fetch from 'isomorphic-unfetch'
import { GET_BRANCHES_FAILURE, GET_BRANCHES_REQUEST, GET_BRANCHES_SUCCESS, SELECT_BRANCH } from '../actionTypes/branch'

function requestBranches () {
  return {
    type: GET_BRANCHES_REQUEST
  }
}

function receiveBranches (json) {
  return {
    type: GET_BRANCHES_SUCCESS,
    repos: json
  }
}

function rejectBranches (reason) {
  return {
    type: GET_BRANCHES_FAILURE,
    reason
  }
}

export function selectBranch (repo) {
  return {
    type: SELECT_BRANCH,
    repo
  }
}

export function fetchBranches () {
  return function (dispatch) {

    dispatch(requestBranches())

    return fetch(`http://localhost:3003/api/repos`)
      .then(response => response.json())
      .then(repos => {
          dispatch(receiveBranches(repos))
        },
        reason => {
          dispatch(rejectBranches(reason))
        }
      )

  }
}
