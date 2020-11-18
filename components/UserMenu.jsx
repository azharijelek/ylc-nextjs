import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import ButtonBase from '@material-ui/core/ButtonBase'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
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
 * PostList
 * @param {*} props id, title, thumbnail, permalink
 */
export default function PostList(props) {
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
      slug: '/members/' + props.user_display_name + '/notifications/',
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
      slug: '/members/' + props.user_display_name + '/profile/',
      icon: <PersonOutlineOutlinedIcon />
    }
    // {
    //   name: 'Sign Out',
    //   slug: '/members/' + props.user_display_name + '/profile/',
    //   icon: <ExitToAppOutlinedIcon />
    // }
  ]

  // User
  const { mutateUser } = useUser()

  return (
    <>
      {/* AVATAR with TRIGGER */}
      <ButtonBase {...props} aria-haspopup="true" onClick={toggleDrawer('bottom', true)}>
        <Avatar alt={props.user.full_name} src={props.user.avatar} className="ylc-avatar" />
      </ButtonBase>

      {/* MENU DRAWER */}
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
        swipeAreaWidth={56}
        disableDiscovery={false}
        ModalProps={{
          keepMounted: true
        }}
        BackdropProps={{
          invisible: false
        }}
        classes={{
          paper: classes.paper
        }}>
        <div className="swiper"></div>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <List disablePadding component="nav" aria-label="User Menu">
              {/* User info */}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt={props.user.full_name} src={props.user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    'Hi, ' +
                    (props.user.full_name != '' ? props.user.full_name : props.user.display_name)
                  }
                />
              </ListItem>

              {/* Item */}
              {UserMenuList.map((menu) => (
                <ListItem button key={menu.name}>
                  <ListItemIcon style={{ color: '#fff' }}>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItem>
              ))}

              <ListItem
                button
                onClick={async (e) => {
                  e.preventDefault()
                  toggleDrawer('bottom', true)
                  await mutateUser(fetchJson('/api/logout')).then(() => {
                    $router.push('/member/login/')
                  })
                }}>
                <ListItemIcon style={{ color: '#fff' }}>
                  <ExitToAppOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </List>
          </div>
        </div>
      </SwipeableDrawer>

      <style jsx global>{`
        .userMenuPaper {
          width: 100%;
          background: ${red}!important;
          color: #fff !important;
          overflow-x: hidden;
        }
        .swiper {
          width: 50px;
          height: 5px;
          border-radius: 90px;
          background: rgba(255, 255, 255, 0.3);
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          margin: 0 auto;
          z-index: 999;
        }
      `}</style>
    </>
  )
}
