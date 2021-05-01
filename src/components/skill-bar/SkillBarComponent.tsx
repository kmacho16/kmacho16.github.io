import React, { FC } from 'react';
import style from './style.module.css';
import { number } from 'prop-types';
import SkillBar from '../../model/SkillBar';

const SkillBarComponent: FC<SkillBar> = ({
  size,
  text,
  color = 'default',
  duration
}) => {
  const renderStats = () => {
    let active = style.pointActiveDefault;
    let inActive = style.pointLessDefault;
    switch (color) {
      case 'blue':
        active = style.pointActiveBlue;
        inActive = style.pointLessBlue;
        break;
      case 'red':
        active = style.pointActiveRed;
        inActive = style.pointLessRed;
        break;
    }
    const stat = [];
    for (let i = 0; i < 10; i++) {
      stat.push(
        <div
          key={`ii${i}`}
          className={`${style.point} ${i < size ? active : inActive}`}
        ></div>
      );
    }
    return stat;
  };
  return (
    <div className={style.container}>
      <span className={style['title-skill']}>{text}</span>
      <span className={style['title-experience']}>({duration})</span>
      <br />
      {renderStats()}
    </div>
  );
};

export default SkillBarComponent;
