"use client"

import { User } from "@/API"
import { FC } from "react"
import { Table, TableBody, TableRow, TableCell } from "@aws-amplify/ui-react"

const UserDetail: FC<{ user: Pick<User, 'id' | 'name'>}> = ({ user })  => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>{user.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>名前</TableCell>
          <TableCell>{user.name}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default UserDetail
