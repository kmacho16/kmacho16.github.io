import React, { PureComponent, useState } from 'react';
import hvEn from './resource/HV-EN.pdf';
import hvEs from './resource/HV-ES.pdf';

import './BodyComponent.css';

const BodyComponent = () => {
  const [lang, setLan] = useState<string>('EN');
  const [btnText, setBtnText] = useState<string>('Get my CV');
  const downloadPdf = () => {
    var link = document.createElement('a');
    link.href = lang == 'ES' ? hvEs : hvEn;
    link.download = `JuanCamacho-${lang}.pdf`;
    link.dispatchEvent(new MouseEvent('click'));
  };
  return (
    <div className="about">
      <h1 className="red-text-opaque uppercase">About me</h1>
      <div className="text-body">
        <p>
          Telematics Engineer from the University Distrital Francisco Jose de
          Caldas de Caldas, Software developer with experience in solution
          problems quickly and effectively. With constant curiosity and craving
          for continuous learning, aware that work gives best results with
          environments friendly and communicative.
        </p>
        <p>
          I believe that being immersed in a technological field, the
          skillslearning abilities and self-determination are the key to a good
          professional development and growth
        </p>
      </div>
      <button className="get-cv-btn" onClick={downloadPdf}>
        {btnText} <span>&#128516;</span>
      </button>
      <div className="content-switch">
        <span className={lang == 'ES' ? 'lan-active' : 'lan'}>ES</span>
        <label className="switch">
          <input
            defaultChecked={true}
            type="checkbox"
            onChange={e => {
              if (e.target.checked) {
                setLan('EN');
                setBtnText('GET MY CV');
              } else {
                setLan('ES');
                setBtnText('Aquí está mi HV');
              }
            }}
          />
          <span className="slider round"></span>
        </label>
        <span className={lang == 'EN' ? 'lan-active' : 'lan'}>EN</span>
      </div>
    </div>
  );
};

export default BodyComponent;
