import { Layout } from 'components/Common/Layout'
import { withRedux } from 'app/redux/withRedux'
import { fetchRepos, selectRepo } from 'app/redux/actions/repo'
import { fetchTree } from 'app/redux/actions/tree'

import { Breadcrumbs } from 'components/Common/Breadcrumbs'
import { Blob } from 'components/Content/Blob'
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

const BlobPage = ({ repoName, blob }) => {
  return (
    <Layout title='Files'>
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

  const blob = await fetch(`http://localhost:3003/api/repos/${repoName}/blob/${branch}/${path}`)
    .then(response => {
      if (response.status === 200) {
        return response.text()
      }
      throw response.json()
    })

  return { repoName, blob }
}

export default withRouter(withRedux(BlobPage))
