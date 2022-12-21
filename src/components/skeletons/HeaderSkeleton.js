import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import '../Netflix.css'

const styles = {
  banner: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    objectFit: 'contain',
    height: '448px',
  },
}

export const HeaderSkeleton = () => {
  return (
    <main style={styles.banner}>
      <div className="banner__contents">
        <h1 className="banner__title">
          <Skeleton
            animation="wave"
            width={210}
            sx={{bgcolor: 'grey.900'}}
            width={'640px'}
          />
        </h1>
        <h1 className="synopsis">
          <Skeleton
            animation="wave"
            width={'340px'}
            sx={{bgcolor: 'grey.900'}}
          />
          <Skeleton
            animation="wave"
            sx={{bgcolor: 'grey.900'}}
            width={'340px'}
          />
        </h1>
        <div className="banner__buttons">
          <Skeleton
            animation="wave"
            width={'140px'}
            sx={{bgcolor: 'grey.900'}}
          />
          <Skeleton
            animation="wave"
            sx={{bgcolor: 'grey.900'}}
            width={'140px'}
          />
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </main>
  )
}
