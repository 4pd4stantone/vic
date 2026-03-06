import "./Nursing.css";
import RN from "../images/RN.jpg";
import { Link } from "react-router"


function Nursing() {


  return (
    <>
      <main id="main-tag">
          <h1 id='rn-title'>Registered Nurse</h1>
          <div className="rn-main">
            <img id='rn-pic' src={RN} alt="Nurse Stanton" />
            <p className='rn-text'>
              Victor Stanton is a Nurse with experience in pediatric foster care, rehab admissions, and acute care telemetry units across New York City. He is known for leading nursing teams, building documentation tracking systems, and improving clinic workflows through technology. Victor has coordinated care for medically fragile children, veterans, and rehab patients while supporting interdisciplinary teams with clear communication and bilingual Spanish-English education. His work combines clinical leadership, digital process design, and patient-centered care to improve accuracy, efficiency, and outcomes across diverse healthcare settings.
            </p>
          </div>
          <h1 id='rn-projects-title'>Nursing Projects</h1>
          <div className="rn-projects">
              <h3 className="sub-title">Nurse Case Manager Orientation Manual</h3>
                <p className="rn-text-projects">Serving as Nurse Case Manager Supervisor, Victor Stanton led the project to update the Nurse Case Manager Orientation Manual, which had expanded over time and required clearer organization and updated content. Over six months, he transformed it into a comprehensive 105 page guide by updating policies, clarifying procedures, and adding new protocols for communication, on call coverage, prescription management, home visits, intake, and discharge processes. He organized the material into clear step by step instructions, standardized documentation practices, and a well defined Nurse Case Manager role. In addition to writing and editing the content, he redesigned the entire document to create a clean, professional layout that improved usability. The final manual provides a structured and practical framework that supports consistency, accountability, and high quality care across the program.
                </p>
                <p className="rn-text-projects">To preview the structure and design of the manual, please follow the link below to view the front cover and table of contents:
                </p>
                <Link id='manual-link' to='/nursing/nursing-manual'>Nurse Case Manager Orientation Manuel</Link>
              <h3 className="sub-title">Other Nursing Projects</h3>
                <ul>
                  <li></li>
                </ul>
          </div>
      </main>
    </>
  )
}

export default Nursing;