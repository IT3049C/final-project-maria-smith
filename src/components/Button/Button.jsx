import './Button.css'

const colorMap = {
  orange: 'var(--orange)',
  greenLight: 'var(--green-light)'
}

const Button = ({ 
  text, 
  onClick, 
  margin = '',
  padding = '.8rem 1rem',
  color = 'orange', 
  fontSize = '1rem'
}) => {
  return (
    <button 
      onClick={onClick}
      className='button'
      aria-label={text}
      style={{ 
        margin: margin,
        padding: padding,
        backgroundColor: colorMap[color],
        fontSize: fontSize
      }}
    >
      {text}
    </button>
  )
}

export default Button;
