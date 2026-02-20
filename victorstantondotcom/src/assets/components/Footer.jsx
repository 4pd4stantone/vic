import './Footer.css'
import logo from '../images/logo-SE-F.png'

function Footer() {


  return (


    <footer>
      <div className="footer1">
          <img 
          src={logo}
          alt="Health Tech Software Engineer"
          id="footer-logo"
          />
      </div>
      <div className="footer2">
        <div className="social-media">
          <div className='f-btn-one'>
              <button>Home</button>
          </div>
          <div className='f-btn-two'>
              <button>About</button>
          </div>
          <div className='f-btn-three'>
              <button>Contact</button>
          </div>
        </div>
      </div>
      <div className="footer3">
        <div>
            <p id="tos"><a href="">Terms of Service</a></p>
        </div>
        <div>
            <p id="pp"><a href="">Privacy Policy</a></p>
        </div>
        <div>
          <p id="cr">© 2025 Victor Stanton. All rights reserved.</p>
        </div>
      </div>
    </footer>


  )
}

export default Footer