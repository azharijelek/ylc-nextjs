export default function Menu() {
  const menu = [
    {
      label: 'News',
      slug: 'news',
      type: 'category'
    },
    {
      label: 'Finance',
      slug: 'finance',
      type: 'category',
      sub_menu: [
        {
          label: 'News',
          slug: 'news-finance',
          type: 'category'
        },
        {
          label: 'Banking & Investment',
          slug: 'banking-and-investment',
          type: 'category'
        },
        {
          label: 'Property',
          slug: 'property',
          type: 'category'
        },
        {
          label: 'Insurance',
          slug: 'insurance',
          type: 'category'
        },
        {
          label: 'Money Q&A',
          slug: 'money-qa',
          type: 'category'
        },
        {
          label: 'Legal & General',
          slug: 'legal-and-general',
          type: 'category'
        },
        {
          label: 'Estate planning & wills',
          slug: 'estate-planning-wills-finance',
          type: 'category'
        },
        {
          label: 'Seniors savings & discounts',
          slug: 'seniors-savings-discounts',
          type: 'category'
        },
        {
          label: 'Superannuation',
          slug: 'superannuation',
          type: 'category'
        }
      ]
    },
    {
      label: 'Retirement',
      slug: 'retirement',
      type: 'category',
      sub_menu: [
        {
          label: 'News',
          slug: 'news-retirement',
          type: 'category'
        },
        {
          label: 'Retirement Planning',
          slug: 'retirement-planning',
          type: 'category'
        },
        {
          label: 'Retirement Income',
          slug: 'retirement-income',
          type: 'category'
        },
        {
          label: 'Retirement Affordability Index',
          slug: 'retirement-affordability-index',
          type: 'category'
        },
        {
          label: 'Living In Retirement',
          slug: 'living-in-retirement',
          type: 'category'
        },
        {
          label: 'Retirement Village Living',
          slug: 'retirement-village-living',
          type: 'category'
        },
        {
          label: 'Aged Care',
          slug: 'aged-care',
          type: 'category'
        }
      ]
    },
    {
      label: 'Travel',
      slug: 'travel',
      type: 'category',
      sub_menu: [
        {
          label: 'News',
          slug: 'news-travel',
          type: 'category'
        },
        {
          label: 'Destinations',
          slug: 'destinations',
          type: 'category'
        },
        {
          label: 'Travel Deals',
          slug: 'travel-deals',
          type: 'category'
        },
        {
          label: 'Accommodation',
          slug: 'accommodation-travel',
          type: 'category'
        },
        {
          label: 'Flying',
          slug: 'flying',
          type: 'category'
        },
        {
          label: 'Cruising',
          slug: 'cruising',
          type: 'category'
        },
        {
          label: 'Tours And Holidays',
          slug: 'tours-and-trips',
          type: 'category'
        },
        {
          label: 'Solo Travel',
          slug: 'solo-travel',
          type: 'category'
        },
        {
          label: 'Driving Holidays',
          slug: 'self-drive-holidays',
          type: 'category'
        },
        {
          label: 'Budget Travel',
          slug: 'travelling-on-a-budget',
          type: 'category'
        }
      ]
    },
    {
      label: 'Age Pension',
      slug: 'age-pension',
      type: 'category',
      sub_menu: [
        {
          label: 'News',
          slug: 'news-age-pension',
          type: 'category'
        },
        {
          label: 'Age Pension essentials',
          slug: 'age-pension-essentials',
          type: 'category'
        },
        {
          label: 'Age Pension eligibility',
          slug: 'pension-eligibility',
          type: 'category'
        },
        {
          label: 'Income and asset tests',
          slug: 'income-and-asset-tests',
          type: 'category'
        },
        {
          label: 'Deeming rates',
          slug: 'deeming-rates-for-age-pension',
          type: 'category'
        },
        {
          label: 'Payment rates',
          slug: 'pension-payment-rates',
          type: 'category'
        },
        {
          label: 'Work Bonus',
          slug: 'work-bonus-age-pension',
          type: 'category'
        }
      ]
    },
    {
      label: 'Centrelink',
      slug: 'centrelink',
      type: 'category',
      sub_menu: [
        {
          label: 'News',
          slug: 'centrelink-news',
          type: 'category'
        },
        {
          label: 'Seniors Card & Concessions',
          slug: 'seniors-card',
          type: 'category'
        }
      ]
    },
    {
      label: 'Health',
      slug: 'health',
      type: 'category',
      sub_menu: [
        {
          label: 'News',
          slug: 'news-health',
          type: 'category'
        },
        {
          label: 'COVID-19',
          slug: 'covid19',
          type: 'category'
        },
        {
          label: 'Health essentials',
          slug: 'health-essentials',
          type: 'category'
        },
        {
          label: 'Wellbeing',
          slug: 'wellbeing',
          type: 'category'
        },
        {
          label: 'Brain health',
          slug: 'brain-health',
          type: 'category'
        },
        {
          label: 'Mental health',
          slug: 'mental-health',
          type: 'category'
        },
        {
          label: 'Sex & Relationships',
          slug: 'relationships',
          type: 'category'
        },
        {
          label: 'Hearing',
          slug: 'hearing',
          type: 'category'
        },
        {
          label: 'Grief & Loss',
          slug: 'grief-and-loss',
          type: 'category'
        },
        {
          label: 'Medicare',
          slug: 'medicare',
          type: 'category'
        }
      ]
    },
    {
      label: 'Life',
      slug: 'lifestyle',
      type: 'category',
      sub_menu: [
        {
          label: 'News',
          slug: 'news-lifestyle',
          type: 'category'
        },
        {
          label: 'Work',
          slug: 'work',
          type: 'category'
        },
        {
          label: 'Learning',
          slug: 'learning',
          type: 'category'
        },
        {
          label: 'Stylewatch',
          slug: 'stylewatch',
          type: 'category'
        },
        {
          label: 'Technology',
          slug: 'technology',
          type: 'category'
        },
        {
          label: 'Leisure',
          slug: 'leisure',
          type: 'category'
        },
        {
          label: 'Entertainment',
          slug: 'entertainment',
          type: 'category'
        },
        {
          label: 'Food & Recipes',
          slug: 'food-recipes',
          type: 'category'
        },
        {
          label: 'Volunteering',
          slug: 'volunteering',
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
      slug: 'insights',
      type: 'category',
      sub_menu: [
        {
          label: 'Retirement Affordability Index',
          slug: 'retirement-affordability-index',
          type: 'category'
        },
        {
          label: 'eGuides',
          slug: 'eguides-insights',
          type: 'category'
        },
        {
          label: 'Podcast',
          slug: 'podcasts',
          type: 'category'
        },
        {
          label: 'Videos',
          slug: 'video',
          type: 'category'
        },
        {
          label: 'Press & Coverage',
          slug: 'in-the-news',
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
