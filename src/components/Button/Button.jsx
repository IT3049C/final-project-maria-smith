import './Button.css'

const colorMap = {
  orange: 'var(--orange)'
}

const Button = ({ text, color = 'orange', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className='button'
      style={{ backgroundColor: colorMap[color] }}
    >
      {text}
    </div>
  )
}

export default Button;
