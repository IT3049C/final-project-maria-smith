import './styles/App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { Home } from './pages/Home/Home'
import { RockPaperScissors } from './games/rock-paper-scissors/RockPaperScissors'
import { TicTacToe } from './games/tic-tac-toe/TicTacToe'
import { Wordle } from './games/wordle/Wordle'
import { SugarRush } from './games/sugar-rush/SugarRush'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/rps" element={<RockPaperScissors />}/>
            <Route path="/tictactoe" element={<TicTacToe />}/>
            <Route path="/wordle" element={<Wordle />}/>
            <Route path="/sugarrush" element={<SugarRush />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
