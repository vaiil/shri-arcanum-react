import Head from 'next/head'
import 'components/Base/Theme/Theme.css'
import Header from 'components/Common/Header/Header'
import Footer from 'components/Common/Footer/Footer'
import './Layout.css'
import LayoutContent from './-Content/Layout-Content.jsx'
import { cn } from '@bem-react/classname'
import { cnLayout } from './index'

export default ({ children, title = 'Arcanum', className }) => (
  <div className={cnLayout(null, ['Theme'])}>
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

