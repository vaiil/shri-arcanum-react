import {
  BranchActions,
  SELECT_BRANCH
} from '../actionTypes/branch'
import { BranchState } from '../@types/branch'

const initialState: BranchState = {
  current: null
}

export default (state = initialState, action: BranchActions): BranchState => {
  switch (action.type) {
    case SELECT_BRANCH:
      return { ...state, current: action.branch }
    default:
      return state
  }
}
