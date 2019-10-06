import fetch from 'isomorphic-unfetch'
import { GET_REPOS_REQUEST, GET_REPOS_FAILURE, GET_REPOS_SUCCESS, SELECT_REPO } from '../actionTypes/repo'
import {baseApiUrl} from '../../api/urls'

function requestRepos () {
  return {
    type: GET_REPOS_REQUEST
  }
}

function receiveRepos (json) {
  return {
    type: GET_REPOS_SUCCESS,
    repos: json
  }
}

function rejectRepos (reason) {
  return {
    type: GET_REPOS_FAILURE,
    reason
  }
}

export function selectRepo (repo) {
  return {
    type: SELECT_REPO,
    repo
  }
}

export function fetchRepos () {
  return function (dispatch) {

    dispatch(requestRepos())

    return fetch(`${baseApiUrl}/api/repos`)
      .then(response => response.json())
      .then(repos => {
          dispatch(receiveRepos(repos))
        },
        reason => {
          dispatch(rejectRepos(reason))
        }
      )

  }
}
