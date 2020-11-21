import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import useUser from '@/lib/useUser'
import fetchJson from '@/lib/fetchJson'
import $router from 'next/router'

const red = '#ED1B33'

const useStyles = makeStyles(() => ({
  paper: {
    height: 'calc(100% - 57px)',
    maxHeight: 'none',
    overflow: 'visible',
    backgroundColor: 'transparent!important'
  },
  wrapper: {
    position: 'relative',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    visibility: 'visible !important',
    background: red + '!important',
    color: '#fff',
    height: '100%'
  },
  container: {
    overflowY: 'auto',
    height: '98%',
    paddingTop: 20
  }
}))

/**
 * UserMenu
 * @param {*} props id, title, thumbnail, permalink
 */
export default function UserMenu(props) {
  const classes = useStyles(props)
  const [state, setState] = useState({
    bottom: false
  })

  const toggleDrawer = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  // Menu List
  const UserMenuList = [
    {
      name: 'Notification',
      slug: '/members/' + props.user.user_nicename + '/notifications/',
      icon: <NotificationsNoneOutlinedIcon />
    },
    {
      name: 'My Feed',
      slug: '/news-feed/',
      icon: <RssFeedOutlinedIcon />
    },
    {
      name: 'Home Page',
      slug: '/homepage/',
      icon: <HomeOutlinedIcon />
    },
    {
      name: 'My Profile',
      slug: '/members/' + props.user.user_nicename + '/profile/',
      icon: <PersonOutlineOutlinedIcon />
    }
  ]

  // User
  const { mutateUser } = useUser()

  return (
    <>
      {/* AVATAR with TRIGGER */}
      <button
        {...props}
        aria-haspopup="true"
        className="avatarButton"
        onClick={toggleDrawer('bottom', true)}>
        <div className="avatarBall ylc-avatar">
          <img src={props.user.avatar} alt={'user-id-' + props.user.id} />
        </div>
      </button>

      {/* MENU DRAWER */}
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
        disableDiscovery
        disableSwipeToOpen
        disableBackdropTransition
        BackdropProps={{
          invisible: false
        }}
        classes={{
          paper: classes.paper
        }}>
        <div className="swiper"></div>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <ul className="user-menu-wrapper" aria-label="User Menu">
              {/* User info */}
              <li style={{ padding: 15 }}>
                <div className="userMenuAvatar">
                  <div className="avatarBall">
                    <img src={props.user.avatar} alt={'user-id-' + props.user.id} />
                  </div>
                </div>
                Hi, {props.user.full_name != '' ? props.user.full_name : props.user.user_nicename}
              </li>

              {/* Item */}
              {UserMenuList.map((menu) => (
                <li key={menu.name}>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setState({ ...state, ['bottom']: false })
                      $router.push(menu.slug)
                    }}>
                    <div className="menu-icon">{menu.icon}</div>
                    {menu.name}
                  </button>
                </li>
              ))}

              <li>
                <button
                  onClick={async (e) => {
                    e.preventDefault()
                    toggleDrawer('bottom', false)
                    await mutateUser(fetchJson('/api/logout')).then(() => {
                      $router.push('/member/login/')
                    })
                  }}>
                  <div className="menu-icon">
                    <ExitToAppOutlinedIcon />
                  </div>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </SwipeableDrawer>

      <style jsx>{`
        .userMenuPaper {
          width: 100%;
          background: ${red}!important;
          color: #fff !important;
          overflow-x: hidden;
        }
        .avatarButton {
          background: transparent;
          border: 0;
          padding: 0;
          color: #fff;
          text-align: left;
          font-size: inherit;
          margin-right: 15px;
          outline: none;
        }
        .ylc-avatar {
          width: 40px;
          height: 40px;
          border-radius: 90px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover !important;
          }
        }
        .swiper {
          width: 50px;
          height: 5px;
          border-radius: 90px;
          background: rgba(255, 255, 255, 0.5);
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          margin: 0 auto;
          z-index: 999;
        }
        .user-menu-wrapper {
          padding: 0;
          margin: 0;
          li,
          button {
            display: flex;
            width: 100%;
            align-items: center;

            .menu-icon,
            .userMenuAvatar {
              width: 56px;
              min-width: 56px;
              max-width: 56px;
            }

            .avatarBall {
              @extend .ylc-avatar;
            }
          }
          button {
            padding: 15px;
            @extend .avatarButton;
          }
        }
      `}</style>
    </>
  )
}
