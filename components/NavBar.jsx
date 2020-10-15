import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import $router from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useUser from '@/lib/useUser'
import Avatar from '@material-ui/core/Avatar'
import fetchJson from '@/lib/fetchJson'

const drawerWidth = '90%'
const red = '#ED1B33'
const drawerHeadHeight = 56

export default function NavBar() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false)

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
      name: 'News',
      slug: '/blog'
    },
    {
      name: 'Finance',
      slug: '/'
    },
    {
      name: 'Retirement',
      slug: '/'
    },
    {
      name: 'Travel',
      slug: '/'
    },
    {
      name: 'Age Pension',
      slug: '/'
    },
    {
      name: 'Centrelink',
      slug: '/'
    },
    {
      name: 'Health',
      slug: '/'
    },
    {
      name: 'Life',
      slug: '/'
    },
    {
      name: 'Fun & Games',
      slug: '/'
    },
    {
      name: 'Insight',
      slug: '/'
    },
    {
      name: 'Forum',
      slug: '/'
    }
  ]

  const HomeLogo = () => {
    return (
      <h1 className="logoH1">
        <Link href="/">
          <a title="Your Life Choices">
            <img src="/static/logo.svg" width="165" alt="Your Life Choices" />
          </a>
        </Link>
      </h1>
    )
  }

  const InnerPageLogo = () => {
    return (
      <Link href="/">
        <a title="Your Life Choices">
          <img src="/static/logo.svg" width="165" alt="Your Life Choices" />
        </a>
      </Link>
    )
  }

  const { user, mutateUser } = useUser()

  return (
    <>
      <AppBar className="mainheader" color="default" position="fixed">
        <Toolbar>
          {user && user.isLoggedIn === true && (
            <Avatar alt={user.full_name} src={user.avatar} className="ylc-avatar" />
          )}

          <div className="title">{router.pathname == '/' ? <HomeLogo /> : <InnerPageLogo />}</div>
          <IconButton onClick={() => $router.push('/about')} color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton onClick={handleDrawerOpen} edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <div><pre>{JSON.stringify($router, null, 2)}</pre></div> */}

      <Drawer
        className="drawer"
        anchor="right"
        open={open}
        variant="temporary"
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        classes={{
          paper: 'drawerPaper'
        }}>
        <div className="drawerHead">
          {/* LOGIN BUTTON */}
          {!user || user.isLoggedIn === false ? (
            <Link href="/member/login/">
              <a href="/member/login/" onClick={handleDrawerClose} className="signUpButton">
                Sign In
              </a>
            </Link>
          ) : (
            <a
              href="/api/logout"
              className="signUpButton"
              onClick={async (e) => {
                e.preventDefault()
                handleDrawerClose()
                await mutateUser(fetchJson('/api/logout'))
                $router.push('/member/login')
              }}>
              Logout
            </a>
          )}

          {/* Close Button */}
          <div>
            <IconButton
              onClick={handleDrawerClose}
              onKeyUp={handleDrawerClose}
              edge="end"
              color="inherit"
              aria-label="menu">
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        {/* Drawer Menu */}
        <ul className="sideMenu">
          {Menu.map((item) => (
            <li key={item.name}>
              <Link href={item.slug} onClick={handleDrawerClose} onKeyUp={handleDrawerClose}>
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
        .drawer {
          width: ${drawerWidth};
          flex-shrink: 0;
        }
        .drawerPaper {
          width: ${drawerWidth};
          background: ${red}!important;
          color: #fff !important;
          overflow-x: hidden;
        }
        .drawerHead {
          height: ${drawerHeadHeight};
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
