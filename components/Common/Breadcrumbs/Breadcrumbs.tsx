import { cnBreadcrumbs, BreadcrumbsProps } from './index'
import './Breadcrumbs.css'
import BreadcrumbsLink from './-Link/Breadcrumbs-Link'
import { withRouter } from 'next/router'
import { FC } from 'react'
import { BreadcrumbsLinkProps } from './-Link'


const Breadcrumbs: FC<BreadcrumbsProps> = ({ router: { query: { repoName, branch, path } } }) => {
  if (!repoName) {
    return (<></>)
  }

  const links: Array<BreadcrumbsLinkProps> = []

  links.push({ href: '/repos/[repoName]', as: `/repos/${repoName}`, children: repoName, active: false })

  if (branch) {
    links.push({
      href: `/repos/[repoName]/tree/[branch]`,
      as: `/repos/${repoName}/tree/${branch}`,
      children: branch,
      active: false
    })
  }

  if (typeof path === 'string') {
    let dirPath = ''
    links.push(...path.split('/').map(dir => {
      dirPath += '/' + dir
      return {
        href: `/repos/[repoName]/tree/[branch]/[path...]`,
        as: `/repos/${repoName}/tree/${branch}${dirPath}`,
        children: dir,
        active: false
      }
    }))
  }

  links[links.length - 1].active = true

  return (
    <div className={cnBreadcrumbs()}>
      {
        links.map(
          link => (
            <BreadcrumbsLink key={link.as} {...link} />
          )
        )
      }
    </div>
  )
}

export default withRouter(Breadcrumbs)
