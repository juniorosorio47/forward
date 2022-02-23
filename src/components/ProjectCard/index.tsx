import React from 'react';
import { BsGithub, BsLink } from 'react-icons/bs';
import Link from 'next/link';

import { ProjectContainer, BackgroundGlass } from './styles';
import { ButtonsContainer, ButtonLink, Tag, TagFooter } from '../../pages/styles';
import Video from '../../components/Video';

interface IProjectProps{
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  youtubeId: string;
  tags: string[];
}

const ProjectCard: React.FC<IProjectProps> = ({ title, description, githubLink, liveLink, youtubeId, tags }) => {
  return <>
    <ProjectContainer>
        
        <Video 
            src={`https://www.youtube.com/embed/${youtubeId}`}
        />
        
        <h2>{title}</h2>
        <p>{description}</p>
        <TagFooter>
          {tags.map(item=>(
            <Tag>{item}</Tag>
          ))}
        </TagFooter>
        <ButtonsContainer>

          <ButtonLink href={githubLink} target="_blank"> 
              <BsGithub/> 
              Github
          </ButtonLink>

          <ButtonLink href={liveLink} target="_blank"> 
              <BsLink/> 
              Live
          </ButtonLink>

        </ButtonsContainer>
        <BackgroundGlass/>
    </ProjectContainer>
  </>;
}

export default ProjectCard;