import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
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
import { useRouter } from 'next/router'

// Styling
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
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

const Menu = [
  {
    label: 'News',
    slug: '/news',
    type: 'category'
  },
  {
    label: 'Finance',
    slug: '/finance',
    type: 'category',
    sub_menu: [
      {
        label: 'News',
        slug: '/finance/news-finance',
        type: 'category'
      },
      {
        label: 'Banking & Investment',
        slug: '/finance/banking-and-investment',
        type: 'category'
      },
      {
        label: 'Property',
        slug: '/finance/property',
        type: 'category'
      },
      {
        label: 'Insurance',
        slug: '/finance/insurance',
        type: 'category'
      },
      {
        label: 'Money Q&A',
        slug: '/finance/money-qa',
        type: 'category'
      },
      {
        label: 'Legal & General',
        slug: '/finance/legal-and-general',
        type: 'category'
      },
      {
        label: 'Estate planning & wills',
        slug: '/finance/estate-planning-wills',
        type: 'category'
      },
      {
        label: 'Seniors savings & discounts',
        slug: '/finance/seniors-savings-discounts',
        type: 'category'
      },
      {
        label: 'Superannuation',
        slug: '/finance/superannuation/news-superannuation',
        type: 'category'
      }
    ]
  },
  {
    label: 'Retirement',
    slug: '/retirement',
    type: 'category',
    sub_menu: [
      {
        label: 'News',
        slug: '/retirement/news-retirement',
        type: 'category'
      },
      {
        label: 'Retirement Planning',
        slug: '/retirement/retirement-planning',
        type: 'category'
      },
      {
        label: 'Retirement Income',
        slug: '/retirement/retirement-income',
        type: 'category'
      },
      {
        label: 'Retirement Affordability Index',
        slug: '/retirement/retirement-affordability-index',
        type: 'category'
      },
      {
        label: 'Living In Retirement',
        slug: '/retirement/living-in-retirement',
        type: 'category'
      },
      {
        label: 'Retirement Village Living',
        slug: '/retirement/retirement-village-living',
        type: 'category'
      },
      {
        label: 'Aged Care',
        slug: '/retirement/aged-care',
        type: 'category'
      }
    ]
  },
  {
    label: 'Travel',
    slug: '/travel',
    type: 'category',
    sub_menu: [
      {
        label: 'News',
        slug: '/travel/news-travel',
        type: 'category'
      },
      {
        label: 'Destinations',
        slug: '/travel/destinations',
        type: 'category'
      },
      {
        label: 'Travel Deals',
        slug: '/travel/travel-deals',
        type: 'category'
      },
      {
        label: 'Accommodation',
        slug: '/travel/accommodation-travel',
        type: 'category'
      },
      {
        label: 'Flying',
        slug: '/travel/flying',
        type: 'category'
      },
      {
        label: 'Cruising',
        slug: '/travel/cruising',
        type: 'category'
      },
      {
        label: 'Tours And Holidays',
        slug: '/travel/tours-and-trips',
        type: 'category'
      },
      {
        label: 'Solo Travel',
        slug: '/travel/solo-travel',
        type: 'category'
      },
      {
        label: 'Driving Holidays',
        slug: '/travel/self-drive-holidays',
        type: 'category'
      },
      {
        label: 'Budget Travel',
        slug: '/travel/travelling-on-a-budget',
        type: 'category'
      }
    ]
  },
  {
    label: 'Age Pension',
    slug: '/age-pension',
    type: 'category',
    sub_menu: [
      {
        label: 'News',
        slug: '/age-pension/news-age-pension',
        type: 'category'
      },
      {
        label: 'Age Pension essentials',
        slug: '/age-pension/age-pension-essentials',
        type: 'category'
      },
      {
        label: 'Age Pension eligibility',
        slug: '/age-pension/pension-eligibility',
        type: 'category'
      },
      {
        label: 'Income and asset tests',
        slug: '/age-pension/income-and-asset-tests',
        type: 'category'
      },
      {
        label: 'Deeming rates',
        slug: '/age-pension/deeming-rates-for-age-pension',
        type: 'category'
      },
      {
        label: 'Payment rates',
        slug: '/age-pension/pension-payment-rates',
        type: 'category'
      },
      {
        label: 'Work Bonus',
        slug: '/age-pension/work-bonus-age-pension',
        type: 'category'
      }
    ]
  },
  {
    label: 'Centrelink',
    slug: '/centrelink',
    type: 'category',
    sub_menu: [
      {
        label: 'News',
        slug: '/centrelink/centrelink-news',
        type: 'category'
      },
      {
        label: 'Seniors Card & Concessions',
        slug: '/centrelink/seniors-card',
        type: 'category'
      }
    ]
  },
  {
    label: 'Health',
    slug: '/health',
    type: 'category',
    sub_menu: [
      {
        label: 'News',
        slug: '/health/news-health',
        type: 'category'
      },
      {
        label: 'COVID-19',
        slug: '/health/covid19',
        type: 'category'
      },
      {
        label: 'Health essentials',
        slug: '/health/health-essentials',
        type: 'category'
      },
      {
        label: 'Wellbeing',
        slug: '/health/wellbeing',
        type: 'category'
      },
      {
        label: 'Brain health',
        slug: '/health/brain-health',
        type: 'category'
      },
      {
        label: 'Mental health',
        slug: '/health/mental-health',
        type: 'category'
      },
      {
        label: 'Sex & Relationships',
        slug: '/health/relationships',
        type: 'category'
      },
      {
        label: 'Hearing',
        slug: '/health/hearing',
        type: 'category'
      },
      {
        label: 'Grief & Loss',
        slug: '/health/grief-and-loss',
        type: 'category'
      },
      {
        label: 'Medicare',
        slug: '/health/medicare',
        type: 'category'
      }
    ]
  },
  {
    label: 'Life',
    slug: '/lifestyle',
    type: 'category',
    sub_menu: [
      {
        label: 'News',
        slug: '/lifestyle/news-lifestyle',
        type: 'category'
      },
      {
        label: 'Work',
        slug: '/lifestyle/work',
        type: 'category'
      },
      {
        label: 'Learning',
        slug: '/lifestyle/learning',
        type: 'category'
      },
      {
        label: 'Stylewatch',
        slug: '/lifestyle/stylewatch',
        type: 'category'
      },
      {
        label: 'Technology',
        slug: '/lifestyle/technology',
        type: 'category'
      },
      {
        label: 'Leisure',
        slug: '/lifestyle/leisure',
        type: 'category'
      },
      {
        label: 'Entertainment',
        slug: '/lifestyle/entertainment',
        type: 'category'
      },
      {
        label: 'Food & Recipes',
        slug: '/lifestyle/food-recipes',
        type: 'category'
      },
      {
        label: 'Volunteering',
        slug: '/lifestyle/volunteering',
        type: 'category'
      }
    ]
  },
  {
    label: 'Fun & Games',
    slug: '/fun/games',
    type: 'custom',
    sub_menu: [
      {
        label: 'Trivia',
        slug: '/fun/games/trivia',
        type: 'custom'
      },
      {
        label: 'Crossword',
        slug: '/fun/games/daily-crossword-puzzles',
        type: 'custom'
      },
      {
        label: 'Aussie Crosswords',
        slug: '/fun/games/aussie-crosswords',
        type: 'custom'
      },
      {
        label: 'Sudoku',
        slug: '/fun/games/sudoku',
        type: 'custom'
      },
      {
        label: 'Solitaire',
        slug: '/fun/games/solitaire',
        type: 'custom'
      },
      {
        label: 'Word Search',
        slug: '/fun/games/word-search',
        type: 'custom'
      },
      {
        label: 'Horoscopes',
        slug: '/fun/entertainment/free-daily-horoscopes',
        type: 'custom'
      },
      {
        label: 'Jokes',
        slug: '/fun/entertainment/jokes',
        type: 'custom'
      },
      {
        label: 'Photos & Videos',
        slug: '/fun/entertainment/photos',
        type: 'custom'
      },
      {
        label: 'Competitions',
        slug: '/fun/entertainment/competitions',
        type: 'custom'
      }
    ]
  },
  {
    label: 'Insights',
    slug: '/insights',
    type: 'category',
    sub_menu: [
      {
        label: 'Retirement Affordability Index',
        slug: '/insights/retirement-affordability-index',
        type: 'category'
      },
      {
        label: 'eGuides',
        slug: '/insights/eguides-insights',
        type: 'category'
      },
      {
        label: 'Podcast',
        slug: '/insights/podcasts',
        type: 'category'
      },
      {
        label: 'Videos',
        slug: '/insights/video',
        type: 'category'
      },
      {
        label: 'Press & Coverage',
        slug: '/insights/in-the-news',
        type: 'category'
      }
    ]
  },
  {
    label: 'Forum',
    slug: '/the_meeting_place',
    type: 'custom',
    sub_menu: [
      {
        label: 'General Discussion',
        slug: '/the_meeting_place/topic/general-discussion/',
        type: 'custom'
      },
      {
        label: 'Hot Topics',
        slug: '/the_meeting_place/topic/hot-topics/',
        type: 'custom'
      },
      {
        label: 'Centrelink & government',
        slug: '/the_meeting_place/topic/government-centrelink/',
        type: 'custom'
      },
      {
        label: 'Political',
        slug: '/the_meeting_place/topic/political/',
        type: 'custom'
      },
      {
        label: 'Recipes',
        slug: '/the_meeting_place/topic/food-recipes/',
        type: 'custom'
      },
      {
        label: 'Health & Wellbeing',
        slug: '/the_meeting_place/topic/health-wellbeing/',
        type: 'custom'
      },
      {
        label: "Traveller's Corner",
        slug: '/the_meeting_place/topic/travellers-corner/',
        type: 'custom'
      },
      {
        label: 'Dilemmas',
        slug: '/the_meeting_place/topic/dilemmas/',
        type: 'custom'
      }
    ]
  }
]

/**
 * Main Component: NavBar
 */
function NavBar() {
  const classes = useStyles()
  const router = useRouter()
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
  const NavLink = ({ nolink, href, children, className, onClick }) => {
    return (
      <>
        {nolink ? (
          <a href={href} className={className}>
            {children}
          </a>
        ) : (
          <Link href={href} passHref>
            <a href={href} onClick={onClick} className={className}>
              {children}
            </a>
          </Link>
        )}

        <style jsx>{`
          .listlink {
            width: 85%;
            width: calc(100% - 46px);
            padding: 15px;
            display: block;
            line-height: 1;
          }
          .childLink {
            font-size: 14px !important;
            color: #fff;
            padding: 15px;
            margin-left: 15px;
            line-height: 1;
            display: block;
            border-left: 1px dashed rgba(255, 255, 255, 0.3);
            position: relative;
            -webkit-tap-highlight-color: transparent;
            &:before {
              content: '';
              display: block;
              width: 5px;
              height: 5px;
              border-radius: 90px;
              background: #fff;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              margin: auto 0;
              transform: translateX(-50%) translateY(-1px);
            }
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <div className="mainheader">
        <div className="toolbar">
          {user && user.isLoggedIn === true && <UserMenu className={classes.avatar} user={user} />}

          <div
            className="title"
            onKeyDown={handleDrawerClose}
            onClick={handleDrawerClose}
            role="button"
            tabIndex={0}>
            {router.pathname == '/' ? <HomeLogo /> : <InnerPageLogo />}
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
        </div>
      </div>

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
              <a href="/member/login/" onClick={handleDrawerClose} className="signInButton">
                Sign In
              </a>
            </Link>
          </div>
        )}

        {/* Drawer Menu */}
        <ul className="menu-list-wrapper">
          {Menu.map(({ slug, label, sub_menu }, i) => {
            let parentLink = slug
            let currentRoute = router.asPath
            const is_open = openMenu == slug ? true : false
            return (
              <React.Fragment key={'parent-menu-' + i}>
                <li
                  className={
                    'parentList' +
                    (currentRoute === parentLink || currentRoute.indexOf(parentLink) == 0
                      ? ' current'
                      : '')
                  }>
                  <NavLink href={parentLink} onClick={handleDrawerClose} className="listlink">
                    <span dangerouslySetInnerHTML={{ __html: label }}></span>
                  </NavLink>

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
                              className="childLink">
                              <span dangerouslySetInnerHTML={{ __html: item.label }}></span>
                            </NavLink>
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

      {/* STYLES */}
      <style jsx>{`
        /* Main Header */
        .mainheader {
          position: fixed;
          top: 0;
          border-bottom: 1px solid #ed1b33;
          left: 0;
          right: 0;
          z-index: 99;
          background: #fff;
          .toolbar {
            height: 56px;
            max-height: 56px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: 15px;
            padding-right: 15px;
          }
        }

        /* Logo */
        .title {
          flex-grow: 1;
        }
        .logoH1 {
          margin: 0;
        }

        /* Login Button */
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
        .signInButton {
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

        /* Drawer List Menu */
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

        /* Parent Menu */
        .parentList {
          flex-wrap: wrap;
          padding: 0;
          color: #fff;
          display: flex;
          border-bottom: 1px solid #da192f;
          align-items: center;
          letter-spacing: 0.5px;

          &:hover,
          &:active {
            background-color: rgba(0, 0, 0, 0.07);
          }
          &.current {
            background-color: #ed8f1b;
            border-color: #a91426;
          }

          .toggleChild {
            cursor: pointer;
            height: 46px;
            width: 46px;
            line-height: 45px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Child Menu */
        .collapse {
          background: #a91425;
          margin: 0 !important;
          min-width: 100%;
          width: 100%;
          max-width: 100%;
          list-style: none;
          padding: 0;
          display: none;
          &.show {
            display: block;
          }
          li {
            transition: background 0.2s ease;
            &.current,
            &:hover,
            &:focus,
            &:active {
              background: #8e101f;
            }
          }
        }
      `}</style>
    </>
  )
}

export default NavBar
