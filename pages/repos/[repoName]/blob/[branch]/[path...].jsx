import { Layout } from 'components/Common/Layout'
import { withRedux } from 'app/redux/withRedux'
import { fetchRepos, selectRepo } from 'app/redux/actions/repo'
import { fetchTree } from 'app/redux/actions/tree'

import { Breadcrumbs } from 'components/Common/Breadcrumbs'
import {FileViewer} from 'components/Content/FileViewer'
import {HighlightedCode} from 'components/Content/HighlightedCode'


import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { baseApiUrl } from 'app/api/urls'

const BlobPage = ({ path, blob }) => {
  return (
    <Layout title={path}>
      <Breadcrumbs/>
      <FileViewer name={path} size={blob.length}>
        <HighlightedCode code={blob} />
      </FileViewer>
    </Layout>
  )
}

BlobPage.getInitialProps = async ({ reduxStore, query: { repoName, branch, path }, req }) => {
  const { dispatch } = reduxStore
  if (req) {
    await dispatch(fetchRepos())
  }
  await dispatch(selectRepo(repoName))
  await dispatch(fetchTree({ repoName, branch, path }))

  const blob = await fetch(`${baseApiUrl}/api/repos/${repoName}/blob/${branch}/${path}`)
    .then(response => {
      if (response.status === 200) {
        return response.text()
      }
      throw response.json()
    })

  return { path, blob }
}

export default withRouter(withRedux(BlobPage))
