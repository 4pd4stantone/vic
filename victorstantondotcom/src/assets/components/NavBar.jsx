import './NavBar.css'
import logo from '../images/logo-SE-F.png'
import { Link } from 'react-router'

function NavBar() {


  return (
    <>
      <nav>
            
            <div id='img-logo'>
                <Link to={"/"}>
                <img src={logo} alt="" id='logo'/>
                </Link>
            </div>
            
            <div className='nav-one'>
            </div>
            <div className='nav-two'>
                <div className='btn-one'>
                    <button>Home</button>
                </div>
                <div className='btn-two'>
                    <button>About</button>
                </div>
                <div className='btn-three'>
                    <button>Contact</button>
                </div>
            </div>
            <div className='nav-three'>
                <h1 className='name'>Victor Stanton</h1>
            </div>
      </nav>
    </>
  )
}

export default NavBar