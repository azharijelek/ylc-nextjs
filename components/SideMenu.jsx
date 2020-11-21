import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Link from 'next/link'
import Menu from '@/lib/Menu'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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

function SideMenu(props) {
  const user = props.user
  const [openMenu, setOpenMenu] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const menu = JSON.parse(Menu())
  const classes = useStyles()

  /**
   * Toggle nested menu
   */
  const handleMenuClick = (slug) => {
    setOpenMenu(slug)
  }

  /**
   * Close Drawer
   */
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
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
    </>
  )
}
export default SideMenu
