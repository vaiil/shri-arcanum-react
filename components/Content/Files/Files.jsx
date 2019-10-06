import { useSelector } from 'react-redux'
import { useState, useCallback } from 'react'
import Link from 'next/link'

export default function Files () {
  const treeState = useSelector(state => state.tree)
  const repoName = useSelector(state => state.repo.current)
  const branch = 'master'
  const dirs = treeState.dirs
  const files = treeState.files

  return (
    <div>
      <div>
        {
          dirs.map(dir => (
            <div key={dir.path}>
              <Link
                href="/repos/[repoName]/tree/[branch]/[path*]"
                as={`/repos/${repoName}/tree/${branch}/${dir.path}`}>
                <a>{dir.name}</a>
              </Link>
            </div>
          ))
        }
      </div>
      <div>
        {
          files.map(file => (
            <div key={file.path}>
              <Link
                href="/repos/[repoName]/blob/[branch]/[path*]"
                as={`/repos/${repoName}/blob/${branch}/${file.path}`}>
                <a>{file.name}</a>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
