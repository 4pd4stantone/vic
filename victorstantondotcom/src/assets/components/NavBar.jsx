import './NavBar.css'
import logo from '../images/logo-SE-F.png'
import { Link } from 'react-router'

function NavBar(justLogo, setJustLogo) {


  return (
    <>
      <nav>
            <Link to={"/"}>
              <div id='img-logo'>
                  <img src={logo} alt="" id='logo'/>
              </div>
            </Link>
            <div className='nav-one'>
            </div>
            <div className='nav-two'>
                <div className='btn-one'>
                  <Link to="/" className='link'>
                    <button>Home</button>
                  </Link>
                </div>
                <div className='btn-two'>
                  <Link to="/about" className='link'>
                    <button>About</button>
                  </Link>
                </div>
                <div className='btn-three'>
                  <Link to="/contact" className='link'>
                    <button>Contact</button>
                  </Link>
                </div>
            </div>
            <div className='nav-three'>
              <Link to="/about" className='link'>
                <h1 className='name'>Victor Stanton</h1>
              </Link>
            </div>
      </nav>
    </>
  )
}

export default NavBar