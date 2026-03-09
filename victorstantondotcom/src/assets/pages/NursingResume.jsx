import { useEffect } from "react";
import "./NursingResume.css"
import { Link } from "react-router";

function NursingResume({simpleNav, setSimpleNav}) {

useEffect(() => {
  setSimpleNav(true);

  return () => {
    setSimpleNav(false);
  };
}, []);

  return (
    <>
    <section id="resume-section">
        <h1 id="resume-name">Victor Stanton</h1>
        <p className="contact-info">Ossining, NY 10562 | Victor.Stanton@gmail.com | 917-6021606</p>
        <Link to="/nursing" id="nursing-link">www.VictorStanton.com</Link>

        <h3>PROFESSIONAL SUMMARY</h3>
        <p>Registered Nurse and Nurse Case Manager Supervisor with experience in pediatric foster care, nursing home and rehab admissions, and acute care telemetry units across New York City. Known for strong leadership, precise documentation, bilingual Spanish-English communication, and process improvement using digital tools. Experience building healthcare documentation and tracking systems that support accurate reporting, efficient workflows, and improved patient outcomes.</p>
        <h3>LICENSES & CERTIFICATIONS</h3>
        <ul>
            <li>
                New York State Registered Professional Nurse (RN): License #812133-01 (2021): Exp: January 31, 2007
            </li>
            <li>Basic Life Support (BSL): (2025) Exp: January 31, 2007</li>
        </ul>
        <h3>EDUCATION </h3>
        <b>University of Mount Saint Vincent | Bachelor of Science Degree in Nursing | Bronx, NY | 2021
        </b>
        <ul>
            <li>Magna Cum Laude, GPA 3.70, Sigma Theta Tau </li>
        </ul>
        <b>Marquette University | Bachelor of Science Degree in Exercise Science | Milwaukee, WI | 2007</b>
        <h3>CLINICAL & LEADERSHIP EXPERIENCE</h3>
        <p><b>AI Prototyper | </b>Matter Neuroscience | Remote | May 2025 - Aug 2025 </p>
        <ul>
            <li>Co-designed and built a multi-agent pipeline to ingest medical biomarker data and generate literature-reviewed reports with scoring and citations</li>
            <li>Implemented retrieval and summarization agents using PubMed and Semantic Scholar to aggregate and deduplicate sources</li>
            <li>Prototyped agent graphs in Flowise and introduced reviewer checkpoints to improve report reproducibility and accuracy</li>
        </ul>
        <p><b>Children's Aid | </b>Nurse Case Manager Supervisor | Bronx/Brooklyn, NY | Oct 2023 - May 2025 
        </p>
        <ul>
            <li>Led digitalization of the Medical Foster Care program and authored a 100+ page onboarding manual, improving training consistency and maintaining full nurse retention during my tenure</li>
            <li>Built tracking system for documentation, ensuring timely uploads of required forms, supporting two audits that achieved over 95% scores, the highest in the NYC nonprofit's history
            </li>
            <li>Developed tutorials and job aids that improved onboarding and process clarity for 20+ nursing staff
            </li>
            <li>Acted as primary tech support for mobile phones, computers, and internet connectivity for clinical staff, coordinating with IT when needed</li>
            <li>Supported Spanish-speaking families by translating care plans and improving communication workflows</li>
        </ul>
        <p><b>Cayuga Centers | </b> Pediatric Nurse | New York, NY | Aug 2022 - Sep 2023 
        </p>
        <ul>
            <li>Served as liaison with government agencies to correct vaccine documentation errors, ensuring 100% compliance within required timelines</li>
            <li>Maintained immunization and medication records for foster care programs, supporting accurate reporting for 200+ children
            </li>
            <li>Created and maintained spreadsheets to track medications and immunizations, reducing errors in reporting and distribution
            </li>
            <li>Coordinated intake, testing, and care planning for high-volume clinic days, collaborating with interdisciplinary teams</li>
        </ul>
        <p><b>Northern Manhattan Rehab & Nursing Center |  </b> Charge Nurse | New York, NY | Feb 2022 - Aug 2022 
        </p>
        <ul>
            <li>Led nursing staff during admissions and rehabilitation care planning</li>
            <li>Conducted assessments, admissions, transfers, and discharge education for patients and families
            </li>
            <li>Collaborated with therapists and physicians to implement individualized care plans
            </li>
        </ul>
        <p><b>James J. Peters Veterans Affairs Medical Center |  </b> Charge Nurse | New York, NY | Aug 2021 - Jan 2022 
        </p>
        <ul>
            <li>Managed telemetry and med-surg patient care, including admissions, assessments, IV placement, and lab work</li>
            <li>Conducted charge nurse duties such as morning huddles, patient assignment delegation, and documentation review
            </li>
            <li>Educated patients and families on treatment plans and recovery strategies
            </li>
        </ul>
        <h3>TECHNICAL & ADMINISTRATIVE SKILLS</h3>
        <h4>Clinical & Documentation Skills</h4>
        <ul>
            <li>Immunization Record Management, Vaccine Administration, Medication Administration Records</li>
            <li>EMR Systems: EPIC, eClinicalWorks, Medent, NetSmart</li>
            <li>Patient Education, Cultural Competence, Bilingual Communication (Spanish-English)</li>
        </ul>
        <h4>Workflow & Leadership Skills</h4>
        <ul>
            <li>Process Improvement, Training Development, Audit Preparation</li>
            <li>Leadership, Team Coordination, Clinic Workflow Optimization</li>
        </ul>
        <h4>Technical Computer Skills</h4>
        <ul>
            <li>Software Development (MERN Stack): MongoDB, Express.js, React.js, Node.js, Javascript, HTML, CSS</li>
            <li>Microsoft Office 365 (Excel, Word, Outlook, PowerPoint)</li>
            <li>Google Workspace (Sheets, Docs, Drive)</li>
            <li>PDF (Adobe) editing and document management</li>
            <li>Cloud file organization and secure record management</li>
        </ul>
    </section>
    
    </>
  )

}

export default NursingResume;