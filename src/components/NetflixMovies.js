import React from 'react'
import NetflixRow from './NetflixRow'
import {TYPE_MOVIE} from '../config'
import './row.css'
import NetflixAppBar from './NetflixAppBar'
import NetflixHeader from './NetflixHeader'

export default function NetflixMovies() {
  const types = TYPE_MOVIE

  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader types={types} />
      <div id="first_row">
        <NetflixRow
          icone={true}
          type={TYPE_MOVIE}
          wideImage={false}
          title={'Les plus populaires'}
          sort="popular"
        />
      </div>
      <NetflixRow
        icone={false}
        type={TYPE_MOVIE}
        wideImage={true}
        title={'Sciences fictions'}
        sort="popular"
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
        wideImage={false}
        title={'top 10 des films'}
        sort="now_playing"
      />
      <NetflixRow
        icone={false}
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
    </div>
  )
}
