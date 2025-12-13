import './Home.css'

import GameCard from '../../components/GameCard'

export function Home() {
  return (
    <>
      {/* Main body */}
      <div className="games-container">
        <GameCard
          imgPath=''
          name='Rock, Paper, Scissors'
          linkPath='/rps'
        />

        <GameCard
          imgPath=''
          name='Tic Tac Toe'
          linkPath='/tictactoe'
        />

        <GameCard
          imgPath=''
          name='Wordle'
          linkPath='/wordle'
        />

        <GameCard
          imgPath=''
          name='Sugar Rush'
          linkPath='/sugarrush'
        />
      </div>
    </>
  )
}
