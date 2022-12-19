import {imageListItemClasses} from '@mui/material'
import axios from 'axios'
import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {apiKey, imagePath, imagePath400} from '../config'
import './row.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function NetflixRow({icone, type, wideImage, title, sort}) {
  const icones = icone ? 'add_icone' : ''
  const [data, setData] = useState()
  const id = 550
  const lang = 'fr-FR'
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${sort}?api_key=${apiKey}&language=${lang}&page=1`,
      )
      .then(res => setData(res))
      .catch(error => console.log(error))
  }, [id, type])
  const image = e => `${imagePath400}/${e.backdrop_path}`

  return (
    <div>
      {title}
      <div id="row_data">
        {data?.data.results.map((e, index) => (
          <div className={icones} key={index} id="maindivrow">
            <img src={image(e)} />
            <div className="toolbox">
              <div>{e.original_title}</div>
              <div className="icons_set">
                <PlayArrowIcon />
                <AddIcon />
                <ThumbUpIcon />
                <KeyboardArrowDownIcon />
              </div>
              {e.vote_average}
              {e.release_date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
