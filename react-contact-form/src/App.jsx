import { useState } from "react";
import AboutYou from "./Components/AboutYou";
import BasicDetail from "./Components/BasicDetail";
import Education from "./Components/Education";
import OtherInfo from "./Components/OtherInfo";
import Skills from "./Components/Skills";
import SocialPresence from "./Components/SocialPresence";
import './Form.css'
import Submit from "./Components/Submit";

const Form = () => {
  const [mode, setMode] = useState(false);
  console.log(mode);
  return (
    <div className={mode === true ? 'body_dark':'body'}>
      <div className='row'>
        <h4>Data Form</h4>
        Temp Dark Mode
        <input type='checkbox' className='mx-1' onClick={() => setMode(!mode)} />
        <form className='d-flex justify-content-center'>
          <div className='col-12 col-md-10 my-2'>
            <BasicDetail />
            <Education />
            <SocialPresence />
            <AboutYou/>
            <Skills/>
            <OtherInfo/>
            <Submit/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
