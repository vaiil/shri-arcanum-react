import Head from 'next/head'
import 'components/Base/Theme/Theme.css'
import Header from 'components/Layout/Header/Header'
import Footer from 'components/Layout/Footer/Footer'
import './Layout.css'
import LayoutContent from './-Content/Layout-Content.jsx'
import { cn } from '@bem-react/classname'

export default ({ children, title = 'Arcanum', className }) => (
  <div className={cn('Theme')(null, [className])}>
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
