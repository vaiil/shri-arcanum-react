import { GET_BRANCHES_FAILURE, GET_BRANCHES_REQUEST, GET_BRANCHES_SUCCESS, SELECT_BRANCH } from '../actionTypes/branch'

export default (state = [], action) => {
  switch (action.type) {
    case GET_BRANCHES_SUCCESS:
      return { repos: action.branches, current: null }
    case SELECT_BRANCH:
      return { ...state, current: action.branch }
    default:
      return state
  }
}
