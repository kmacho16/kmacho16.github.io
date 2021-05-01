import React, { useState, FC, useEffect } from 'react';
import SkillBarComponent from '../skill-bar';
import style from './style.module.css';
import SkillBar from '../../model/SkillBar';
const SkillsComponent: FC<{ [id: string]: any }> = ({ skills }) => {
  const [skillsBack, setSkillsBack] = useState<SkillBar[]>([]);
  const [skillsFront, setSkillsFront] = useState<SkillBar[]>([]);
  const [skillsFramework, setSkillsFramework] = useState<SkillBar[]>([]);

  useEffect(() => {
    if (skills) {
      let back = skills.filter((e: any) => e.type == 'Back');
      let front = skills.filter((e: any) => e.type == 'Front');
      let framework = skills.filter((e: any) => e.type == 'Framework');
      back = mapResponse('default', back);
      front = mapResponse('blue', front);
      framework = mapResponse('red', framework);
      setSkillsBack(back);
      setSkillsFront(front);
      setSkillsFramework(framework);
    }
  }, [skills]);
  const mapResponse = (color: string, array: []) => {
    return array.map((e: any) => {
      return {
        text: e.title[0].text,
        size: e.size,
        duration: e.duration[0].text,
        color
      };
    });
  };
  return (
    <>
      <h1 className="red-text-opaque uppercase">Skills</h1>
      <div className={style.container}>
        <div className={style.row}>
          <h2>Backend</h2>
          {skillsBack.map((e: any) => {
            return (
              <SkillBarComponent
                key={e.text}
                duration={e.duration}
                text={e.text}
                size={e.size}
              />
            );
          })}
        </div>
        <div className={style.row}>
          <h2>Fronted</h2>
          {skillsFront.map((e: any) => {
            return (
              <SkillBarComponent
                key={e.text}
                duration={e.duration}
                text={e.text}
                size={e.size}
                color={e.color}
              />
            );
          })}
        </div>
        <div className={style.row}>
          <h2>Framweorks</h2>
          {skillsFramework.map((e: any) => {
            return (
              <SkillBarComponent
                key={e.text}
                duration={e.duration}
                text={e.text}
                size={e.size}
                color={e.color}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;
