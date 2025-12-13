import './Home.css'

import GameCard from '../../components/GameCard'

export function Home() {
  return (
    <>
      <div className='games-container'>
        <div className='greeting'>Hello!</div>

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
