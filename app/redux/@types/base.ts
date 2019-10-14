import { RepoState } from './repo'
import { TreeState } from './tree'
import { BranchState } from './branch'
import { Action, AnyAction, Store } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export interface BaseState {
  repo: RepoState,
  tree: TreeState,
  branch: BranchState
}

export type BaseThunkDispatch = ThunkDispatch<BaseState, null, Action>

export type BaseStore = Store<BaseState, AnyAction> & Store<BaseState & {}, AnyAction> & { dispatch: BaseThunkDispatch }
