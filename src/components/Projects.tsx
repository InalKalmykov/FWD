import React from 'react';
import { Project } from '../interfaces';

const Projects: React.FC = () => {
  const projects: Project[] = [
    { id: 1, name: 'Project 1', description: 'Description for Project 1' },
    { id: 2, name: 'Project 2', description: 'Description for Project 2' },
    { id: 3, name: 'Project 3', description: 'Description for Project 3' },
  ];

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
