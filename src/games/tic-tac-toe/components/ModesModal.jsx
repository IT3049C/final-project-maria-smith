import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import xImg from '../assets/X.png'
import '../TicTacToe.css'

const ModesModal = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  const [view, setView] = useState('localOnline'); // localOnline, startGame, waitingRoom
  const [gameCode, setGameCode] = useState(null);

  const handleLocalClick = () => {onClose?.();}
  const handleOnlineClick = () => {setView('startGame')}
  const handleCreateGame = () => {
    setView('waitingRoom');
  }
  const handleJoinGame = () => {
    // TODO
  }

  const handleBack = () => {
    if (view === 'startGame') {
      setView('localOnline');
    } else if (view === 'waitingRoom') {
      setView('startGame');
    }
  };

  const handleCancelGame = () => {
    setView('startGame');
  };

  return (
    <Modal
      isVisible={isVisible}
    >
      <div className="ttt-modes-modal">
        {view === 'localOnline' &&
        <>
          <div className="ttt-modes-header">
            <h3>Choose Mode</h3>
            <img 
              onClick={() => {navigate('/')}} 
              className="ttt-modes-header-action" 
              src={xImg} 
              alt='cancel icon' 
            />
          </div>
          <div className="ttt-modes-options">
            <div onClick={handleLocalClick}>
              <div>Local</div>
              <div>Two players on the same computer.</div>
            </div>
            <div onClick={handleOnlineClick}>
              <div>Online Lobby</div>
              <div>Create or join an online game room.</div>
            </div>
          </div>
        </>
        }

        {view === 'startGame' && 
          <>
            <div className="ttt-modes-header">
              <h3 style={{marginRight: '8rem'}}>Game Settings</h3>
              <div onClick={handleBack}>←</div>
            </div>
            <div className="ttt-game-code">
              <label htmlFor="gameCode">Game Code</label>
              <input 
                id="gameCode"
                type="text"
                name="gameCode"
                maxLength="10"
                value={gameCode}
                onChange={e => setGameCode(e.target.value)}
              />
              <div style={{textAlign: 'center', margin: '2rem 0'}}>OR</div>
              <Button 
                onClick={handleCreateGame}
                text='Create Game'
                margin='0 4rem .8rem 4rem'
              />
            </div>
          </>
        }

        {view === 'waitingRoom' &&
          <>
            <div className="ttt-modes-header">
              <h3 style={{marginRight: '8rem'}}>Game Settings</h3>
              <div onClick={handleBack}>←</div>
            </div>
            <div className="ttt-wait-rm-body">
              <div>Game Code: {gameCode}</div>
              <div>Waiting for player to join...</div>
              <Button 
                onClick={handleBack}
                text='Cancel Game'
              />
            </div>
          </>
        }

      </div>
    </Modal>
  )
}

export default ModesModal;
