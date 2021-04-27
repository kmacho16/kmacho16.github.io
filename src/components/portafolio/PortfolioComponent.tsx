import React, { useState, useEffect, FC, useRef } from 'react';
import './style.css';
import mDefault from './img/default-logo.png';

const PortfolioComponent: FC<{ portofolio: any[] }> = ({ portofolio = [] }) => {
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [projects, setProjects] = useState<Project[]>([]);
  const previewRef = useRef<null | HTMLDivElement>(null);
  const transformTechs = (mtech: any) => {
    return mtech[0].text.split(',');
  };
  useEffect(() => {
    portofolio.forEach(e => {
      const dateStart = new Date(e['date-start']);
      const dateFinish = new Date(e['date-end']);

      const p: Project = {
        id: e.name,
        name: e.name[0].text,
        description: e.description[0].text,
        techs: transformTechs(e.techs),
        image: e.logo.url,
        dateStart: `${dateStart.getUTCMonth() +
          1}/${dateStart.getUTCFullYear()}`,
        dateEnd: `${dateFinish.getUTCMonth() +
          1}/${dateFinish.getUTCFullYear()}`
      };
      setProjects(e => {
        const list = e.concat(p);
        return list;
      });
    });
  }, [portofolio]);

  return (
    <div className="content">
      <h1 className="red-text-opaque uppercase">Portofolio</h1>
      <div className="cards">
        <div className="viewer">
          <div className="preview" ref={previewRef}>
            {' '}
            {selectedProject ? (
              <div className="content-prev">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${
                      selectedProject.image ? selectedProject.image : mDefault
                    })`
                  }}
                ></div>
                <p>
                  {selectedProject.dateStart} - {selectedProject.dateEnd}
                </p>
                <p className="project-description">
                  {selectedProject.description}
                </p>
                <div className="tags">
                  {selectedProject.techs.map(e => {
                    return <div>{e}</div>;
                  })}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="medals">
            {projects
              ? projects.map(e => {
                  return (
                    <div
                      key={e.name}
                      className={`medal ${
                        selectedProject && e.id === selectedProject.id
                          ? 'active'
                          : ''
                      }`}
                      onClick={() => {
                        setSelectedProject(e);
                        if (previewRef && previewRef.current) {
                          previewRef.current.scrollIntoView();
                        }
                      }}
                    >
                      <h1>{e.name}</h1>
                    </div>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
interface Project {
  id: string;
  name: string;
  description: string;
  techs: string[];
  image?: any;
  dateStart?: string;
  dateEnd?: string;
}

export default PortfolioComponent;
