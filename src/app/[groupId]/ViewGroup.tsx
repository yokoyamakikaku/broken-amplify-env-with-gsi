"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { useQuery } from "@tanstack/react-query"
import { Alert, Button } from "@aws-amplify/ui-react"

import { Group, User } from "@/API"
import Feature from "../Feature"
import GroupDetail from "./GroupDetail"
import UsersNavigation from "./UsersNavigation"

const getGroupQuery = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      users {
        items {
          id
          name
        }
        nextToken
        __typename
      }
    }
  }
`;

const ViewGroup = () => {
  const { groupId } = useParams()

  const query = useQuery({
    queryKey: ['groups', groupId],
    async queryFn() {
      const result = await API.graphql(
        graphqlOperation(getGroupQuery, { id: groupId })
      ) as GraphQLResult<{
        getGroup: Pick<Group, 'id' | 'name' | 'users'>
      }>
      if (result.errors) throw result.errors
      if (!result.data) throw Error("No Data")

      const group: Pick<Group, 'id' | 'name'> = {
        id: result.data.getGroup.id,
        name: result.data.getGroup.name,
      }

      const users: Pick<User, 'id' | 'name' | 'groupId'>[] = []
      for (const data of result.data.getGroup.users?.items ?? []) {
        if (!data) continue
        users.push({
          id: data.id,
          name: data.name,
          groupId: group.id
        })
      }

      return {
        group,
        users
      }
    }
  })

  if (query.isLoading) return <Alert variation="info">読み込み中</Alert>
  if (query.isError) return <Alert variation="error">エラー</Alert>
  return (
    <>
      <Feature title="グループ">
        {query.data && <GroupDetail group={query.data.group} />}
      </Feature>
      <Feature title="ユーザ" actions={
        <Link href={`/${groupId}/users/new`}>
          <Button>ユーザを作成</Button>
        </Link>
      }>
        {query.data && <UsersNavigation users={query.data.users} />}
      </Feature>
    </>
  )
}

export default ViewGroup
