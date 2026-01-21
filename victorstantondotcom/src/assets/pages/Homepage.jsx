import NavBar from "../components/NavBar.jsx";
import "./Homepage.css";
import Footer from "../components/Footer.jsx"
import Logo from "../images/logo-SE-F.png";
import Syringe from "../images/Syring2.png";
import LMT from "../images/LMT.png";
import Tag from "../images/tag.png";
import PT from "../images/PT.png"

function Homepage() {


  return (
    <>
      <NavBar></NavBar>
      <main>
      <section class="hero">
        <div class="hero-header">
          <h1>Victor Stanton</h1>
        </div>
        <div class="hero-central">
          <div class="outerbox" id="outbox1">
            <div class="innerbox1" id="smlbox1">
              <div class="xsmlbox1">
                <h3 class="left-title">Registered Nurse, BSN</h3>
                <p class="hero-paragraph" id="ni-paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti qui ut sapiente sequi minus.
                </p>
              </div>
              <div class="xsmlbox2">
                <a href="">
                  <img
                    src={Syringe}
                    alt="Syringe Icon"
                    id="syringe"
                  />
                </a>
              </div>
            </div>
            <div class="innerbox1" id="smlbox2">
              <div class="xsmlbox1">
                <h3 class="left-title">Massage Therapist, LMT</h3>
                <p class="hero-paragraph" id="lmt-paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti qui ut sapiente sequi minus.
                </p>
              </div>
              <div class="xsmlbox2">
                <a href="../MovementTherapy/movementTherapy.html">
                  <img src={LMT} alt="LMT Icon" id="lmt-logo" />
                </a>
              </div>
            </div>
          </div>
          <div class="outerbox" id="outerbox2">
            <img
                src={Logo}
                alt="Software Engineering logo"
                id="central-img"
            />
          </div>
          <div class="outerbox" id="outbox3">
            <div class="innerbox2" id="smlbox3">
              <div class="xsmlbox2">
                <a href="../SoftwareEngineering/softengineering.html"
                  ><img src={Tag} alt="Tag Icon" id="tag"
                /></a>
              </div>
              <div class="xsmlbox1">
                <h3>Software Engineering, Per Scholas</h3>
                <p class="hero-paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti qui ut sapiente sequi minus.
                </p>
              </div>
            </div>
            <div class="innerbox2" id="smlbox4">
              <div class="xsmlbox2">
                <a href="../MovementTherapy/movementTherapy.html" target="_parent">
                  <img
                    src={PT}
                    alt="Personal Training Icon"
                    id="pt-logo"
                  />
                </a>
              </div>
              <div class="xsmlbox1">
                <h3>Personal Training, CSCS, BS</h3>
                <p class="hero-paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti qui ut sapiente sequi minus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  )
}

export default Homepage