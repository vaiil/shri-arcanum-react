import { Layout } from 'components/Common/Layout'
import { NextPageReduxContext, withRedux } from 'app/redux/withRedux'
import { fetchRepos, selectRepo } from 'app/redux/actions/repo'
import { selectBranch } from 'app/redux/actions/branch'
import { fetchTree } from 'app/redux/actions/tree'

import Breadcrumbs from 'components/Common/Breadcrumbs/Breadcrumbs'
import Tree from 'components/Content/Tree/Tree'
import { withRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'


interface QueryProps extends ParsedUrlQuery {
  repoName: string,
  branch: string
}

interface PageContext extends NextPageReduxContext {
  query: QueryProps
}

const BranchTree = ({ repoName }: QueryProps) => {
  return (
    <Layout title={repoName}>
      <Breadcrumbs/>
      <Tree/>
    </Layout>
  )
}

BranchTree.getInitialProps = async ({ reduxStore, query: { repoName, branch }, req }: PageContext) => {
  const { dispatch } = reduxStore
  if (req) {
    await dispatch(fetchRepos())
    await dispatch(selectRepo(repoName))
    await dispatch(selectBranch(branch))
  }
  await dispatch(fetchTree({ repoName, branch }))

  return { repoName }
}

export default withRedux(BranchTree)
