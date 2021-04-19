import React, { PureComponent } from 'react';
import './BodyComponent.css';
const BodyComponent = () => {
  return (
    <div className="about">
      <h1 className="red-text uppercase">About me</h1>
      <div className="text-body">
        <p>
          Telematics Engineer from the District University Francisco Jose de
          Caldas, Software developer with experience in solution problems
          quickly and effectively. With constant curiosity and craving for
          continuous learning, aware that work gives best results with
          environments friendly and communicative.
        </p>
        <p>
          I believe that being immersed in a technological field, the
          skillslearning abilities and self-determination are the key to a good
          professional development and growth
        </p>
      </div>
    </div>
  );
};

export default BodyComponent;
