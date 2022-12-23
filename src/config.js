import {SignalCellularNull} from '@mui/icons-material'
import axios from 'axios'
import {useCallback} from 'react'
import {useReducer} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

export const API_URL = process.env.REACT_APP_API_URL
export const AUTH_URL = process.env.REACT_APP_AUTH_URL
export const apiKey = '0e7401225b1d96603236c5067ad4d156'
export const lang = 'fr-FR'
export const imagePath = 'https://image.tmdb.org/t/p'
export const imagePathOriginal = `${imagePath}/original`
export const imagePath400 = `${imagePath}/w400`
export const TYPE_TV = 'tv'
export const TYPE_MOVIE = 'movie'
export const localStorageTokenKey = 'netflix_auth_token'

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetching':
      return {status: 'fetching', data: null, error: null}
    case 'done':
      return {status: 'done', data: action.payload, error: null}
    case 'fail':
      return {status: 'fail', data: null, error: action.error}
    default:
      throw new Error('Unknown')
  }
}

const initialState = {
  data: null,
  error: null,
  status: 'idle',
}

export const useMovie = ({movieId, types}) => {
  const type = 'movie'
  const movie_id = 76600
  const [state, dispatch] = useReducer(reducer, initialState)
  const {data, error, status} = state

  const execute = useCallback(promise => {
    dispatch({type: 'fetching'})
    promise
      .get(
        `https://api.themoviedb.org/3/${type}/${movie_id}?api_key=${apiKey}&language=${lang}`,
      )
      .then(data => dispatch({type: 'done', payload: data}))
      .catch(error => dispatch({type: 'fail', error}))
  }, [])

  const setData = useCallback(
    data => dispatch({type: 'done', payload: data}),
    [dispatch],
  )
  console.log(data)
  return {data, error, status, setData, execute}
}
