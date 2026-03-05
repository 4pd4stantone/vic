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
                <Link to={"/"} id='simple-img-logo'>
                <img src={logo} alt="logo" id='simple-logo'onClick={handleHomeClick}/>
                </Link>
      </nav>
    </>
  )
}

export default SimpleNav;