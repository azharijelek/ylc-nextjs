/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
//import { useRouter } from 'next/router'
import Link from 'next/link'
import useUser from '@/lib/useUser'
import UserMenu from '@/components/UserMenu'

const red = '#ED1B33'

export default function NavBar() {
  //const router = useRouter()

  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const Menu = [
    {
      name: 'Home',
      slug: '/'
    },
    {
      name: 'Finance',
      slug: '/finance'
    },
    {
      name: 'Retirement',
      slug: '/retirement'
    },
    {
      name: 'Travel',
      slug: '/travel'
    },
    {
      name: 'Health',
      slug: '/health'
    },
    {
      name: 'Centrelink',
      slug: '/government/centrelink/'
    },
    {
      name: 'Age Pension',
      slug: '/age-pension'
    },
    {
      name: 'Life',
      slug: '/lifestyle'
    },
    {
      name: 'Fun & Games',
      slug: '/fun/games'
    },
    {
      name: 'Forum',
      slug: '/'
    }
  ]

  const HomeLogo = () => {
    return (
      <>
        <h1 className="logoH1">
          <Link href="/">
            <a title="Your Life Choices">
              <img src="/static/logo.svg" width="165" height="22" alt="Your Life Choices" />
            </a>
          </Link>
        </h1>

        <style jsx>{`
          .logoH1 a {
            display: block;
            line-height: 1;
          }
        `}</style>
      </>
    )
  }

  // const InnerPageLogo = () => {
  //   return (
  //     <Link href="/">
  //       <a title="Your Life Choices">
  //         <img src="/static/logo.svg" width="165" alt="Your Life Choices" />
  //       </a>
  //     </Link>
  //   )
  // }

  const { user } = useUser()

  return (
    <>
      <AppBar className="mainheader" color="default" position="fixed">
        <Toolbar>
          {user && user.isLoggedIn === true && <UserMenu user={user} />}

          {/* <div className="title">{router.pathname == '/' ? <HomeLogo /> : <InnerPageLogo />}</div> */}
          <div className="title">
            <HomeLogo />
          </div>
          <IconButton className="btn-search" color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton
            className="btn-menu"
            onClick={handleDrawerOpen}
            edge="end"
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <div><pre>{JSON.stringify($router, null, 2)}</pre></div> */}

      <Drawer
        className="ylc-drawer"
        anchor="bottom"
        open={open}
        variant="temporary"
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        classes={{
          paper: 'drawerPaper'
        }}>
        <div className="drawerHead">
          {/* LOGIN BUTTON */}
          {!user ||
            (user.isLoggedIn === false && (
              <Link href="/member/login/">
                <a href="/member/login/" onClick={handleDrawerClose} className="signUpButton">
                  Sign In
                </a>
              </Link>
            ))}

          {/* Close Button */}
          <div>
            <IconButton
              onClick={handleDrawerClose}
              onKeyUp={handleDrawerClose}
              edge="end"
              color="inherit"
              className="btn-closedrawer"
              aria-label="menu">
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        {/* Drawer Menu */}
        <ul className="sideMenu">
          {Menu.map((item) => (
            <li key={item.name} onClick={handleDrawerClose} onKeyUp={handleDrawerClose}>
              <Link href={item.slug}>
                <a href={item.slug} className="sideMenuItem">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>

      <style jsx global>{`
        .mainheader {
          border-bottom: 1px solid #ed1b33;
          background-color: #fff !important;
          box-shadow: none !important;
          .ylc-avatar {
            margin-right: 10px;
            width: 30px;
            height: 30px;
          }
        }
        .title {
          flex-grow: 1;
        }
        .logoH1 {
          margin: 0;
        }
        .ylc-drawer {
          width: 100% !important;
          flex-shrink: 0;
          height: 100%;
        }
        .drawerPaper {
          width: 100%;
          background: ${red}!important;
          color: #fff !important;
          height: 100%;
          height: calc(100% - 56px);
          overflow-x: hidden;
        }
        .drawerHead {
          height: 56;
          display: flex;
          align-items: center;
          justify-content: ${!user || user.isLoggedIn === false ? 'space-between' : 'flex-end'};
          justify-items: center;
          padding-left: 15px;
          padding-right: 15px;
          position: sticky;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          background: #d8192f;
          min-height: 57px;
          top: 0;
          left: 0;
          right: 0;
        }
        .signUpButton {
          display: block;
          height: 35px;
          line-height: 35px;
          text-align: center;
          padding-right: 10px;
          padding-left: 10px;
          color: #fff !important;
          background: orange;
          width: 100%;
          border-radius: 4px;
          font-weight: bold;
        }
        .sideMenu {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .sideMenuItem {
          display: block;
          padding: 15px;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}
