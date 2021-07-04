import React from 'react';
import './portfolio.css';
import './projectsData.js';
import FooterLink from '../footerlink/FooterLink';
import Head from '../head/Head';
import { projectsData } from './projectsData.js';
import ProjectCard from './ProjectCard';
import Header from "../Header";
import { Card } from "react-bootstrap";




const Portfolio = () => {
    return(
        <div className='section-container'>
            <Head 
                heading='My projects'
                details="These are some of the projeects that I've worked on"
            />
          <div className="projects-card-container">
            {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                
                            />
                        );
                    }
                )}
            </div>


 
            <FooterLink
                phrase='Check out '
                link='the home page'
                toAdress='/Header'
            />
        </div>
    )

                };
export default Portfolio;

