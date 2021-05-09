import axios from 'axios'
import HttpCode from 'http-status-codes'
import React, { useCallback, } from 'react'
import config from '../config'
import { User, } from '../domain/dto/User'
import { IRequestHook, } from '../types/hooks'

export interface IGetUserResult extends IRequestHook {
  getUser: (userId: string) => Promise<void>,
  user?: User
}

export const useGetUser = (): IGetUserResult => {
  const [ isLoading, setIsLoading, ] = React.useState(false)
  const [ isSuccess, setIsSuccess, ] = React.useState(false)
  const [ error, setError, ] = React.useState(null)
  const [ user, setUser, ] = React.useState(null)

  const getUser = useCallback(async (userId: string): Promise<void> => {
    try {
      const endpoint = `${config.api.basePath}/users/${userId}/portfolio`
      const userResponse = await axios.get(endpoint)
      const user: User = userResponse.status === HttpCode.OK ? userResponse.data.data : {}

      setUser(user)
      setError(null)
      setIsSuccess(true)
    } catch (err) {
      setError(err.message)
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }, [ ])

  return { getUser, user, isLoading, error, isSuccess, }
}