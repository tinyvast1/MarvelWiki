import Logo from '../logo/Logo'
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <Logo/>
                <div className="header-switch">
                    <button className='header-switch__btn active'>Characters</button>
                    <span>/</span>
                    <button className='header-switch__btn'>Comics</button>
                </div>
            </div>

        </header>
    )
}

export default Header