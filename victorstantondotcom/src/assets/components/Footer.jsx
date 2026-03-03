import './Footer.css'
import logo from '../images/logo-SE-F.png'
import { Link } from 'react-router'

function Footer() {


  return (


    <footer>
      <div className="footer1">
        <Link to="/" className='link'>
          <img 
          src={logo}
          alt="Health Tech Software Engineer"
          id="footer-logo"
          />
        </Link>
      </div>
      <div className="footer2">
        <div className="social-media">
          <div className='f-btn-one'>
            <Link to="/" className='link'>
              <button>Home</button>
            </Link>
          </div>
          <div className='f-btn-two'>
            <Link to="/about" className='link'>
              <button>About</button>
            </Link>
          </div>
          <div className='f-btn-three'>
            <Link to="/about" className='link'>
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer3">
        <div>
          <Link to="/terms-of-service" className='link'>
            <p id="tos">Terms of Service</p>
          </Link>
        </div>
        <div>
          <Link to="/privacy-policy" className='link'>
            <p id="pp">Privacy Policy</p>
          </Link>
        </div>
        <div>
          <p id="cr">© 2026 Victor Stanton. All rights reserved.</p>
        </div>
      </div>
    </footer>


  )
}

export default Footer