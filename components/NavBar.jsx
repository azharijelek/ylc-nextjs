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

//import { useRouter } from 'next/router'
import Link from 'next/link'
import UserMenu from '@/components/UserMenu'
import Menu from '@/lib/Menu'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  mainheader: {
    borderBottom: '1px solid #ed1b33',
    backgroundColor: '#fff !important',
    boxShadow: 'none !important',
    zIndex: 99,
    maxHeight: 56
  },
  avatar: {
    marginRight: 10,
    width: 40,
    height: 40
  },
  ylcdrawer: {
    width: '100% !important',
    flexShrink: 0,
    height: '100%',
    zIndex: 1
  },
  drawerPaper: {
    height: 'calc(100% - 56px) !important',
    top: 56,
    zIndex: 1,
    background: theme.palette.primary.main,
    color: '#fff'
  },
  parentList: {
    flexWrap: 'wrap',
    padding: 0,
    color: '#fff'
  },
  listlink: {
    minWidth: '90%',
    padding: 10
  },
  collapse: {
    background: '#a91425',
    margin: '0!important',
    minWidth: '100%',
    width: '100%',
    maxWidth: '100%'
  },
  childLink: {
    fontSize: '14px!important',
    color: '#fff',
    paddingTop: 5,
    paddingBottom: 5
  }
}))

export default function NavBar(props) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const menu = JSON.parse(Menu())
  const user = props.user

  /**
   * Close Drawer
   */
  const handleDrawerClose = () => {
    setOpen(false)
    setOpenMenu(null)
  }

  /**
   * Toggle Drawer
   */
  const toggleDrawer = () => {
    const previous = open
    setOpen(!previous)
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

  return (
    <>
      <AppBar className={classes.mainheader} color="default" position="fixed">
        <Toolbar>
          {user && user.isLoggedIn === true && <UserMenu className={classes.avatar} user={user} />}

          <div className="title">{props.path == '/' ? <HomeLogo /> : <InnerPageLogo />}</div>

          <IconButton className="btn-search" color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton
            className="btn-menu"
            onClick={toggleDrawer}
            edge="end"
            color="inherit"
            aria-label="menu">
            {open == true ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <div><pre>{JSON.stringify($router, null, 2)}</pre></div> */}

      <Drawer
        className={classes.ylcdrawer}
        anchor="top"
        open={open}
        variant="temporary"
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        transitionDuration={150}
        hideBackdrop={true}
        ModalProps={{
          keepMounted: true
        }}
        style={{
          top: 56,
          zIndex: 1
        }}
        classes={{
          paper: classes.drawerPaper
        }}>
        {/* LOGIN BUTTON */}
        {typeof user != 'undefined' && user.isLoggedIn === false && (
          <div className="drawerHead">
            {/* LOGIN BUTTON */}
            <Link href="/member/login/" prefetch>
              <a href="/member/login/" onClick={handleDrawerClose} className="signUpButton">
                Sign In
              </a>
            </Link>
          </div>
        )}

        {/* Drawer Menu */}
        <List component="ul">
          {menu.map(({ slug, label, sub_menu }, i) => {
            const is_open = openMenu == slug ? true : false
            return (
              <React.Fragment key={'parent-menu-' + i}>
                <ListItem
                  divider
                  className={classes.parentList}
                  style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <Link href={process.env.APPHOST + slug} passHref>
                    <a className={classes.listlink}>
                      <ListItemText primary={label} onClick={handleDrawerClose} />
                    </a>
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

                  {/* SUB MENU */}
                  {sub_menu != null && typeof sub_menu != 'undefined' && (
                    <Collapse
                      in={is_open}
                      timeout="auto"
                      key={'collapse-menu-' + i}
                      className={classes.collapse}>
                      <List component="ul" disablePadding>
                        {sub_menu.map((item, z) => (
                          <ListItem
                            divider
                            button
                            component="li"
                            onClick={handleDrawerClose}
                            key={'child-menu-item-' + z}>
                            <Link href={process.env.APPHOST + item.slug} passHref>
                              <a
                                className={classes.childLink}
                                dangerouslySetInnerHTML={{ __html: item.label }}></a>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </ListItem>
              </React.Fragment>
            )
          })}
        </List>
      </Drawer>

      <style jsx>{`
        .title {
          flex-grow: 1;
        }
        .logoH1 {
          margin: 0;
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
