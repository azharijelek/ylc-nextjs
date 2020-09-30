import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import $router from 'next/router'
import '../styles/globals.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainheader: {
    borderBottom: '1px solid #ED1B33',
    boxShadow: 'none!important'
  },
  title: {
    flexGrow: 1,
  },
}));

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Your Life Choices</title>
        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      <div className={classes.root}>
        <AppBar className={classes.mainheader} color="default" position="static">
          <Toolbar>
            <div onClick={() => $router.push('/')} className={classes.title}>
              <img src="/static/logo.svg" width="165"/>
            </div>
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit" aria-label="menu">
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
