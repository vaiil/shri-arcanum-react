import fetch from 'isomorphic-unfetch'
import {
  GET_REPOS_REQUEST,
  GET_REPOS_FAILURE,
  GET_REPOS_SUCCESS,
  SELECT_REPO,
  GetReposFailureAction,
  GetReposRequestAction,
  GetReposSuccessAction,
  SelectRepoAction
} from '../actionTypes/repo'
import { baseApiUrl } from '../../api/urls'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Repo, Repos } from '../@types/repo'

function requestRepos(): GetReposRequestAction {
  return {
    type: GET_REPOS_REQUEST
  }
}

function receiveRepos(json: Repos): GetReposSuccessAction {
  return {
    type: GET_REPOS_SUCCESS,
    repos: json
  }
}

function rejectRepos(reason: string): GetReposFailureAction {
  return {
    type: GET_REPOS_FAILURE,
    reason
  }
}

export function selectRepo(repo: Repo): SelectRepoAction {
  return {
    type: SELECT_REPO,
    repo
  }
}

export function fetchRepos() {
  return function(dispatch: ThunkDispatch<{}, {}, AnyAction>) {

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
