export default function Menu() {
  const menu = [
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
  return JSON.stringify(menu)
}
