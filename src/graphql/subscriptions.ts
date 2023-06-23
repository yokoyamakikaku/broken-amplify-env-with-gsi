/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onCreateGroup(filter: $filter, owner: $owner) {
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
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onUpdateGroup(filter: $filter, owner: $owner) {
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
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onDeleteGroup(filter: $filter, owner: $owner) {
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
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
  }
`;
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule(
    $filter: ModelSubscriptionScheduleFilterInput
    $owner: String
  ) {
    onCreateSchedule(filter: $filter, owner: $owner) {
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
  }
`;
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule(
    $filter: ModelSubscriptionScheduleFilterInput
    $owner: String
  ) {
    onUpdateSchedule(filter: $filter, owner: $owner) {
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
  }
`;
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule(
    $filter: ModelSubscriptionScheduleFilterInput
    $owner: String
  ) {
    onDeleteSchedule(filter: $filter, owner: $owner) {
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
  }
`;
export const onCreateParticipation = /* GraphQL */ `
  subscription OnCreateParticipation(
    $filter: ModelSubscriptionParticipationFilterInput
    $owner: String
  ) {
    onCreateParticipation(filter: $filter, owner: $owner) {
      id
      userId
      scheduleId
      user {
        id
        name
        groupId
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
export const onUpdateParticipation = /* GraphQL */ `
  subscription OnUpdateParticipation(
    $filter: ModelSubscriptionParticipationFilterInput
    $owner: String
  ) {
    onUpdateParticipation(filter: $filter, owner: $owner) {
      id
      userId
      scheduleId
      user {
        id
        name
        groupId
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
export const onDeleteParticipation = /* GraphQL */ `
  subscription OnDeleteParticipation(
    $filter: ModelSubscriptionParticipationFilterInput
    $owner: String
  ) {
    onDeleteParticipation(filter: $filter, owner: $owner) {
      id
      userId
      scheduleId
      user {
        id
        name
        groupId
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
