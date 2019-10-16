import { SELECT_BRANCH, SelectBranchAction } from '../actionTypes/branch'

export function selectBranch(branch: string): SelectBranchAction {
  return {
    type: SELECT_BRANCH,
    branch
  }
}
