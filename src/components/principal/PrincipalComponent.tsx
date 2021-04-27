import React, { FC, useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from './img/crop.jpeg';

import './PrincipalComponent.css';
const PrincipalComponent: FC<{ [id: string]: any }> = ({ avatar }) => {
  const [type, setType] = useState<string>('');
  const message: string[] = ['Backend', 'Fronted', 'FullStack'];
  const [position, setPosition] = useState<number>(0);
  const [finishText, setFinishText] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  let i = 0;
  let speed = 80;
  let speedErase = 100;
  let cicle = [1000, 1000, 5000];
  let out = '';
  const typeWriter = () => {
    if (i < message[position].length) {
      out += message[position].charAt(i);
      setType(out);
      i++;
      setCount(i);
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        setFinishText(true);
      }, cicle[position]);
    }
  };
  const redirectTo = (url: string) => {
    window.open(url, '_blank');
  };
  const deleteWriter = () => {
    if (i > 0) {
      out = out.slice(0, -1);
      i--;
      setType(out);
      setTimeout(deleteWriter, speedErase);
    } else {
      if (position < message.length - 1) {
        setPosition(position + 1);
      } else {
        setPosition(0);
      }

      setFinishText(false);
    }
  };

  useEffect(() => {
    if (finishText) {
      i = count;
      out = message[position];
      deleteWriter();
    } else {
      setType('');
      typeWriter();
    }
  }, [finishText]);
  return (
    <div>
      <img className="avatar" src={avatar ? avatar : logo} alt="" />
      <h1>
        Hi, I'm Juan<span className="red-text">Kmacho</span>{' '}
      </h1>
      <h1>
        <span className="red-text">{type}</span> | Developer
      </h1>
      <div>
        <FaLinkedin
          onClick={() => {
            redirectTo('https://www.linkedin.com/in/juan-kmacho/');
          }}
          className="icons"
          size="1.5em"
        />
        <FaGithub
          onClick={() => {
            redirectTo('https://github.com/kmacho16');
          }}
          className="icons"
          size="1.5em"
        />
        <FaEnvelope
          onClick={() => {
            redirectTo('mailto:jccamfer@gmail.com');
          }}
          className="icons"
          size="1.5em"
        />
      </div>
    </div>
  );
};

export default PrincipalComponent;
