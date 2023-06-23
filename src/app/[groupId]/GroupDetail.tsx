"use client"

import { Group } from "@/API"
import { FC } from "react"
import { Table, TableBody, TableRow, TableCell } from "@aws-amplify/ui-react"

const GroupDetail: FC<{ group: Pick<Group, 'id' | 'name'>}> = ({ group })  => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>{group.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>名前</TableCell>
          <TableCell>{group.name}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default GroupDetail
