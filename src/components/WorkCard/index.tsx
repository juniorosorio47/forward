import React from 'react';
import { BsGithub, BsLink } from 'react-icons/bs';
import Link from 'next/link';

import { WorkCardContainer, BackgroundGlass } from './styles';
import { ButtonsContainer, ButtonLink } from '../../pages/styles';
import Video from '../../components/Video';

interface IProjectProps{
  position:string,
  company:string,
  time:string,
  description:string,
  techs:string[]
}

const WorkCard: React.FC<IProjectProps> = ({ position, company, time, description, techs }) => {
  return <>
    <WorkCardContainer>
        <h2>{position}</h2>
        <h3>{company}</h3>
        <span>{time}</span>
        <p>{description}</p>
        <ul>
          {techs.map((tech) =>(
            <li>{tech}</li>
          ))}
        </ul>
        <a href="http://valorosoltd.com" target="_blank">Company website</a>
        <BackgroundGlass/>
    </WorkCardContainer>
  </>;
}

export default WorkCard;