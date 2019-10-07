import { Layout } from 'components/Common/Layout'
import { withRedux } from 'app/redux/withRedux'
import { fetchRepos, selectRepo } from 'app/redux/actions/repo'
import { fetchTree } from 'app/redux/actions/tree'

import Breadcrumbs from 'components/Common/Breadcrumbs/Breadcrumbs'
import Tree from 'components/Content/Tree/Tree'
import { withRouter } from 'next/router'

const BranchTree = ({ repoName }) => {
  return (
    <Layout title={repoName}>
      <Breadcrumbs/>
      <Tree/>
    </Layout>
  )
}

BranchTree.getInitialProps = async ({ reduxStore, query: { repoName, branch } }) => {
  const { dispatch } = reduxStore
  await dispatch(fetchRepos())
  await dispatch(selectRepo(repoName))
  await dispatch(fetchTree({ repoName, branch }))

  return { repoName }
}

export default withRouter(withRedux(BranchTree))