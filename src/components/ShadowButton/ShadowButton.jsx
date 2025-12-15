import './ShadowButton.css'

const ShadowButton = ({ text, onClick }) => {
  return (
      <div onClick={onClick} className="shadow-button">
        {text}
      </div>
  )
}

export default ShadowButton;
