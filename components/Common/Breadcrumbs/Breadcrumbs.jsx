import { cnBreadcrumbs } from './index'
import './Breadcrumbs.css'
import BreadcrumbsLink from './-Link/Breadcrumbs-Link'
import { withRouter } from 'next/router'

const Breadcrumbs = ({ router: { query: { repoName, branch, path } } }) => {

  if (!repoName) {
    return (<></>)
  }

  const links = []

  links.push({ href: '/repos/[repoName]', as: `/repos/${repoName}`, children: repoName })

  if (branch) {
    links.push({ href: `/repos/[repoName]/tree/[branch]`, as: `/repos/${repoName}/tree/${branch}`, children: branch })
  }

  if (path) {
    let dirPath = ''
    links.push(...path.split('/').map(dir => {
      dirPath += '/' + dir
      return {
        href: `/repos/[repoName]/tree/[branch]/[path...]`,
        as: `/repos/${repoName}/tree/${branch}${dirPath}`,
        children: dir
      }
    }))
  }

  links[links.length - 1].active = true

  return (
    <div className={cnBreadcrumbs()}>
      {
        links.map((link) => (
          <BreadcrumbsLink key={link.as} {...link} />
        ))
      }
    </div>
  )
}

export default withRouter(Breadcrumbs)
