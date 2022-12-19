import React from 'react'
import NetflixRow from './NetflixRow'
import {TYPE_TV, TYPE_MOVIE} from '../config'
import './row.css'

export default function NetflixApp() {
  return (
    <div>
      <NetflixRow
        icone={false}
        type={TYPE_MOVIE}
        wideImage={false}
        title={'Les plus populaires'}
        sort="popular"
      />
      <NetflixRow
        icone={true}
        type={TYPE_MOVIE}
        wideImage={true}
        title={'Films Les mieux notés'}
        sort="top_rated"
      />
      <NetflixRow
        icone={true}
        type={TYPE_MOVIE}
        wideImage={true}
        title={'Sortie prochainement...'}
        sort="upcoming"
      />
      <NetflixRow
        icone={true}
        type={TYPE_MOVIE}
        wideImage={true}
        title={'top 10 des films'}
        sort="now_playing"
      />
    </div>
  )
}
