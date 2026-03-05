import './NavBar.css'
import logo from '../images/logo-SE-F.png'
import { Link } from 'react-router'

function SimpleNav({simpleNav, setSimpleNav}) {

function handleHomeClick() {
  setSimpleNav(false);
}

  return (
    <>
      <nav> 
            <div id='img-logo'>
                <Link to={"/"}>
                <img src={logo} alt="logo" id='logo'onClick={handleHomeClick}/>
                </Link>
            </div>
      </nav>
    </>
  )
}

export default SimpleNav;