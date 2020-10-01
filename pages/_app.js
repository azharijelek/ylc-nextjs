import React from 'react';
import dynamic from 'next/dynamic'
import { makeStyles, fade } from '@material-ui/core/styles';
import Head from 'next/head'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import $router from 'next/router'
import Link from 'next/link'
import '../styles/globals.css'

// Dynamic imports:
const AppBar = dynamic( 
  () => import('@material-ui/core/AppBar'), 
  {ssr: false}  
)
const Drawer = dynamic( 
  () => import('@material-ui/core/Drawer'), 
  {ssr: true}  
)

const drawerWidth = '90%'
const red = '#ED1B33'
const orange = '#ffc107'
const drawerHeadHeight = 56

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: red+'!important',
    //paddingTop: drawerHeadHeight,
    color: '#fff!important',
  },
  drawerHead: {
    height: drawerHeadHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    position: 'sticky',
    borderBottom: '1px solid rgba(0,0,0,.08)',
    background: '#d8192f',
    minHeight: '57px',
    top: 0,
    left: 0,
    right: 0
  },
  signUpButton: {
    display: 'block',
    height: 35,
    lineHeight: '35px',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    color: '#fff!important',
    background: orange,
    width: '100%',
    borderRadius: 4,
    fontWeight: 'bold'
  },
  sideMenu: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  sideMenuItem: {
    display:'block',
    padding: 15,
    fontWeight: 'bold',
  }
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Menu = [
    {
      name: 'Home',
      slug: '/',
    },
    {
      name: 'News',
      slug: '/blog',
    },
    {
      name: 'Finance',
      slug: '/',
    },
    {
      name: 'Retirement',
      slug: '/',
    },
    {
      name: 'Travel',
      slug: '/',
    },
    {
      name: 'Age Pension',
      slug: '/',
    },
    {
      name: 'Centrelink',
      slug: '/',
    },
    {
      name: 'Health',
      slug: '/',
    },
    {
      name: 'Life',
      slug: '/',
    },
    {
      name: 'Fun & Games',
      slug: '/',
    },
    {
      name: 'Insight',
      slug: '/',
    },
    {
      name: 'Forum',
      slug: '/',
    },
  ]
  
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
                <a>
                  <img src='/static/logo.svg' width="165" alt=""/>
                </a>
              </Link>
            </div>
            <IconButton onClick={() => $router.push('/about')} color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton onClick={handleDrawerOpen} edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={open}
          variant="temporary"
          onEscapeKeyDown={handleDrawerClose}
          onBackdropClick={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHead}>
            <Link href="/member/sign-up/"><a href="/member/sign-up/" className={classes.signUpButton}>Sign Up</a></Link>
            <div>
              <IconButton onClick={handleDrawerClose} edge="end" color="inherit" aria-label="menu">
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <ul className={classes.sideMenu}>
            { Menu.map((item) => (
              <li key={item.name} onClick={handleDrawerClose}><Link href={item.slug}><a href={item.slug} className={classes.sideMenuItem}>{item.name}</a></Link></li>
            )) }
          </ul>
        </Drawer>
      </div>
      <Component {...pageProps} />
    </>
  )
}

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

export default MyApp
