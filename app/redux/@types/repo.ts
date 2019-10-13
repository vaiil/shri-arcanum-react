export type Repo = string

export type Repos = Array<Repo>


export interface RepoState {
  current: Repo | null,
  repos: Repos,
  error?: string
}
