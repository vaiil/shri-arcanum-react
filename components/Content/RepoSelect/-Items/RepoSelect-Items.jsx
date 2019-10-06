import { List, ListItem } from '../../../Base/List'
import { cnText } from '../../../Base/Text'
import Link from 'next/link'
import { cnRepoSelect } from '../index'
import './RepoSelect-Items.css'

export default ({ repos }) => (
  <List indentV="m" className={cnRepoSelect('Items')}>
    {
      repos.map(repoName => (
          <ListItem key={repoName}>
            <Link href={'/repos/[repoName]'} as={`/repos/${repoName}`}>
              <a className={cnText({ view: 'primary' })}>{repoName}</a>
            </Link>
          </ListItem>
        )
      )
    }
  </List>
)
