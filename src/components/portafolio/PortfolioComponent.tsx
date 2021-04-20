import React, { useState, useEffect } from 'react';
import './style.css';
import mDefault from './img/default-logo.png';
import Prismic from '@prismicio/client';

const PortfolioComponent = () => {
  const [selectedProject, setSelectedProject] = useState<Project>();

  const [projects, setProjects] = useState<Project[]>([]);
  const apiEndpoint = 'https://kmacho-portofolio.cdn.prismic.io/api/v2';
  const Client = Prismic.client(apiEndpoint);
  const transformTechs = (mtech: any[]) => {
    const aux: string[] = [];
    mtech.forEach(e => {
      const a = e.techname[0].text;
      aux.push(a);
    });
    return aux;
  };
  const fetchData = async () => {
    const aux: Project[] = [];
    const response = await Client.query(
      Prismic.Predicates.at('document.type', 'projects')
    );
    if (response) {
      const results = response.results;
      results.forEach(e => {
        console.log('ee', e);
        const p: Project = {
          id: e.id,
          name: e.data.name[0].text,
          description: e.data.description[0].text,
          techs: transformTechs(e.data.techs),
          image: e.data.logo.url
        };
        aux.push(p);
      });
    }
    return aux;
  };
  useEffect(() => {
    const propp: Project[] = projects;
    fetchData().then(response => {
      setProjects(response);
    });
  }, []);

  return (
    <div className="content">
      <h1 className="red-text-opaque uppercase">Portofolio</h1>
      <div className="cards">
        <div className="viewer">
          <div className="medals">
            {projects
              ? projects.map(e => {
                  return (
                    <div
                      className={`medal ${
                        selectedProject && e.id == selectedProject.id
                          ? 'active'
                          : ''
                      }`}
                      onClick={() => {
                        setSelectedProject(e);
                      }}
                    >
                      <h1>{e.name}</h1>
                    </div>
                  );
                })
              : ''}
          </div>
          <div className="preview">
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
}
export default PortfolioComponent;
