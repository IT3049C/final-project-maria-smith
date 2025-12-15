import Modal from '../../../components/Modal/Modal'
import Button from '../../../components/Button/Button';

const ResultModal = ({ isVisible, message, onPlayAgain, onQuit }) => {
  return (
    <Modal
      isVisible={isVisible}
    >
      <h3 className='wordle-result-header'>{message}</h3>
      <div className='wordle-result-buttons'>
        <Button 
          onClick={onPlayAgain}
          text='Play Again'
          color='greenLight'
        />
        <Button 
          onClick={onQuit}
          text='Quit'
        />
      </div>
    </Modal>
  )
}

export default ResultModal;
