import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import useUser from '@/lib/useUser'

// Navigation
import Link from 'next/link'
import UserMenu from '@/components/UserMenu'
import Menu from '@/lib/Menu'
import { useRouter } from 'next/router'

// Styling
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
  }
}))

/**
 * Main Component: NavBar
 * @param {Object} props
 */
function NavBar(props) {
  const classes = useStyles()
  const router = useRouter()
  const menu = JSON.parse(Menu())
  const { user } = useUser()
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)

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
   * Toggle nested menu
   */
  const handleMenuClick = (slug) => {
    setOpenMenu(slug)
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
   * NavLink Component
   * @param {Object} props
   */
  const NavLink = (props) => {
    return (
      <>
        <Link href={props.href} passHref>
          <a {...props}>{props.children}</a>
        </Link>
        <style jsx>{`
          .listlink {
            min-width: 90%;
            padding: 15px;
            display: block;
            line-height: 1;
          }
          .childLink {
            font-size: 14px !important;
            color: #fff;
            padding: 0 0 0 20px;
            display: block;
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <AppBar className={classes.mainheader} color="default" position="fixed">
        <Toolbar>
          {user && user.isLoggedIn === true && <UserMenu className={classes.avatar} user={user} />}

          <div
            className="title"
            onKeyDown={handleDrawerClose}
            onClick={handleDrawerClose}
            role="button"
            tabIndex={0}>
            {props.path == '/' ? <HomeLogo /> : <InnerPageLogo />}
          </div>

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
        <ul className="menu-list-wrapper">
          {menu.map(({ slug, label, sub_menu }, i) => {
            let parentLink = slug
            let currentRoute = router.asPath
            const is_open = openMenu == slug ? true : false
            return (
              <React.Fragment key={'parent-menu-' + i}>
                <li
                  current-link={currentRoute}
                  parent-link={slug}
                  className={
                    'parentList' +
                    (currentRoute === parentLink || currentRoute.indexOf(parentLink) == 0
                      ? ' current'
                      : '')
                  }>
                  <NavLink
                    href={parentLink}
                    onClick={handleDrawerClose}
                    className="listlink"
                    dangerouslySetInnerHTML={{ __html: label }}></NavLink>
                  {/* SUB MENU TOGGLER */}
                  {sub_menu != null && (
                    <div className="toggleChild">
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
                    </div>
                  )}

                  {/* SUB MENU LIST */}
                  {sub_menu != null && typeof sub_menu != 'undefined' && (
                    <ul
                      key={'collapse-menu-' + i}
                      className={'collapse ' + (is_open ? 'show' : 'hidden')}>
                      {sub_menu.map((item, z) => {
                        let childLink = item.slug
                        return (
                          <li
                            key={'child-menu-item-' + z}
                            className={
                              currentRoute === childLink || currentRoute === item.slug
                                ? 'current'
                                : ''
                            }>
                            <NavLink
                              href={childLink}
                              onClick={handleDrawerClose}
                              className="childLink"
                              dangerouslySetInnerHTML={{ __html: item.label }}></NavLink>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              </React.Fragment>
            )
          })}
        </ul>
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
        .menu-list-wrapper {
          padding: 0;
          margin: 0;
        }
        .parentList {
          flex-wrap: wrap;
          padding: 0;
          color: '#fff';
          display: flex;
          border-bottom: 1px solid #da192f;
          align-items: center;
          letter-spacing: 0.5px;

          &:hover {
            background-color: rgba(0, 0, 0, 0.07);
          }
          &.current {
            background-color: #ed8f1b;
            border-color: #a91425;
          }
        }
        .collapse {
          background: #a91425;
          margin: 0 !important;
          min-width: 100%;
          width: 100%;
          max-width: '100%';
          list-style: none;
          padding: 0;
          &.show {
            li {
              height: 40px;
              opacity: 1;
              visibility: visible;
            }
          }
          li {
            height: 0;
            line-height: 40px;
            transition: all 0.3s ease;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;

            &.current {
              background: #8e101f;
            }
          }
        }
        .toggleChild {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default NavBar
