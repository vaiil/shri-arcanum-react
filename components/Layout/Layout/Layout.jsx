import Head from 'next/head'
import Header from 'components/Layout/Header/Header'
import Footer from 'components/Layout/Footer/Footer'
import LayoutContent from './-Content/Layout-Content.jsx'

export default ({ children, title = 'Arcanum' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header/>
    <LayoutContent>
      {children}
    </LayoutContent>
    <Footer/>
  </div>
)
