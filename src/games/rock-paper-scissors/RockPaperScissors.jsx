import ShadowButton from '../../components/ShadowButton/ShadowButton'
import Button from '../../components/Button/Button'
import gear from './assets/gear.svg'

import './RockPaperScissors.css'

export function RockPaperScissors() {
  return (
    <>
      <div className='rps-container'>
        <div className='rps-left'>
          <div className='moves-container'>
            <ShadowButton 
              text='Rock'
            />
            <ShadowButton 
              text='Paper'
            />
            <ShadowButton 
              text='Scissors'
            />
          </div>
          <div className='settings-container'>
            <div className='game-count'>Games: 0</div>
            <div className='resettings'>
              <Button 
                text='Reset'
              />
              <img src={gear} alt='settings gear icon'/>
            </div>
          </div>
        </div>

        <div className='rps-right'>
          Test
        </div>
      </div>
    </>
  )
}