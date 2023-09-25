import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'
import { errorResponseCreator, successResponseCreator } from './responseFormat'
import { putInTable, queryTable } from './dynamodb'

import { GraphQLResult } from '@aws-amplify/api-graphql'
import { Amplify, API, withSSRContext } from 'aws-amplify'
import awsExports from '../aws-exports'
import { getUserByEmail } from '../graphql/queries'

type userData = {
  id?: string | null
  name?: string | null
  email?: string | null
  image?: string | null
  [x: string]: any
}

const userTable = (process.env.USERS_TABLE || process.env.NEXT_PUBLIC_USERS_TABLE) as string

Amplify.configure({ ...awsExports })

const LatestSession = async (email: string) => {
  try {
    const existingUserData = await API.graphql({
      query: getUserByEmail,
      variables: {
        email: email,
      },
    })

    const existingUser = existingUserData.data?.userByEmail

    if (!existingUser) {
      return null
    }

    const { id, name, image, blogger } = existingUser

    return { id, name, image, blogger }
  } catch (err) {
    console.log('Error updating user', err)
    return null
  }
}

export default LatestSession
