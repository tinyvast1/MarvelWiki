import { Link , NavLink} from 'react-router-dom'
import Logo from '../logo/Logo'
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/">
                    <Logo/>
                </Link>
                <div className="header-switch">
                    <NavLink 
                    className='header-switch__btn' 
                    activeclassname="active" 
                    to="/">Characters</NavLink>
                    <span>/</span>
                    <NavLink 
                    className='header-switch__btn' 
                    activeclassname="active" 
                    to="/comics">Comics</NavLink>
                </div>
            </div>

        </header>
    )
}

export default Header