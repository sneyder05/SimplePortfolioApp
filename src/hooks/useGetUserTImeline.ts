import axios from 'axios'
import HttpCode from 'http-status-codes'
import React, { useCallback, } from 'react'
import config from '../config'
import { Tweet, } from '../domain/dto/Tweet'
import { IRequestHook, } from '../types/hooks'

export interface IGetUserTimelineResult extends IRequestHook {
  getUserTimeline: (userId: string, maxTweets: number) => Promise<void>,
  tweets?: Tweet[]
}

export const useGetUserTimeline = (): IGetUserTimelineResult => {
  const [ isLoading, setIsLoading, ] = React.useState(false)
  const [ isSuccess, setIsSuccess, ] = React.useState(false)
  const [ error, setError, ] = React.useState(null)
  const [ tweets, setTweets, ] = React.useState([])

  const getUserTimeline = useCallback(async (userId: string, maxTweets: number): Promise<void> => {
    try {
      const endpoint = `${config.api.basePath}/users/${userId}/tweets/${maxTweets}`
      const userTimelineResponse = await axios.get(endpoint)
      const tweets: Tweet[] = userTimelineResponse.status === HttpCode.OK ? userTimelineResponse.data.data : []

      setTweets(tweets)
      setError(null)
      setIsSuccess(true)
    } catch (err) {
      setError(err.message)
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }, [ ])

  return { getUserTimeline, tweets, isLoading, error, isSuccess, }
}