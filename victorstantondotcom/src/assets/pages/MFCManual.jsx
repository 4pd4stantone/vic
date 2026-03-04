import Page1 from '../images/MFCmanual1.jpg';
import Page2 from '../images/MFCmanual2.jpg';
import Page3 from '../images/MFCmanual3.jpg';
import './MFCManual.css';
import { useEffect } from "react";

function MFCManual({simpleNav, setSimpleNav}) {

useEffect(() => {
  setSimpleNav(true);

  return () => {
    setSimpleNav(false);
  };
}, []);

    return (
        <>
            <div id='manual'>
                <h1 id="manual-title">Orientation Manual</h1>
                <img className="manual-img" src={Page1} alt="Cover of MFC NCM Orientation Manual" />
                <img className="manual-img" src={Page2} alt="Table of Contents" />
                <img className="manual-img" src={Page3} alt="Table of Contents continued" />
            </div>
        </>
    )

}

export default MFCManual;