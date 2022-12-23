import {IconButton, imageListItemClasses, Typography} from '@mui/material'
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
import StarIcon from '@mui/icons-material/Star'

export default function NetflixRow({icone, type, wideImage, title, sort}) {
  const icones = icone ? 'add_icone' : ''
  const [data, setData] = useState()
  const id = 76600
  const lang = 'fr-FR'
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${sort}?api_key=${apiKey}&language=${lang}&page=1`,
      )
      .then(res => setData(res))
      .then(console.log(data))
      .catch(error => console.log(error))
  }, [id, type])
  const wideImages = a => (wideImage ? a?.backdrop_path : a?.poster_path)
  const image = e => `${imagePath400}/${wideImages(e)}`
  const toolbox = wideImage ? 'toolbox' : 'delete-toolbox'

  return (
    <div>
      <Typography variant="h2">{title}</Typography>
      <div id="row_data">
        {data?.data.results.map((e, index) => (
          <div className={icones} key={index} id="maindivrow">
            <img src={image(e)} alt={e.original_title} id="imagenormal" />
            <img
              id="blurimage"
              src={image(e)}
              alt={`${e.original_title}-blur`}
            />
            <div className={toolbox}>
              <div className="topinfos">
                {e.original_title}
                <span>
                  {e.vote_average} <StarIcon color="red" />
                </span>
              </div>
              <div className="icons_set">
                <IconButton>
                  <PlayArrowIcon />
                </IconButton>
                <IconButton>
                  <AddIcon />
                </IconButton>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
