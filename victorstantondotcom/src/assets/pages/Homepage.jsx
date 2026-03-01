
import "./Homepage.css";
import Logo from "../images/logo-SE-F.png";
import Syringe from "../images/Syring2.png";
import LMT from "../images/LMT.png";
import Tag from "../images/tag.png";
import PT from "../images/PT.png"
import MovementTherapy from "./MovementTherapy.jsx";
import { Link } from 'react-router'

function Homepage() {


  return (
    <>
      
      <main>
      <section className="hero">
        <div className="hero-header">
          <h1>Victor Stanton</h1>
        </div>
        <div className="hero-central">
          <div className="outerbox" id="outbox1">
            <div className="innerbox1" id="smlbox1">
              <div className="xsmlbox1">
                <h3 className="left-title">Registered Nurse, BSN</h3>
                <p className="hero-paragraph" id="ni-paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti qui ut sapiente sequi minus.
                </p>
              </div>
              <div className="xsmlbox2">
                <a href="">
                  <img
                    src={Syringe}
                    alt="Syringe Icon"
                    id="syringe"
                  />
                </a>
              </div>
            </div>
            <div className="innerbox1" id="smlbox2">
              <div className="xsmlbox1">
                <h3 className="left-title">Massage Therapist, LMT</h3>
                <p className="hero-paragraph" id="lmt-paragraph">
                  Massage Therapist specializing in deep tissue, myofascial release, and PNF techniques to improve mobility and relieve pain.
                </p>
              </div>
              <div className="xsmlbox2">
                <Link to="/movement-therapy">
                  <img src={LMT} alt="LMT Icon" id="lmt-logo" />
                </Link>
              </div>
            </div>
          </div>
          <div className="outerbox" id="outerbox2">
            <img
                src={Logo}
                alt="Software Engineering logo"
                id="central-img"
            />
          </div>
          <div className="outerbox" id="outbox3">
            <div className="innerbox2" id="smlbox3">
              <div className="xsmlbox2">
                <a href="../SoftwareEngineering/softengineering.html"
                  ><img src={Tag} alt="Tag Icon" id="tag"
                /></a>
              </div>
              <div className="xsmlbox1">
                <h3>Software Engineering, Per Scholas</h3>
                <p className="hero-paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti qui ut sapiente sequi minus.
                </p>
              </div>
            </div>
            <div className="innerbox2" id="smlbox4">
              <div className="xsmlbox2">
                <Link to="/movement-therapy">
                  <img
                    src={PT}
                    alt="Personal Training Icon"
                    id="pt-logo"
                  />
                  </Link>
              </div>
              <div className="xsmlbox1">
                <h3>Personal Trainer, CSCS, BS</h3>
                <p className="hero-paragraph">
                  Certified Strength & Conditioning Specialist creating programs to improve strength, mobility, and body composition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Homepage