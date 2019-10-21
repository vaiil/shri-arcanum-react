import { Layout } from 'components/Common/Layout'
import { withRedux, NextPageReduxContext } from '../app/redux/withRedux'
import { fetchRepos, selectRepo } from '../app/redux/actions/repo'
import { NextComponentType } from 'next'
import dynamic from 'next/dynamic';
dynamic(() => import('../components/Content/Tree/Tree'));

const Home: NextComponentType<NextPageReduxContext, {}, {}> = () => (
  <Layout title='Index page'/>
)

Home.getInitialProps = async ({ reduxStore, req }) => {
  const { dispatch } = reduxStore
  if (req) {
    await dispatch(fetchRepos())
  }
  await dispatch(selectRepo(null))
}

export default withRedux(Home)
