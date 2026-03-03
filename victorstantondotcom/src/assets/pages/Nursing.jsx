import "./Nursing.css";
import RN from "../images/RN.jpg";
import ModelU from "../images/modelU.jpg"


function Nursing() {


  return (
    <>
      <main >
          <h1 id='mt-title'>Registered Nurse</h1>
          <div className="mt-main">
            <img id='mt-pic' src={RN} alt="Nurse Stanton" />
            <p className='mt-text'>
              Victor Stanton is a Nurse with experience in pediatric foster care, rehab admissions, and acute care telemetry units across New York City. He is known for leading nursing teams, building documentation tracking systems, and improving clinic workflows through technology. Victor has coordinated care for medically fragile children, veterans, and rehab patients while supporting interdisciplinary teams with clear communication and bilingual Spanish-English education. His work combines clinical leadership, digital process design, and patient-centered care to improve accuracy, efficiency, and outcomes across diverse healthcare settings.
            </p>
          </div>
          <h1 id='rn-projects-title'>Nursing Projects</h1>
          <div className="rn-projects">
            <ul>
                <li>
                    blah blah blah
                </li>
                <li>
                    blah blah blah
                </li>
                <li>
                    blah blah blah
                </li>
                <li>
                    blah blah blah
                </li>
                <li>
                    blah blah blah
                </li>
                <li>
                    blah blah blah
                </li>
                <li>
                    blah blah blah
                </li>
                <li>
                    blah blah blah
                </li>
            </ul>
          </div>
      </main>
    </>
  )
}

export default Nursing;