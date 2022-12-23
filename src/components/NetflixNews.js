import React from 'react'
import NetflixRow from './NetflixRow'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './row.css'
import NetflixAppBar from './NetflixAppBar'
import NetflixHeader from './NetflixHeader'

export default function NetflixNews() {
  const types = TYPE_MOVIE

  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader />
      <div id="first_row">
        <NetflixRow
          icone={true}
          type={TYPE_MOVIE}
          wideImage={false}
          title={'Les nouveautés'}
          sort="upcoming"
        />
      </div>
    </div>
  )
}
