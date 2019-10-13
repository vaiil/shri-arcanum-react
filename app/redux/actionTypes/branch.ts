import { Branch } from '../@types/branch'

export const GET_BRANCHES_REQUEST = 'GET_BRANCHES_REQUEST'

export const GET_BRANCHES_SUCCESS = 'GET_BRANCHES_SUCCESS'

export const GET_BRANCHES_FAILURE = 'GET_BRANCHES_FAILURE'

export const SELECT_BRANCH = 'SELECT_BRANCH'


export interface SelectBranchAction {
  type: typeof SELECT_BRANCH,
  branch: Branch
}

export type BranchActions = SelectBranchAction
