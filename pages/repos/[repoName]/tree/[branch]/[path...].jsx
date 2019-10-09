import { Layout } from 'components/Common/Layout'
import { withRedux } from 'app/redux/withRedux'
import { fetchRepos, selectRepo } from 'app/redux/actions/repo'
import { selectBranch } from 'app/redux/actions/branch'
import { fetchTree } from 'app/redux/actions/tree'

import Breadcrumbs from 'components/Common/Breadcrumbs/Breadcrumbs'
import { Tree } from 'components/Content/Tree'
import { withRouter } from 'next/router'

const TreePage = ({ repoName }) => {
  return (
    <Layout title={repoName}>
      <Breadcrumbs/>
      <Tree/>
    </Layout>
  )
}

TreePage.getInitialProps = async ({ reduxStore, query: { repoName, branch, path }, req }) => {
  const { dispatch } = reduxStore
  if (req) {
    await dispatch(fetchRepos())
    await dispatch(selectRepo(repoName))
    await dispatch(selectBranch(branch))
  }
  await dispatch(fetchTree({ repoName, branch, path }))

  return { repoName }
}

export default withRouter(withRedux(TreePage))
