import { Layout } from 'components/Common/Layout'
import { withRedux } from 'app/redux/withRedux'
import { fetchRepos, selectRepo } from 'app/redux/actions/repo'
import { fetchTree } from 'app/redux/actions/tree'

import { Breadcrumbs } from 'components/Common/Breadcrumbs'
import { Blob } from 'components/Content/Blob'
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { baseApiUrl } from '../../../../../app/api/urls'

const BlobPage = ({ path, blob }) => {
  return (
    <Layout title={path}>
      <Breadcrumbs/>
      <Blob blob={blob}/>
    </Layout>
  )
}

BlobPage.getInitialProps = async ({ reduxStore, query: { repoName, branch, path } }) => {
  const { dispatch } = reduxStore
  await dispatch(fetchRepos())
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
