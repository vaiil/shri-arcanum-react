import { GET_REPOS_REQUEST, GET_REPOS_FAILURE, GET_REPOS_SUCCESS, SELECT_REPO, RepoActions } from '../actionTypes/repo'
import { RepoState } from '../@types/repo'

const initialState: RepoState = {
  repos: [],
  current: null
}

export default (state = initialState, action: RepoActions): RepoState => {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return { repos: [], current: null }
    case GET_REPOS_FAILURE:
      return { repos: [], current: null, error: action.reason }
    case GET_REPOS_SUCCESS:
      return { repos: action.repos, current: null }
    case SELECT_REPO:
      return { ...state, current: action.repo }
    default:
      return state
  }
}
