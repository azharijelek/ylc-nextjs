import Link from 'next/link'

function Games() {
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
      name: 'daily-cross-words',
      permalink: '/fun/games/daily-crossword-puzzles',
      img:
        'https://production.yourlifechoices.com.au/wp-content/themes/bimber-child-theme/assets/img/games/aussies-CW.svg'
    },
    {
      name: 'sudoku',
      permalink: '/fun/games/sudoku',
      img:
        'https://production.yourlifechoices.com.au/wp-content/themes/bimber-child-theme/assets/img/games/sudoku.svg'
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
      <section className="container">
        <article>
          <h1>Game Room</h1>

          <p>
            Welcome to the YourLifeChoices Games page. Everyone wants to have fun, and
            YourLifeChoices have compiled a range of fun and exciting games to challenge your mind
            and to let you sit back, relax and enjoy your day!
          </p>

          <div className="games-wrapper">
            {games.map((game) => (
              <Link href={game.permalink} key={game.name}>
                <div className="game-item">
                  <a>
                    <img src={game.img} alt={game.name} loading="lazy" />
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </article>
      </section>

      <style jsx>{`
        .container {
          padding: 20px 15px 50px;
          color: #333;
          min-height: 90vh;

          h1 {
            margin-top: 0;
            margin-bottom: 20px;
            font-size: 34px;
          }

          p {
            font-size: 16px;
            line-height: 24px;
            margin: 0 0 30px;
          }
        }
        .games-wrapper {
          display: grid;
          grid-template-columns: auto auto;
          gap: 15px;
        }
        .game-item {
          border-radius: 18px;
          background: #4f4f4f;
          height: 60vw;
          text-align: center;
          padding: 0 35px;
          border-radius: 18px;
          position: relative;
          z-index: 0;
          cursor: pointer;
          background: linear-gradient(225deg, #555555, #474747);
          box-shadow: -5px 4px 10px rgba(0, 0, 0, 0.3);
          border: 3px solid transparent;
          transition: all 0.2s ease;

          &:hover {
            border: 3px solid red;
          }

          img {
            position: absolute;
            top: 50%;
            transform: translateY(-40%);
            left: 0;
            right: 0;
            margin: 0 auto;
            max-width: 80%;
          }
        }
      `}</style>
    </>
  )
}

export default Games
