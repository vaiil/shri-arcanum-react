import Head from 'next/head'
import Header from 'components/Layout/Header/Header'
import Footer from 'components/Layout/Footer/Footer'
import LayoutContent from './-Content/Layout-Content.jsx'
import { cn } from '@bem-react/classname'

export default ({ children, title = 'Arcanum', header, footer }) => (
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
