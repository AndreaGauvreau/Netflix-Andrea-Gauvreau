import React from 'react'
import NetflixRow from './NetflixRow'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './row.css'
import NetflixAppBar from './NetflixAppBar'
import NetflixHeader from './NetflixHeader'

export default function NetflixApp() {
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
        wideImage={false}
        title={'Films Les mieux notés'}
        sort="popular"
      />
    </div>
  )
}
