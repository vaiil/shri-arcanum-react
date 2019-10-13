import { Repo, Repos } from '../@types/repo'

export const GET_REPOS_REQUEST = 'GET_REPOS_REQUEST'

export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS'

export const GET_REPOS_FAILURE = 'GET_REPOS_FAILURE'

export const SELECT_REPO = 'SELECT_REPO'


export interface SelectRepoAction {
  type: typeof SELECT_REPO,
  repo: Repo
}

export interface GetReposRequestAction {
  type: typeof GET_REPOS_REQUEST
}

export interface GetReposSuccessAction {
  type: typeof GET_REPOS_SUCCESS,
  repos: Repos
}

export interface GetReposFailureAction {
  type: typeof GET_REPOS_FAILURE,
  reason: string
}

export type RepoActions = SelectRepoAction | GetReposRequestAction | GetReposSuccessAction | GetReposFailureAction
