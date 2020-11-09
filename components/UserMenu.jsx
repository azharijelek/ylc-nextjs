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

const red = '#ED1B33'

const useStyles = makeStyles(() => ({
  paper: {
    height: 'calc(100% - 57px)',
    maxHeight: 'none',
    overflow: 'visible'
  },
  wrapper: {
    position: 'relative',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
    top: false,
    left: false,
    bottom: false,
    right: false
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
    },
    {
      name: 'Sign Out',
      slug: '/members/' + props.user_display_name + '/profile/',
      icon: <ExitToAppOutlinedIcon />
    }
  ]

  return (
    <>
      <ButtonBase aria-haspopup="true" onClick={toggleDrawer('bottom', true)}>
        <Avatar alt={props.user.full_name} src={props.user.avatar} className="ylc-avatar" />
      </ButtonBase>
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
        ModalProps={{
          keepMounted: true
        }}
        swipeAreaWidth={56}
        BackdropProps={{
          invisible: true
        }}
        classes={{
          paper: classes.paper
        }}>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            {/* User info */}
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt={props.user.full_name} src={props.user.avatar} />
              </ListItemAvatar>
              <ListItemText primary={'Hi, ' + props.user.full_name} />
            </ListItem>

            {/* Menu */}
            <List disablePadding component="nav" aria-label="User Menu">
              {/* Item */}
              {UserMenuList.map((menu) => (
                <ListItem button key={menu.name}>
                  <ListItemIcon style={{ color: '#fff' }}>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItem>
              ))}
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
      `}</style>
    </>
  )
}
