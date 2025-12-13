import './Button.css'

const colorMap = {
  orange: 'var(--orange)'
}

const Button = ({ text, color = 'orange' }) => {
  return (
    <div 
      className='button'
      style={{ backgroundColor: colorMap[color] }}
    >
      {text}
    </div>
  )
}

export default Button;
