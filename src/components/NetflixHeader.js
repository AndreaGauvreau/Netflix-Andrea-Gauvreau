import {Button} from '@mui/material'
import axios from 'axios'
import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {apiKey, imagePathOriginal} from '../config'
import {useMovie, useRandomId} from '../utils/useMovie'
import './header.css'
import {HeaderSkeleton} from './skeletons/HeaderSkeleton'

export default function NetflixHeader({movie, types}) {
  const myRandomId = useRandomId(types)
  const {data, error, status} = useMovie(myRandomId, types)
  const image = `${imagePathOriginal}/${data?.data.backdrop_path}`
  const title = types === 'movie' ? data?.data.title : data?.data.name
  if (!data) {
    return (
      <>
        <HeaderSkeleton />
      </>
    )
  } else
    return (
      <div
        className="header_content"
        style={{backgroundImage: `url('${image}')`, backgroundSize: 'cover'}}
      >
        {console.log(data)}
        <h1>{title}</h1>
        <span
          style={{
            width: '400px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            webkitLineClamp: '2',
            lineClamp: '2',
            webkitBoxOrient: 'vertical',
            marginBottom: '30px',
          }}
        >
          {data?.data.overview}
        </span>
        <div>
          <a
            href={data?.data.homepage}
            target="_blank"
            rel="noreferrer"
            style={{textDecoration: 'none'}}
          >
            <Button
              variant="contained"
              style={{
                color: '#000000',
                backgroundColor: '#ffffff',
                fontWeight: '800',
              }}
            >
              Lecture
            </Button>
          </a>
          <Button
            variant="contained"
            style={{
              color: '#ffffff',
              border: ' 1px solid #ffffff00',
              backgroundColor: '#00000090',
              fontWeight: '800',
              marginLeft: '20px',
            }}
          >
            Ajouter à ma liste
          </Button>
        </div>
      </div>
    )
}
