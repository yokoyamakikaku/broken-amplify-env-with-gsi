"use client"

import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { TextField, Flex, Button, Alert } from "@aws-amplify/ui-react"
import { API, GraphQLResult, graphqlOperation } from "@aws-amplify/api"

import * as mutations from '@/graphql/mutations'
import { CreateGroupMutation, CreateGroupMutationVariables, Group } from "@/API"
import Feature from "../Feature"
import { useSnackbar } from 'notistack'

type FormValues = {
  name: string
}

const CreateGroup = () => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const mutation = useMutation({
    async mutationFn(values: FormValues) {
      const result = await API.graphql(
        graphqlOperation(mutations.createGroup, {
          input: {
            name: values.name
          }
        } as CreateGroupMutationVariables)
      ) as GraphQLResult<CreateGroupMutation>
      if (result.errors) throw result.errors
      return result.data?.createGroup as Group
    },
    onSuccess(data) {
      console.log({data})
      enqueueSnackbar("作成しました", { variant: "success" })
      router.push(`/${data.id}`)
    }
  })

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { name: "" }
  })

  return (
    <Feature title="グループの作成" maxWidth="small">
      <form onSubmit={handleSubmit((values) => mutation.mutateAsync(values))}>
        <Flex direction="column">
          <TextField label="名前" type="text" required {...register("name")} />
          {mutation.isError && <Alert>エラー</Alert>}
          <Flex>
            <Button type="submit" variation="primary">グループを作成する</Button>
          </Flex>
        </Flex>
      </form>
    </Feature>
  )
}

export default CreateGroup
