"use client"

import Link from "next/link"
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { useQuery } from "@tanstack/react-query"
import { Alert, Button } from "@aws-amplify/ui-react"

import { Group } from "@/API"
import Feature from "./Feature"

const listGroupsQuery = /* GraphQL */ `
query ListGroups(
  $limit: Int
  $nextToken: String
) {
  listGroups(limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`

const GroupsNavigation = () => {
  const query = useQuery({
    async queryFn () {
      let nextToken = null
      const groups: Pick<Group, 'id' | 'name'>[] = []
      do {
        const result = await API.graphql(
          graphqlOperation(listGroupsQuery, {  limit: 9999, nextToken })
        ) as GraphQLResult<{
          listGroups: {
            items: Pick<Group, 'id' | 'name'>[]
            nextToken: string | null
          }
        }>
        if (result.errors) throw result.errors
        groups.push(...(result.data?.listGroups.items ?? []))
        nextToken = result.data?.listGroups.nextToken
      } while (nextToken)
      return groups
    }
  })


  return (
    <Feature
      title="グループ"
      actions={
        <Link href="/new">
          <Button>グループを作成する</Button>
        </Link>
      }>
      {query.isLoading && <Alert variation="info">読み込み中</Alert>}
      {query.isError && <Alert variation="error">エラー</Alert>}
      {query.isSuccess && query.data.length < 1 && <Alert variation="info">データがありません</Alert>}
      {query.isSuccess && (query.data.map(({ id, name }) => (
        <Link href={`/${id}`} key={id}>
          <Button>{name}</Button>
        </Link>
      )))}
    </Feature>
  )
}

export default GroupsNavigation
