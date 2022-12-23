import React from 'react'
import NetflixApp from './components/NetflixApp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Error404 from './components/Error404'
import NetflixById from './components/NetflixById'
import NetflixMovies from './components/NetflixMovies'
import NetflixSeries from './components/NetflixSeries'
import NetflixNews from './components/NetflixNews'
export default function AuthApp() {
  return (
    <Router>
      <div>
        <span>
          <Routes>
            <Route path="/" element={<NetflixApp />} />
            <Route path="/movies" element={<NetflixMovies />} />
            <Route path="/series" element={<NetflixSeries />} />
            <Route path="/news" element={<NetflixNews />} />
            <Route path="/tv/:tvid" element={<NetflixById />} />
            <Route path="/movie/:movieId" element={<NetflixById />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </span>
      </div>
    </Router>
  )
}
