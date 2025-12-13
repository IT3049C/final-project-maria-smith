import { useLocation } from 'react-router-dom';
import './navigation.css'

import logo from '../../shared/assets/pixel-patch-logo.png';
import menuIcon from '../../shared/assets/menu-bars.svg';

export function Navigation() {
const location = useLocation();
const isHomePage = location.pathname === '/';

  return (
    <nav className='navbar'>
      <div className={`${isHomePage ? 'navbar-home' : 'navbar-game'}`}>
        {isHomePage && (
          <div></div>
        )}
  
        <div className={isHomePage ? 'logo-home' : 'logo-game'}>
          <img src={logo} alt='Pixel Patch Logo'/>
        </div>

        <div className='menu-icon'>
          <img src={menuIcon} alt='Menu'/>
        </div>
      </div>
    </nav>
  )
}
