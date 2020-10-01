import React from 'react';
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head'
import Logo from '@/components/Logo'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import $router from 'next/router'
import Link from 'next/link'
import '../styles/globals.css'

// Dynamic imports:
const AppBar = dynamic( 
  () => import('@material-ui/core/AppBar'), 
  {ssr: false}  
)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 60
  },
  mainheader: {
    borderBottom: '1px solid #ED1B33',
    boxShadow: 'none!important'
  },
  title: {
    flexGrow: 1,
  },
}));

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Your Life Choices</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      <div className={classes.root}>
        <AppBar className={classes.mainheader} color="default" position="fixed">
          <Toolbar>
            <div onClick={() => $router.push('/')}  className={classes.title}>
              <Link href="/">
                <a><Logo/></a>
              </Link>
            </div>
            <IconButton onClick={() => $router.push('/about')} color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton onClick={() => $router.push('/blog')} edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
