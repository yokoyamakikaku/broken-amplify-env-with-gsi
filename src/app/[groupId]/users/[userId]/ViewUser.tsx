"use client"

import { useParams } from "next/navigation"
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { useQuery } from "@tanstack/react-query"
import { Alert } from "@aws-amplify/ui-react"

import { User } from "@/API"
import Feature from "@/app/Feature"
import UserDetail from "./UserDetail"

export const getUserQuery = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
    }
  }
`;

const ViewUser = () => {
  const { userId } = useParams()

  const query = useQuery({
    queryKey: ['users', userId],
    async queryFn() {
      const result = await API.graphql(
        graphqlOperation(getUserQuery, { id: userId })
      ) as GraphQLResult<{
        getUser: Pick<User, 'id' | 'name'>
      }>
      if (result.errors) throw result.errors
      return result.data?.getUser
    }
  })

  if (query.isLoading) return <Alert variation="info">読み込み中</Alert>
  if (query.isError) return <Alert variation="error">エラー</Alert>
  return (
    <Feature title="ユーザ">
      {query.data && <UserDetail user={query.data} />}
    </Feature>
  )
}

export default ViewUser
