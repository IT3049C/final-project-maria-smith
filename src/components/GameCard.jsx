import { Link } from 'react-router-dom';

import './GameCard.css';

const GameCard = ({ imgPath, name, linkPath }) => {
  return (
    <Link to={linkPath} className="game-card">
      <div className='game-img'>
        <img src={imgPath} alt="game image" />
      </div>
      <div className='game-label'>
        <div>{name}</div>
      </div>
    </Link>

  )
}

export default GameCard;