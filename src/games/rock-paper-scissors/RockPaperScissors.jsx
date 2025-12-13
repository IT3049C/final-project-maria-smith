import { useState } from 'react'

import { beats, decideWinner, getCpuMove, updateScores } from './logic/game'

import ShadowButton from '../../components/ShadowButton/ShadowButton'
import Button from '../../components/Button/Button'
import Scoreboard from './components/Scoreboard'
import GameBoard from './components/GameBoard'
import gear from './assets/gear.svg'

import './RockPaperScissors.css'

export function RockPaperScissors() {
  const [gameCount, setGameCount] = useState(0);
  const [score, setScore] = useState({
    player: 0,
    cpu: 0,
    ties: 0
  });
  const [resultMsg, setResultMsg] = useState('');
  const moves = Object.keys(beats);

  const playRound = (move) => {
    const cpuMove = getCpuMove();
    const outcome = decideWinner(move, cpuMove);
    setResultMsg(outcome === 'player' ? 'You win!' : outcome === 'cpu' ? 'CPU wins!' : "It's a tie!");
    setGameCount(gameCount + 1);
    setScore((score) => updateScores(score, outcome));
  }

  const onReset = () => {
    setGameCount(0);
    setScore({
      player: 0,
      cpu: 0,
      ties: 0
    });
  }

  return (
    <>
      <div className='rps-container'>
        <div className='rps-left'>
          <div className='moves-container'>
            {moves.map((m) => (
              <ShadowButton
                key={m}
                text={m}
                onClick={() => playRound(m)}
              />
            ))}
          </div>
          <div className='settings-container'>
            <div className='game-count'>Games: {gameCount}</div>
            <div className='resettings'>
              <Button 
                text='Reset'
                onClick={() => onReset()}
              />
              <img src={gear} alt='settings gear icon'/>
            </div>
          </div>
        </div>

        <div className='rps-right'>
          <Scoreboard score={score}/>
          <GameBoard />
          <div className='results'>{resultMsg}</div>
        </div>
      </div>
    </>
  )
}
