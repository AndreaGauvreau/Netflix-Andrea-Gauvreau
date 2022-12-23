import axios from 'axios'
import React, {useState} from 'react'
import {useEffect} from 'react'
import {useReducer} from 'react'
import {useCallback} from 'react'
import {apiKey, lang} from '../config'

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

export const useMovie = (movieId = 71446, types = 'movie') => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {data, error, status} = state

  useEffect(() => {
    dispatch({type: 'fetching'})
    axios
      .get(
        `https://api.themoviedb.org/3/${types}/${movieId}?api_key=${apiKey}&language=${lang}`,
      )
      .then(data => dispatch({type: 'done', payload: data}))
      .catch(error => dispatch({type: 'fail', error}))
  }, [types, movieId])
  return {data, error, status}
}

export const useRandomId = types => {
  const tvIds = [71446, 60574, 1399, 66732]
  const moviesIds = [399566, 602734, 579047, 385128, 615658]
  const [id, setId] = useState()
  useEffect(() => {
    if (types === 'tv') {
      let randomNumber = Math.floor(Math.random() * (tvIds.length - 1))
      setId(tvIds[randomNumber])
    }
    if (types === 'movie') {
      let randomNumber = Math.floor(Math.random() * (moviesIds.length - 1))
      setId(moviesIds[randomNumber])
    }
    if (types === undefined) {
      setId(399566)
    }
  }, [types])

  return id
}
