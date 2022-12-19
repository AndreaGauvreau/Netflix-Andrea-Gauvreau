import {Button} from '@mui/material'
import axios from 'axios'
import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {apiKey, imagePathOriginal} from '../config'
import './header.css'

export default function NetflixHeader() {
  const [data, setData] = useState()
  const movie_id = 550
  const lang = 'fr-FR'
  const type = 'movie'
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${movie_id}?api_key=${apiKey}&language=${lang}`,
      )
      .then(res => setData(res))
      .catch(error => console.log(error))
  }, [type])
  const image = `${imagePathOriginal}/${data?.data.backdrop_path}`
  return (
    <div
      className="header_content"
      style={{backgroundImage: `url('${image}')`, backgroundSize: 'cover'}}
    >
      <h1>{data?.data.original_title}</h1>
      <div>
        <Button variant="contained">Lecture</Button>
        <Button variant="outlined">Ajouter à ma liste</Button>
      </div>

      {console.log(data)}
    </div>
  )
}
