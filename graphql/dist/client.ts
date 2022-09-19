import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTest = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTest: Test;
  createUser: User;
  deleteTest: Test;
  deleteUser: User;
  updateTest: Test;
  updateUser: User;
};


export type MutationCreateTestArgs = {
  input: CreateTest;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteTestArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateTestArgs = {
  input: UpdateTest;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  test: Test;
  tests: Array<Test>;
  user: User;
  users: Array<User>;
};


export type QueryTestArgs = {
  input: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UpdateTest = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  updated_at: Scalars['String'];
};

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string, email: string }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: number, name: string, email: string } };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, name: string, email: string } };


export const ListUsersDocument = gql`
    query ListUsers {
  users {
    id
    name
    email
  }
}
    `;
export const GetUserDocument = gql`
    query GetUser($id: Int!) {
  user(id: $id) {
    id
    name
    email
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!, $email: String!, $password: String!) {
  createUser(input: {name: $name, email: $email, password: $password}) {
    id
    name
    email
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ListUsers(variables?: ListUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListUsersQuery>(ListUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListUsers', 'query');
    },
    GetUser(variables: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUser', 'query');
    },
    CreateUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;