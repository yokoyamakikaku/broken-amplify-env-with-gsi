/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          name
          groupId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      schedules {
        items {
          id
          name
          startedAt
          finishedAt
          groupId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          name
          groupId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      schedules {
        items {
          id
          name
          startedAt
          finishedAt
          groupId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          name
          groupId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      schedules {
        items {
          id
          name
          startedAt
          finishedAt
          groupId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      groupId
      group {
        id
        name
        users {
          nextToken
          __typename
        }
        schedules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      participations {
        items {
          id
          userId
          scheduleId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      groupId
      group {
        id
        name
        users {
          nextToken
          __typename
        }
        schedules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      participations {
        items {
          id
          userId
          scheduleId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      groupId
      group {
        id
        name
        users {
          nextToken
          __typename
        }
        schedules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      participations {
        items {
          id
          userId
          scheduleId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
      id
      name
      startedAt
      finishedAt
      groupId
      group {
        id
        name
        users {
          nextToken
          __typename
        }
        schedules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      participations {
        items {
          id
          userId
          scheduleId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
      id
      name
      startedAt
      finishedAt
      groupId
      group {
        id
        name
        users {
          nextToken
          __typename
        }
        schedules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      participations {
        items {
          id
          userId
          scheduleId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
      id
      name
      startedAt
      finishedAt
      groupId
      group {
        id
        name
        users {
          nextToken
          __typename
        }
        schedules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      participations {
        items {
          id
          userId
          scheduleId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createParticipation = /* GraphQL */ `
  mutation CreateParticipation(
    $input: CreateParticipationInput!
    $condition: ModelParticipationConditionInput
  ) {
    createParticipation(input: $input, condition: $condition) {
      id
      userId
      scheduleId
      user {
        id
        name
        groupId
        group {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        participations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      schedule {
        id
        name
        startedAt
        finishedAt
        groupId
        group {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        participations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateParticipation = /* GraphQL */ `
  mutation UpdateParticipation(
    $input: UpdateParticipationInput!
    $condition: ModelParticipationConditionInput
  ) {
    updateParticipation(input: $input, condition: $condition) {
      id
      userId
      scheduleId
      user {
        id
        name
        groupId
        group {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        participations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      schedule {
        id
        name
        startedAt
        finishedAt
        groupId
        group {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        participations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteParticipation = /* GraphQL */ `
  mutation DeleteParticipation(
    $input: DeleteParticipationInput!
    $condition: ModelParticipationConditionInput
  ) {
    deleteParticipation(input: $input, condition: $condition) {
      id
      userId
      scheduleId
      user {
        id
        name
        groupId
        group {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        participations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      schedule {
        id
        name
        startedAt
        finishedAt
        groupId
        group {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        participations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
