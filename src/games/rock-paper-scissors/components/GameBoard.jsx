import '../RockPaperScissors.css'

const GameBoard = ({ moves, resultMsg }) => {
  return (
    <>
      {moves.playerImg ? (
        <>
          <div className='game-board'>
            <img src={moves.playerImg} alt={`${moves.player} icon`} className='player-move' />
            <img src={moves.cpuImg} alt={`${moves.cpu} icon`} className='cpu-move'/>
          </div>
          <div className='results'>{resultMsg}</div>
        </>
      ) : (
        <div className='make-move'>Make the first move!</div>
      )}
    </>
  )
} 

export default GameBoard;
