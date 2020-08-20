/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './styles.scss';
import './card.scss';
import './modal.scss';

import { FaChevronLeft, FaGithub } from 'react-icons/fa';
import api from '../../services/api';

interface Projects {
  _id: string;
  title: string;
  summary: string;
  description: string;
  source_code: string;
  image: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  source_code: string;
  image: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [project, setProject] = useState<Project>({
    title: '',
    description: '',
    _id: '',
    source_code: '',
    image: ''
  });

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      // console.log('projectos', projects);
    }).catch(error => {
      console.log('erro ao pegar projetos', error);
    })

  }, [projects]);
  
  function openModal() {
    const modal = window.document.querySelector('#modal');
    modal?.classList.add('show');
  }
  
  function closeModal() {
    const modal = window.document.querySelector('#modal');
    modal?.classList.add('no-show');
    setTimeout(() => {
      modal?.classList.remove('show');
      modal?.classList.remove('no-show');
    }, 400);
  }

  async function openModalProject(idProject: string) {
    api.get(`projects/${idProject}`).then(({data}) => {
      setProject({ _id: data._id, title: data.title, description: data.description, source_code: data.source_code, image: data.image });
      // console.log('vamo de bike mlk', idProject);
    }).catch(err => console.log('nao foi possivel atualizar os valores do projeto', err));

    const modalProject = window.document.querySelector('#modal-project');
    modalProject?.classList.add('show');
  }

  function closeModalProject() {
    const modalProject = window.document.querySelector('#modal-project');
    modalProject?.classList.add('no-show');
    setTimeout(() => {
      modalProject?.classList.remove('show');
      modalProject?.classList.remove('no-show');
    }, 400);
  }

  return (
    <div id="projects" className="projects" data-block="projects">
        <h1 className="block-name">Projetos</h1>

        <div className="card-container">

          <aside>
            <label className="img">
            {
              projects.map((project, index) => {
                if (index === 0) return <img key={project.image} src={project.image} alt="project-image haha"/>
                return false
              })
            }
            </label>
          </aside>

          <main>
            {
              projects.map((project, index) => {
                if (index === 0) {
                  return (
                    <React.Fragment key={project._id}>
                    <div className="card-title">{project.title}</div>
                    <div className="card-description">{project.summary}</div>

                    <div className="button-inline">
                      <button className="button" onClick={() => openModalProject(project._id)}>Ler Mais</button>
                      <button className="button" onClick={openModal}>Mais Projetos</button>
                    </div>
                    </React.Fragment>
                  )
                }

                return false
              })
            }
          
            {/* <div className="sliders">
              <label className="tap tap-1"></label>
              <label className="tap tap-2"></label>
              <label className="tap tap-3"></label>
            </div> */}
          </main>

        </div>

        

        <div className="modal-container" id="modal-project" >
              <div className="modal">
                <header>
                  <FaChevronLeft color="#ddd" size={24} className="modal-icon" onClick={closeModalProject} />
                  <h3>{project.title}</h3>
                  <a href={project.source_code} target="_blank" rel="noopener noreferrer">
                    <FaGithub color="#ddd" size={36} className="modal-icon"/>
                  </a>
                </header>

                <main>
                  <label className="project-img">
                    <img src={project.image} alt="project-image"/>
                  </label>

                  <p>
                    {project.description}
                  </p>
                </main>

              </div>
          </div>


        <div className="modal-container" id="modal">
        <div className="modal">
          <header>
            <FaChevronLeft color="#ddd" size={24} className="modal-icon" onClick={closeModal} />
            <h3>Todos os Projetos</h3>
          </header>

          <main>
          {
            projects.map(project => (
              <div className="card-container card-scale" key={project._id}>
                <aside>
                  <label className="img">
                    <img src={project.image} alt="project-image"/>
                  </label>
                </aside>

                <main>
                  <div className="card-title">{project.title}</div>
                  <div className="card-description">{project.summary}</div>

                  <button className="button" onClick={() => openModalProject(project._id)}>Ler Mais</button>
                  
                </main>
              </div>   
            ))
          }
          </main>
          </div>
        </div>

    </div>

  );
}

export default Projects;