import Link from 'next/link'
import Button from '@material-ui/core/Button'

export default function TopGames() {
  const games = [
    {
      name: 'Trivia',
      permalink: '/fun/games/trivia',
      img:
        'https://cdn.statically.io/img/dev.yourlifechoices.com.au/f=auto%2Cq=100/wp-content/themes/bimber-child-theme/assets/img/games/trivia.png'
    },
    {
      name: 'Word Search',
      permalink: '/fun/games/word-search',
      img:
        'https://cdn.statically.io/img/dev.yourlifechoices.com.au/f=auto%2Cq=100/wp-content/themes/bimber-child-theme/assets/img/games/logo-wordsearch.png'
    },
    {
      name: 'cross-word',
      permalink: '/fun/games/aussie-crosswords',
      img:
        'https://cdn.statically.io/img/dev.yourlifechoices.com.au/f=auto%2Cq=100/wp-content/themes/bimber-child-theme/assets/img/games/crossword-logo.png'
    },
    {
      name: 'solitair',
      permalink: '/fun/games/solitaire',
      img:
        'https://cdn.statically.io/img/dev.yourlifechoices.com.au/f=auto%2Cq=100/wp-content/themes/bimber-child-theme/assets/img/games/solitair.png'
    }
  ]

  return (
    <>
      {games.map((game) => (
        <div className="game-item" key={game.name}>
          <Link href={game.permalink}>
            <a>
              <img src={game.img} alt={game.name} loading="lazy" />
            </a>
          </Link>
        </div>
      ))}

      <Link href="/fun/games">
        <Button
          component="a"
          href="/fun/games"
          fullWidth
          variant="outlined"
          color="primary"
          className="viewmoregames">
          View More Games
        </Button>
      </Link>

      <style jsx>{`
        .game-item {
          border-radius: 4px;
          background: #4f4f4f;
          height: 140px;
          text-align: center;
          padding: 0 35px;
          border-radius: 10px;
          position: relative;
          z-index: 0;
          margin-bottom: 10px;

          img {
            position: absolute;
            top: 50%;
            transform: translateY(-40%);
            left: 0;
            right: 0;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  )
}
