import { Layout } from 'components/Common/Layout'
import { withRedux } from 'app/redux/withRedux'
import { fetchRepos, selectRepo } from 'app/redux/actions/repo'
import { fetchTree } from 'app/redux/actions/tree'

import Breadcrumbs from '../../../components/Common/Breadcrumbs/Breadcrumbs'
import Tree from '../../../components/Content/Tree/Tree'
import { withRouter } from 'next/router'

const Repo = ({ repoName }) => {
  return (
    <Layout title={repoName}>
      <Breadcrumbs/>
      <Tree/>
    </Layout>
  )
}

Repo.getInitialProps = async ({ reduxStore, query: { repoName }, req }) => {
  const { dispatch } = reduxStore
  if (req) {
    await dispatch(fetchRepos())
  }
  await dispatch(selectRepo(repoName))
  await dispatch(fetchTree({ repoName: repoName }))

  return { repoName }
}

export default withRouter(withRedux(Repo))
