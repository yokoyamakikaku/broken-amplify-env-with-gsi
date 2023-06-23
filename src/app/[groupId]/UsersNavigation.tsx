import { FC } from "react";
import Link from "next/link";
import { Flex, Button, Alert } from "@aws-amplify/ui-react";
import { User } from "@/API";

interface UsersNavigationProps {
  users: Pick<User, 'id' | 'name' | 'groupId'>[]
}

const UsersNavigation:FC<UsersNavigationProps> = ({ users }) => {
  return (
    <Flex direction="column">
      {users.length < 1 && <Alert>データがありません</Alert>}
      {users.map(user => (
        <Link key={user.id} href={`/${user.groupId}/users/${user.id}`}>
          <Button>{user.name}</Button>
        </Link>
      ))}
    </Flex>
  )
}

export default UsersNavigation
