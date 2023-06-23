/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  name: string,
  users?: ModelUserConnection | null,
  schedules?: ModelScheduleConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  groupId: string,
  group: Group,
  participations?: ModelParticipationConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelParticipationConnection = {
  __typename: "ModelParticipationConnection",
  items:  Array<Participation | null >,
  nextToken?: string | null,
};

export type Participation = {
  __typename: "Participation",
  id: string,
  userId: string,
  scheduleId: string,
  user: User,
  schedule: Schedule,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Schedule = {
  __typename: "Schedule",
  id: string,
  name: string,
  startedAt: string,
  finishedAt: string,
  groupId: string,
  group: Group,
  participations?: ModelParticipationConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelScheduleConnection = {
  __typename: "ModelScheduleConnection",
  items:  Array<Schedule | null >,
  nextToken?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  groupId: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  groupId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateScheduleInput = {
  id?: string | null,
  name: string,
  startedAt: string,
  finishedAt: string,
  groupId: string,
};

export type ModelScheduleConditionInput = {
  name?: ModelStringInput | null,
  startedAt?: ModelStringInput | null,
  finishedAt?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelScheduleConditionInput | null > | null,
  or?: Array< ModelScheduleConditionInput | null > | null,
  not?: ModelScheduleConditionInput | null,
};

export type UpdateScheduleInput = {
  id: string,
  name?: string | null,
  startedAt?: string | null,
  finishedAt?: string | null,
  groupId?: string | null,
};

export type DeleteScheduleInput = {
  id: string,
};

export type CreateParticipationInput = {
  id?: string | null,
  userId: string,
  scheduleId: string,
};

export type ModelParticipationConditionInput = {
  userId?: ModelIDInput | null,
  scheduleId?: ModelIDInput | null,
  and?: Array< ModelParticipationConditionInput | null > | null,
  or?: Array< ModelParticipationConditionInput | null > | null,
  not?: ModelParticipationConditionInput | null,
};

export type UpdateParticipationInput = {
  id: string,
  userId?: string | null,
  scheduleId?: string | null,
};

export type DeleteParticipationInput = {
  id: string,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelScheduleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startedAt?: ModelStringInput | null,
  finishedAt?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  and?: Array< ModelScheduleFilterInput | null > | null,
  or?: Array< ModelScheduleFilterInput | null > | null,
  not?: ModelScheduleFilterInput | null,
};

export type ModelParticipationFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  scheduleId?: ModelIDInput | null,
  and?: Array< ModelParticipationFilterInput | null > | null,
  or?: Array< ModelParticipationFilterInput | null > | null,
  not?: ModelParticipationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  startedAt?: ModelSubscriptionStringInput | null,
  finishedAt?: ModelSubscriptionStringInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionScheduleFilterInput | null > | null,
};

export type ModelSubscriptionParticipationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  scheduleId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionParticipationFilterInput | null > | null,
  or?: Array< ModelSubscriptionParticipationFilterInput | null > | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateScheduleMutationVariables = {
  input: CreateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type CreateScheduleMutation = {
  createSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    startedAt: string,
    finishedAt: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateScheduleMutationVariables = {
  input: UpdateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type UpdateScheduleMutation = {
  updateSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    startedAt: string,
    finishedAt: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteScheduleMutationVariables = {
  input: DeleteScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type DeleteScheduleMutation = {
  deleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    startedAt: string,
    finishedAt: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateParticipationMutationVariables = {
  input: CreateParticipationInput,
  condition?: ModelParticipationConditionInput | null,
};

export type CreateParticipationMutation = {
  createParticipation?:  {
    __typename: "Participation",
    id: string,
    userId: string,
    scheduleId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    schedule:  {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateParticipationMutationVariables = {
  input: UpdateParticipationInput,
  condition?: ModelParticipationConditionInput | null,
};

export type UpdateParticipationMutation = {
  updateParticipation?:  {
    __typename: "Participation",
    id: string,
    userId: string,
    scheduleId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    schedule:  {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteParticipationMutationVariables = {
  input: DeleteParticipationInput,
  condition?: ModelParticipationConditionInput | null,
};

export type DeleteParticipationMutation = {
  deleteParticipation?:  {
    __typename: "Participation",
    id: string,
    userId: string,
    scheduleId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    schedule:  {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScheduleQueryVariables = {
  id: string,
};

export type GetScheduleQuery = {
  getSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    startedAt: string,
    finishedAt: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSchedulesQueryVariables = {
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchedulesQuery = {
  listSchedules?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetParticipationQueryVariables = {
  id: string,
};

export type GetParticipationQuery = {
  getParticipation?:  {
    __typename: "Participation",
    id: string,
    userId: string,
    scheduleId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    schedule:  {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListParticipationsQueryVariables = {
  filter?: ModelParticipationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipationsQuery = {
  listParticipations?:  {
    __typename: "ModelParticipationConnection",
    items:  Array< {
      __typename: "Participation",
      id: string,
      userId: string,
      scheduleId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersByGroupIdQueryVariables = {
  groupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersByGroupIdQuery = {
  listUsersByGroupId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSchedulesByGroupIdQueryVariables = {
  groupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchedulesByGroupIdQuery = {
  listSchedulesByGroupId?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParticipationsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelParticipationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipationsByUserIdQuery = {
  listParticipationsByUserId?:  {
    __typename: "ModelParticipationConnection",
    items:  Array< {
      __typename: "Participation",
      id: string,
      userId: string,
      scheduleId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParticipationsByScheduleIdQueryVariables = {
  scheduleId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelParticipationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipationsByScheduleIdQuery = {
  listParticipationsByScheduleId?:  {
    __typename: "ModelParticipationConnection",
    items:  Array< {
      __typename: "Participation",
      id: string,
      userId: string,
      scheduleId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    schedules?:  {
      __typename: "ModelScheduleConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnCreateScheduleSubscription = {
  onCreateSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    startedAt: string,
    finishedAt: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateScheduleSubscription = {
  onUpdateSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    startedAt: string,
    finishedAt: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteScheduleSubscription = {
  onDeleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    name: string,
    startedAt: string,
    finishedAt: string,
    groupId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    participations?:  {
      __typename: "ModelParticipationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateParticipationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipationFilterInput | null,
  owner?: string | null,
};

export type OnCreateParticipationSubscription = {
  onCreateParticipation?:  {
    __typename: "Participation",
    id: string,
    userId: string,
    scheduleId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    schedule:  {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateParticipationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateParticipationSubscription = {
  onUpdateParticipation?:  {
    __typename: "Participation",
    id: string,
    userId: string,
    scheduleId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    schedule:  {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteParticipationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteParticipationSubscription = {
  onDeleteParticipation?:  {
    __typename: "Participation",
    id: string,
    userId: string,
    scheduleId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    schedule:  {
      __typename: "Schedule",
      id: string,
      name: string,
      startedAt: string,
      finishedAt: string,
      groupId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
