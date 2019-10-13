import Head from 'next/head'
import 'components/Base/Font/Font.css'
import 'components/Base/Theme/Theme.css'
import Header from 'components/Common/Header/Header'
import Footer from 'components/Common/Footer/Footer'
import './Layout.css'
import LayoutContent from './-Content/Layout-Content'
import { cnText } from '../../Base/Text'
import { cnLayout, LayoutProps } from './index'
import { FC } from 'react'

const Layout: FC<LayoutProps> = ({ children, title = 'Arcanum', className }) => (
  <div className={cnLayout(null, ['Theme', cnText(), className])}>
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

export default Layout
