import { RepoState } from './repo'
import { TreeState } from './tree'
import { BranchState } from './branch'

export interface BaseState {
  repo: RepoState,
  tree: TreeState,
  branch: BranchState
}

export type State = BaseState | undefined
