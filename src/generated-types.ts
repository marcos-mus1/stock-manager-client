import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateItemDto = {
  alertStock: Scalars['Float'];
  name: Scalars['String'];
  refNumber: Scalars['String'];
  stock: Scalars['Float'];
};

export type CreateMouvementDto = {
  date: Scalars['String'];
  itemId?: InputMaybe<Scalars['Int']>;
  mouvement: Scalars['String'];
  quantity: Scalars['Float'];
  vehiculeId: Scalars['Float'];
};

export type CreateUserDto = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type CreateVehiculeDto = {
  name: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  alertStock: Scalars['Float'];
  id: Scalars['ID'];
  mouvements?: Maybe<Array<Mouvement>>;
  name: Scalars['String'];
  refNumber: Scalars['String'];
  /** Just 2 values : 'active' | 'declutter' */
  status?: Maybe<Scalars['String']>;
  stock: Scalars['Float'];
};

export type Mouvement = {
  __typename?: 'Mouvement';
  date: Scalars['String'];
  id: Scalars['ID'];
  item: Item;
  mouvement: Scalars['String'];
  quantity: Scalars['Float'];
  vehicule: Vehicule;
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  createMouvement: Mouvement;
  createUser: User;
  createVehicule: Vehicule;
  removeItem: Item;
  removeMouvement: Mouvement;
  removeUser: User;
  removeVehicule: Vehicule;
  updateItem: Item;
  updateMouvement: Mouvement;
  updateUser: User;
  updateVehicule: Vehicule;
};

export type MutationCreateItemArgs = {
  createItemInput: CreateItemDto;
};

export type MutationCreateMouvementArgs = {
  createMouvementInput: CreateMouvementDto;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserDto;
};

export type MutationCreateVehiculeArgs = {
  createVehiculeInput: CreateVehiculeDto;
};

export type MutationRemoveItemArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveMouvementArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveVehiculeArgs = {
  id: Scalars['Int'];
};

export type MutationUpdateItemArgs = {
  updateItemInput: UpdateItemDto;
};

export type MutationUpdateMouvementArgs = {
  updateMouvementInput: UpdateMouvementDto;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserDto;
};

export type MutationUpdateVehiculeArgs = {
  updateVehiculeInput: UpdateVehiculeDto;
};

export type Query = {
  __typename?: 'Query';
  Item: Item;
  Items: Array<Item>;
  Mouvement: Mouvement;
  Mouvements: Array<Mouvement>;
  Vehicule: Vehicule;
  Vehicules: Array<Vehicule>;
  user: User;
};

export type QueryItemArgs = {
  id: Scalars['Int'];
};

export type QueryMouvementArgs = {
  id: Scalars['Int'];
};

export type QueryVehiculeArgs = {
  id: Scalars['Int'];
};

export type QueryUserArgs = {
  email: Scalars['String'];
};

export type UpdateItemDto = {
  alertStock?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  refNumber?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Float']>;
};

export type UpdateMouvementDto = {
  date?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  itemId?: InputMaybe<Scalars['Int']>;
  mouvement?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  vehiculeId?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserDto = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateVehiculeDto = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Vehicule = {
  __typename?: 'Vehicule';
  id: Scalars['ID'];
  mouvements?: Maybe<Array<Mouvement>>;
  name: Scalars['String'];
  /** Just 2 values : 'active' | 'declutter' */
  status?: Maybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserDto;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: {
    __typename?: 'User';
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
  };
};

export const CreateUserDocument = gql`
  mutation createUser($createUserInput: CreateUserDto!) {
    createUser(createUserInput: $createUserInput) {
      id
      firstName
      lastName
      email
      isAdmin
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreateUserGQL extends Apollo.Mutation<
  CreateUserMutation,
  CreateUserMutationVariables
> {
  document = CreateUserDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
