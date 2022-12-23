import {IconButton, imageListItemClasses, Typography} from '@mui/material'
import axios from 'axios'
import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {apiKey, imagePath, imagePath400, TYPE_MOVIE} from '../config'
import './row.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {useFetchMovies} from '../utils/useMovie'
import {RowSkeleton} from './skeletons/RowSkeleton'

export default function NetflixRow({icone, type, wideImage, title, sort}) {
  const icones = icone ? 'add_icone' : ''
  const {data, error, status} = useFetchMovies(type, sort)

  const wideImages = a => (wideImage ? a?.backdrop_path : a?.poster_path)
  const image = e => `${imagePath400}/${wideImages(e)}`
  const toolbox = wideImage ? 'toolbox' : 'delete-toolbox'
  const [addDatalike, setAddDataLike] = useState([])
  const onClickLike = e => {
    addDatalike.includes(e)
      ? setAddDataLike(current =>
          current.filter(addDatalike => {
            return addDatalike !== e
          }),
        )
      : setAddDataLike([...addDatalike, e])
  }
  if (!data) {
    return (
      <>
        <RowSkeleton
          wideImage={wideImage}
          nbElement={data?.data.results.length}
        />
      </>
    )
  } else {
    return (
      <div>
        <Typography variant="h2">{title}</Typography>
        <div id="row_data">
          {console.log('list', data)}
          {data?.data.results.map((e, index) => (
            <div className={icones} key={index} id="maindivrow">
              <img src={image(e)} alt={e.original_title} id="imagenormal" />
              <img
                id="blurimage"
                src={image(e)}
                alt={`${e.original_title}-blur`}
              />
              {addDatalike.includes(e.id) ? (
                <FavoriteIcon id="loveButton" />
              ) : (
                ''
              )}
              {console.log(addDatalike)}
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
                    <ThumbUpIcon
                      onClick={() => onClickLike(e?.id)}
                      className={addDatalike.includes(e.id) ? 'liked' : ''}
                    />
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
}
