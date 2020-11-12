/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'

//import { useRouter } from 'next/router'
import Link from 'next/link'
import useUser from '@/lib/useUser'
import UserMenu from '@/components/UserMenu'
import Menu from '@/lib/Menu'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4)
  },
  collapse: {
    background: '#a91425'
  }
}))

const red = '#ED1B33'

export default function NavBar(props) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const menu = JSON.parse(Menu())

  /**
   * Open Drawer
   */
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  /**
   * Close Drawer
   */
  const handleDrawerClose = () => {
    setOpen(false)
  }

  /**
   * Home Logo
   */
  const HomeLogo = () => {
    return (
      <>
        <h1 className="logoH1">
          <Link href="/">
            <a title="Your Life Choices" className="logo-link">
              <img src="/static/logo.svg" width="165" height="22" alt="Your Life Choices" />
            </a>
          </Link>
        </h1>

        <style jsx>{`
          .logoH1 a {
            display: block;
            line-height: 0;
          }
        `}</style>
      </>
    )
  }

  /**
   * Inner Page Logo
   */
  const InnerPageLogo = () => {
    return (
      <>
        <Link href="/">
          <a title="Your Life Choices" className="logo-link">
            <img src="/static/logo.svg" width="165" alt="Your Life Choices" />
          </a>
        </Link>
        <style jsx>{`
          a {
            display: block;
            line-height: 0;
          }
        `}</style>
      </>
    )
  }

  /**
   * Toggle nested menu
   */
  const handleMenuClick = (slug) => {
    setOpenMenu(slug)
  }

  const { user } = useUser()

  return (
    <>
      <AppBar className="mainheader" color="default" position="fixed">
        <Toolbar>
          {user && user.isLoggedIn === true && <UserMenu user={user} />}

          <div className="title">{props.path == '/' ? <HomeLogo /> : <InnerPageLogo />}</div>

          <IconButton className="btn-search" color="inherit" aria-label="search" disableFocusRipple>
            <SearchIcon />
          </IconButton>
          <IconButton
            className="btn-menu"
            onClick={handleDrawerOpen}
            edge="end"
            color="inherit"
            disableFocusRipple
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
        <List component="nav">
          {menu.map(({ slug, label, sub_menu }, i) => {
            const is_open = openMenu == slug ? true : false
            return (
              <div key={'parent-menu-' + i}>
                <ListItem button>
                  <Link href={slug} passHref>
                    <ListItemText primary={label} onClick={handleDrawerClose} />
                  </Link>
                  {sub_menu != null && (
                    <>
                      {is_open ? (
                        <ExpandLess
                          onClick={() => {
                            handleMenuClick(null)
                          }}
                        />
                      ) : (
                        <ExpandMore
                          onClick={() => {
                            handleMenuClick(slug)
                          }}
                        />
                      )}
                    </>
                  )}
                </ListItem>

                <Divider key={'menu-devider-' + i} />

                {sub_menu != null && typeof sub_menu != 'undefined' && (
                  <Collapse
                    in={is_open}
                    timeout="auto"
                    key={'collapse-menu-' + i}
                    className={classes.collapse}>
                    <List component="nav" disablePadding>
                      {sub_menu.map((item, z) => (
                        <ListItem
                          className={classes.nested}
                          href={item.slug}
                          button
                          key={'child-menu-item-' + z}>
                          <Link href={item.slug} passHref>
                            <ListItemText primary={item.label} onClick={handleDrawerClose} />
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            )
          })}
        </List>
      </Drawer>

      <style jsx global>{`
        .mainheader {
          border-bottom: 1px solid #ed1b33;
          background-color: #fff !important;
          box-shadow: none !important;
          .ylc-avatar {
            margin-right: 10px;
            width: 40px;
            height: 40px;
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
          .MuiDrawer-paperAnchorBottom {
            height: calc(100% - 56px) !important;
          }
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
          z-index: 999;
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
