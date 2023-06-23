"use client"

import { useParams, useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { useSnackbar } from 'notistack'
import { useMutation } from "@tanstack/react-query"
import { TextField, Flex, Button, Alert } from "@aws-amplify/ui-react"
import { API, GraphQLResult, graphqlOperation } from "@aws-amplify/api"

import * as mutations from '@/graphql/mutations'
import { CreateUserMutation, CreateUserMutationVariables, User } from "@/API"
import Feature from '@/app/Feature'

type FormValues = {
  name: string
}

const CreateUser = () => {
  const router = useRouter()
  const { groupId } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  const mutation = useMutation({
    async mutationFn(values: FormValues) {
      const result = await API.graphql(
        graphqlOperation(mutations.createUser, {
          input: {
            name: values.name,
            groupId: groupId,
          }
        } as CreateUserMutationVariables)
      ) as GraphQLResult<CreateUserMutation>
      if (result.errors) throw result.errors
      return result.data?.createUser as User
    },
    onSuccess(data) {
      console.log({data})
      enqueueSnackbar("作成しました", { variant: "success" })
      router.push(`/${groupId}/users/${data.id}`)
    }
  })

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { name: "" }
  })

  return (
    <Feature title="ユーザの作成" maxWidth="small">
      <form onSubmit={handleSubmit((values) => mutation.mutateAsync(values))}>
        <Flex direction="column">
          <TextField label="名前" type="text" required {...register("name")} />
          {mutation.isError && <Alert>エラー</Alert>}
          <Flex>
            <Button type="submit" variation="primary">ユーザを作成する</Button>
          </Flex>
        </Flex>
      </form>
    </Feature>
  )
}

export default CreateUser
