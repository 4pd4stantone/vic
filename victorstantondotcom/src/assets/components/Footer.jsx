import './Footer.css'
import logo from '../images/logo-SE-F.png'

function Footer() {


  return (


    <footer>
      <div class="footer1">
        <a href="./index.html">
          <img 
          src={logo}
          alt="Health Tech Software Engineer"
          id="footer-logo"
          />
        </a>
      </div>
      <div class="footer2">
        <div class="social-media">
          <div>
            <a href="">
              <img src="../images/IG.png" alt="IG Icon" class="Icon" />
            </a>
          </div>
          <div>
            <a href="" >
              <img src="../images/Facebook.png" alt="Facebook Icon" class="Icon"id="fb-icon" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="../images/Twitter.png" alt="Twitter Icon" class="Icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer3">
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