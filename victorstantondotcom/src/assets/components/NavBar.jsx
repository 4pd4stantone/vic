import './NavBar.css'
import logo from '../images/logo-SE-F.png'

function NavBar() {


  return (
    <>
      <nav>
            <div id='img-logo'>
                <img src={logo} alt="" id='logo'/>
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