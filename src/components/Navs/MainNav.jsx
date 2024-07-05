import { Link } from 'react-router-dom';
import logo from '/fav.svg';
import './mainNav.css';

function MainNav() {

    return (
        <>
            <nav>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <Link to='/' >Intro</Link>
                    <Link to='/about' >About</Link>
                </div>
            </nav>
        </>
    )
}

export default MainNav;