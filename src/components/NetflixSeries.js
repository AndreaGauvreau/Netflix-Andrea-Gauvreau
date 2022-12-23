import React from 'react'
import NetflixRow from './NetflixRow'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './row.css'
import NetflixAppBar from './NetflixAppBar'
import NetflixHeader from './NetflixHeader'

export default function NetflixSeries() {
  const types = TYPE_TV
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader types={types} />
      <div id="first_row">
        <NetflixRow
          icone={true}
          type={types}
          wideImage={false}
          title={'Les plus populaires'}
          sort="popular"
        />
      </div>
      <NetflixRow
        icone={false}
        type={types}
        wideImage={true}
        title={'Séries les mieux notées'}
        sort="top_rated"
      />
      <NetflixRow
        icone={true}
        type={types}
        wideImage={true}
        title={'Séries actuellement diffusé'}
        sort="on_the_air"
      />
      <NetflixRow
        icone={true}
        type={types}
        wideImage={false}
        title={"Séries Diffusées aujourd'hui"}
        sort="airing_today"
      />
      <NetflixRow
        icone={false}
        type={types}
        wideImage={true}
        title={'Séries Les mieux notés'}
        sort="top_rated"
      />
    </div>
  )
}
