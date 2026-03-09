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
              <h2 className="role">Victor Stanton - Nurse Case Manager Supervisor</h2>
              <h2 className="place">Children's Aid - Medical Foster Care (MFC) Program</h2>
              <h3 className="sub-title">1. Nurse Case Manager Orientation Manual</h3>
              <h4 className="sub-sub-title">Problem:</h4>
                <p className="rn-text-projects">Over time, the Nurse Case Manager Orientation Manual had expanded with additions from multiple contributors, resulting in a document that lacked clear organization and consistent structure. Important procedures and expectations were difficult to locate, and several protocols no longer reflected current program practices. This created challenges for onboarding new nurses, maintaining consistent workflows, and ensuring that staff clearly understood the scope and responsibilities of the Nurse Case Manager role.
                </p>
                <h4 className="sub-sub-title">Solution:</h4>
                <p className="rn-text-projects">As Nurse Case Manager Supervisor, Victor Stanton led a six month project to redesign and update the orientation manual. He reviewed existing material, updated outdated policies, clarified procedures, and added new protocols covering communication standards, on call coverage, prescription management, home visits, intake procedures, and discharge processes.
                </p>
                <p className="rn-text-projects">Victor Stanton reorganized the entire document into clearly structured sections with step by step instructions and standardized documentation practices. In addition to writing and editing the content, he redesigned the document layout to create a clean and professional format with a clearly outlined table of contents, improving both readability and usability.
                </p>
                <h4 className="sub-sub-title">Outcome:</h4>
                <p className="rn-text-projects">The project resulted in a comprehensive 105 page orientation manual that serves as a structured guide for Nurse Case Managers. The manual supports consistent workflows, strengthens accountability, and provides clear operational guidance for the nursing team. The improved structure also made the manual easier for new staff to navigate, enhancing onboarding and reinforcing program standards across the Medical Foster Care team.
                </p>
                <p className="rn-text-projects">To preview the structure and design of the manual, please follow the link below to view the front cover and table of contents:
                </p>
                <Link id='manual-link' to='/nursing/nursing-manual'>Nurse Case Manager Orientation Manuel</Link>
                <hr className="rn-hr"/>
                <h3 className="sub-title">2. Brooklyn Clinic Launch and Vaccine Site Registration</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">The Medical Foster Care Brooklyn nursing team was responsible for patients across all five boroughs of New York City and Long Island but only had access to a single clinic located in Harlem. This created significant travel burdens for families who lived in Brooklyn, Lower Manhattan, Staten Island, and Long Island. The lack of a clinic in Brooklyn limited accessibility for routine physical exams, medical follow ups, and vaccinations, making it more difficult for families to receive timely care.
              </p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton led key operational efforts to support the opening of a new clinic within the Brooklyn office. He coordinated the receipt and organization of medical equipment needed to establish the clinic and worked closely with the Brooklyn clinic provider to develop the clinic schedule.</p>

              <p className="rn-text-projects">Victor Stanton also trained the nursing team on how to schedule patients into the new Brooklyn clinic calendar and maintained regular communication with both nurses and the provider to ensure a smooth launch. During the process of registering the clinic as an official vaccine administration site, the provider who initially volunteered to lead the process withdrew cooperation. Although the Medical Director later stepped in to assist, the process stalled. Victor Stanton ultimately took responsibility for completing the registration process and worked to ensure all required documentation and steps were submitted to the appropriate government agencies so the clinic could be approved as a vaccine site.
              </p>
              <h4 className="sub-sub-title">Outcome:</h4>
              <p className="rn-text-projects">The Brooklyn clinic successfully opened and was registered as an official vaccine administration site. The new clinic significantly improved access to care for families living in Brooklyn, Lower Manhattan, Staten Island, and Long Island, reducing travel time and allowing patients to receive physical exams, routine medical care, and vaccinations closer to home. The clinic also improved operational capacity for the Medical Foster Care program by expanding clinical services beyond the Harlem location.
              </p>
              <hr className="rn-hr"/>
              <h3 className="sub-title">3. Live Patient Census and Program Tracking System</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">The Medical Foster Care program lacked an accurate and continuously updated record of active patients. Because the program regularly experienced new intakes, trial discharges, and discharges, it was difficult for staff to know the true number of children enrolled at any given time. The Harlem team used a spreadsheet controlled by the Nursing Director that quickly became outdated once shared. The Brooklyn team relied on a paper list that was inconsistently maintained.
              </p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton developed a centralized live Excel tracking system used by both teams. The spreadsheet maintained real time information including active patients, intake dates, trial discharge status, and discharged patients, which were moved to a separate discharge tracking sheet. The document was shared with key program staff who required accurate census information.
              </p>
              <h4 className="sub-sub-title">Outcome:</h4>
              <p className="rn-text-projects">The program gained the ability to maintain an accurate real time census for the first time. The system improved operational awareness, facilitated communication across teams, and provided leadership with reliable program data.
              </p>
              <hr className="rn-hr"/>
              <h3 className="sub-title">4. EMR Document Standardization and Audit Compliance Initiative</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">Before the initiative led by Victor Stanton, there was no standardized method for naming documents or determining the correct folders for uploading files within the Electronic Medical Record (EMR) system. Nurses and staff from different departments uploaded documents using their own naming conventions and folder choices. This lack of structure created several operational problems. Documents were difficult to locate, auditors frequently marked documents as missing because they could not find them, and duplicate files were often uploaded under different names or placed in different folders.
              </p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton initiated and led a project to standardize document naming and folder placement across the EMR system. He convened nurses from multiple departments, psychologists, and other staff responsible for document uploads to identify the types of documents commonly used in the program. Victor Stanton organized these documents into a live Excel spreadsheet and collaborated with staff and leadership to determine standardized document names, the appropriate folders where each document should be stored, and whether new folders needed to be created to support the system.</p>

              <p className="rn-text-projects">The project took approximately four months to develop and required consultation with multiple stakeholders to ensure the structure reflected the operational needs of the program.
              </p>
              <h4 className="sub-sub-title">Outcome:</h4>
               <p className="rn-text-projects">Although some departments resisted adopting the standardized system, Victor Stanton implemented the structure within the Medical Foster Care nursing teams and reinforced its use during team meetings and training sessions. In addition to sharing the live spreadsheet, printed reference guides were distributed to each nurse to ensure consistent document naming and placement.</p>

              <p className="rn-text-projects">The system improved document organization within the nursing team and made it easier for auditors to locate required records, reducing confusion and duplication while supporting more efficient audit preparation.
              </p>
              <hr className="rn-hr"/>
              <h3 className="sub-title">5. Brooklyn, Bronx, and Harlem Clinic Nursing Coverage Scheduling System</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">Prior to Victor Stanton's intervention, the Bronx clinic frequently experienced gaps in nursing coverage when patients arrived for appointments. The existing scheduling system relied on a paper sign up sheet where nurses manually wrote their names for coverage shifts. The sheet was often incomplete, misplaced, or ignored, which resulted in inconsistent coverage and operational disruptions.
              </p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton designed and implemented a centralized monthly scheduling system using a shared, color coded Excel spreadsheet that was structured to be clear and easy for staff to use. Nurses were required to enter their clinic coverage for the upcoming month before the end of the current month. If a nurse did not enter their availability, leadership assigned the remaining shifts to ensure the clinic schedule was fully staffed. The document was shared across the team, allowing all nurses to view coverage responsibilities in real time and ensuring that clinic coverage was consistently maintained.
              </p>
              <h4 className="sub-sub-title">Outcome:</h4>
              <p className="rn-text-projects">The new system eliminated coverage gaps and ensured consistent nursing presence at the Bronx clinic. Due to the system's success, Victor Stanton later implemented the same scheduling process for the Brooklyn nursing team covering both the Harlem and Brooklyn clinics.
              </p>
              <hr className="rn-hr"/>
              <h3 className="sub-title">6. Court Documentation and Appointment Tracking System</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">Social workers frequently requested medical summaries and appointment histories shortly before court appearances. As a result, nurses were often required to compile large volumes of information on short notice, creating unnecessary stress, workflow inefficiencies, and delays.
              </p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton developed live tracking documents that recorded upcoming medical appointments and summarized key health information for each child in real time. Social workers responsible for each case were granted access to the documents while assigned to the case.
              </p>
              <h4 className="sub-sub-title">Outcome:</h4>
              <p className="rn-text-projects">Court related medical documentation became readily accessible, reducing last minute requests and improving collaboration between nursing staff and case planning teams.
              </p>
              <hr className="rn-hr"/>
               <h3 className="sub-title">7. Nursing Training and Digital Workflow Documentation</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">New nurses entering the program often struggled to learn internal systems and documentation procedures, including the electronic medical record system, email processes, fax procedures, and required forms. This resulted in inconsistent workflows and documentation errors.
              </p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton developed a series of instructional training videos accompanied by detailed written guides with screenshots and step by step instructions. The training materials covered EMR workflows, communication systems, and documentation standards. These resources were introduced during weekly nursing meetings through presentations and live demonstrations. Victor Stanton also provided individual training sessions to reinforce protocols and support nurses who required additional guidance.
              </p>
              <h4 className="sub-sub-title">Outcome:</h4>
              <p className="rn-text-projects">The training materials created a standardized learning system for the nursing team. Nurses gained consistent access to educational resources, which improved documentation accuracy and strengthened operational consistency across the program.
              </p>
              <hr className="rn-hr"/>
               <h3 className="sub-title">8. Pharmacy Coordination and Nurse Assignment Tracking</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">The program's pharmacy frequently struggled to identify which nurse was responsible for a specific patient when medication issues arose. This often caused communication delays that could last days or weeks, potentially delaying medical care.
              </p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton expanded the live patient tracking spreadsheet to include the assigned nurse for each child. Access to the document was provided to the pharmacy team so they could quickly identify and contact the appropriate nurse.
              </p>
              <h4 className="sub-sub-title">Outcome:</h4>
              <p className="rn-text-projects">Pharmacy staff were able to immediately determine the responsible nurse for each patient. This significantly reduced communication delays and improved medication coordination for children in the program.
              </p>
              <hr className="rn-hr"/>
                <h3 className="sub-title">9. Nurse Caseload Compliance and Preventive Care Tracking</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">There was no structured system to verify that children were receiving all required healthcare services, including primary care visits, dental appointments, psychiatric evaluations, psychological services, and specialist care.
              </p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton created individualized caseload tracking spreadsheets for each nurse. These tools allowed nurses to monitor completion of required services for every child on their caseload and ensured important medical visits were not missed.
              </p>
              <h4 className="sub-sub-title">Outcome:</h4>
              <p className="rn-text-projects">The system improved organization and accountability within the nursing team. It also helped ensure timely medical care and contributed to exceptional results in two external program audits that occurred during Victor Stanton's tenure.
              </p>
              <hr className="rn-hr"/>
              <h2 className="role">Victor Stanton - Pediatric Nurse</h2>
              <h2 className="place">Cayuga Centers - Unaccompanied Children's Program</h2>
              <h3 className="sub-title">1. Vaccine Documentation Quality Improvement Initiative</h3>
              <h4 className="sub-sub-title">Problem:</h4>
              <p className="rn-text-projects">Medical records received from foster care agencies across the United States frequently contained vaccine documentation errors, including incorrect vaccine names, missing vaccines, and incomplete immunization records.</p>
              <h4 className="sub-sub-title">Solution:</h4>
              <p className="rn-text-projects">Victor Stanton volunteered to serve as the nursing liaison between the foster care agency and government oversight bodies responsible for immunization records. He developed expertise in the process required to correct vaccine documentation and trained other nurses on how to resolve these issues.</p>
              <p className="rn-text-projects">To further improve accuracy, Victor Stanton designed Excel tracking systems to monitor vaccine completion, identify missing immunizations, and track corrections made to patient records.</p>
              <h4 className="sub-sub-title">Outcome:</h4>
              <p className="rn-text-projects">Errors that previously remained unresolved were corrected quickly, often within one week. The tracking systems improved immunization accuracy, reduced documentation errors, and strengthened patient safety.</p>
              <hr className="rn-hr"/>
          </div>
      </main>
    </>
  )
}

export default Nursing;