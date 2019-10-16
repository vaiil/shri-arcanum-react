import TableRow from 'components/Base/Table/-Row/Table-Row'
import TableHeadCell from 'components/Base/Table/-HeadCell/Table-HeadCell'


export default () => {
  return (
    <TableRow>
      <TableHeadCell>
        Name
      </TableHeadCell>
      <TableHeadCell>
        Last commit
      </TableHeadCell>
      <TableHeadCell>
        Commit message
      </TableHeadCell>
      <TableHeadCell>
        Committer
      </TableHeadCell>
      <TableHeadCell>
        Updated
      </TableHeadCell>
    </TableRow>
  )
}
