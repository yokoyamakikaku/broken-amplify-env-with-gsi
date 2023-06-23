/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
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
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getParticipation = /* GraphQL */ `
  query GetParticipation($id: ID!) {
    getParticipation(id: $id) {
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
export const listParticipations = /* GraphQL */ `
  query ListParticipations(
    $filter: ModelParticipationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listUsersByGroupId = /* GraphQL */ `
  query ListUsersByGroupId(
    $groupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listSchedulesByGroupId = /* GraphQL */ `
  query ListSchedulesByGroupId(
    $groupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedulesByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listParticipationsByUserId = /* GraphQL */ `
  query ListParticipationsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelParticipationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listParticipationsByScheduleId = /* GraphQL */ `
  query ListParticipationsByScheduleId(
    $scheduleId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelParticipationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipationsByScheduleId(
      scheduleId: $scheduleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
