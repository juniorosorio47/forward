import React from 'react';
import { BsGithub, BsLink } from 'react-icons/bs';
import Link from 'next/link';

import { WorkCardContainer, BackgroundGlass } from './styles';
import { ButtonsContainer, ButtonLink } from '../../pages/styles';
import Video from '../../components/Video';

interface IProjectProps{
  position:string;
  company:string;
  time:string;
  description:string;
  techs:string[];
  companyWebSite:string;
}

const WorkCard: React.FC<IProjectProps> = ({ position, company, time, description, techs, companyWebSite }) => {
  return <>
  {/* <BackgroundGlass/> */}
    <WorkCardContainer>
        <h2>{position}</h2>
        <h3>{company}</h3>
        <span>{time}</span>
        <p>{description}</p>
        <ul>
          {techs.map((tech) =>(
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <ButtonLink href={companyWebSite} target="_blank">Company website</ButtonLink>
    </WorkCardContainer>
        
  </>;
}

export default WorkCard;