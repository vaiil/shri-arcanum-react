import { Tree } from '../@types/tree'

export const GET_TREE_REQUEST = 'GET_TREE_REQUEST'

export const GET_TREE_SUCCESS = 'GET_TREE_SUCCESS'

export const GET_TREE_FAILURE = 'GET_TREE_FAILURE'


export interface GetTreeRequestAction {
  type: typeof GET_TREE_REQUEST,
  path: string
}

export interface GetTreeSuccessAction {
  type: typeof GET_TREE_SUCCESS,
  tree: Tree,
  path: string
}

export interface GetTreeFailureAction {
  type: typeof GET_TREE_FAILURE,
  reason: string,
  path: string
}

export type TreeActions = GetTreeRequestAction | GetTreeSuccessAction | GetTreeFailureAction
