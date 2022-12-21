import * as React from 'react'
import {styled, alpha} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {useState} from 'react'
import {useEffect} from 'react'

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function NetflixAppBar() {
  const [appBarStyle, setAppBarStyle] = useState({
    background: 'transparent',
    boxShadow: 'none',
    transition: '0.3s ease',
    position: 'fixed',
    zIndex: '10',
  })
  useEffect(() => {
    const onScroll = e => {
      if (e.target.documentElement.scrollTop < 100) {
        setAppBarStyle({
          background: 'transparent',
          boxShadow: 'none',
          transition: '0.3s ease',
          position: 'fixed',
          zIndex: '10',
        })
      } else {
        setAppBarStyle({
          background: 'black',
          boxShadow: 'none',
          transition: '0.3s ease',
          position: 'fixed',
          zIndex: '10',
        })
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <img
            src="images/logo-andrea-netflix.png"
            alt="logo-netflix-andrea"
            height={'100px'}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          ></Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
          <img
            src="images/netflix-avatar.png"
            alt="logo-netflix-andrea"
            height={'50px'}
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
