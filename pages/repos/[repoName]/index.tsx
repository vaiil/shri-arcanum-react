import { Layout } from 'components/Common/Layout'
import { NextPageReduxContext, withRedux } from 'app/redux/withRedux'
import { fetchRepos, selectRepo } from 'app/redux/actions/repo'
import { fetchTree } from 'app/redux/actions/tree'

import Breadcrumbs from '../../../components/Common/Breadcrumbs/Breadcrumbs'
import Tree from '../../../components/Content/Tree/Tree'
import { selectBranch } from '../../../app/redux/actions/branch'
import { ParsedUrlQuery } from 'querystring'
import { NextComponentType } from 'next'


interface QueryProps extends ParsedUrlQuery{
  repoName: string
}

interface PageContext extends NextPageReduxContext {
  query: QueryProps
}

interface PageProps {
  repoName: string
}

const Repo : NextComponentType<PageContext, {}, PageProps> = ({ repoName }) => {
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
  await dispatch(selectBranch('master'))
  await dispatch(fetchTree({ repoName }))

  return { repoName }
}

export default withRedux(Repo)
