export interface TreeObject {
  path: string,
  name: string,
  type: string,
  commitHash: string,
  commitSubject: string,
  timestamp: number,
  committer: string
}

export type Tree = Array<TreeObject>

export interface TreeObjectRequest {
  repoName: string,
  path: string,
  branch: string
}

export interface TreeState {
  files: Tree,
  dirs: Tree,
  currentPath: string | null,
  loading: boolean,
  error?: string
}
