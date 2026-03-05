import "./MovementTherapy.css";
import MT from "../images/MT-Pic.png";
import ModelU from "../images/modelU.jpg"


function MovementTherapy() {


  return (
    <>
      <main id="main-tag">
          <h1 id='mt-title'>Movement Therapist</h1>
          <div className="mt-main">
            <img id='mt-pic' src={MT} alt="Victor Stanton Movement Therapist" />
            <p className='mt-text'>
              Victor Stanton is a Licensed Massage Therapist and Certified Strength & Conditioning Specialist with a degree in Exercise Science from Marquette University. Victor has experience working in physiotherapy clinics, athletic performance facilities, and boutique gyms across New York City. He combines deep tissue massage with myofascial release, PNF stretching, range-of-motion therapy, and strength programming to restore mobility and reduce pain. His clients range from everyday wellness patients to competitive athletes and individuals recovering from complex physical conditions.
            </p>
          </div>
          <h1 id='mt-title'>Physique Competitor</h1>
          <div className="mt-main">
            <img id='mt-pic' src={ModelU} alt="Victor Stanton Model Universe" />
            <p className='mt-text'>
              Shaped by his background in Exercise Science and his experience as a competitive physique athlete, Victor won the Model New York Physique Competition in 2011 and placed in the Top 5 at the Model Universe Physique Competition in 2012. These achievements strengthened his understanding of training cycles, recovery, nutrition, and biomechanics, knowledge he now applies to help clients build strong, resilient, and balanced bodies.
            </p>
          </div>
      </main>
    </>
  )
}

export default MovementTherapy