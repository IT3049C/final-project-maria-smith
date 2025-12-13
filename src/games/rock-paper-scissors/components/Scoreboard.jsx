import '../RockPaperScissors.css'

const Scoreboard = ({ score }) => {
  return (
    <div className='scoreboard'>
      <div>Maria: {score.player}</div>
      <div>Ties: {score.ties}</div>
      <div>CPU: {score.cpu}</div>
  </div>
  )
}

export default Scoreboard;
