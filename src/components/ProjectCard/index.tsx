import React from 'react';
import { BsGithub, BsLink } from 'react-icons/bs';
import Link from 'next/link';

import { ProjectContainer } from './styles';
import { ButtonsContainer, ButtonLink, Tag, TagFooter } from '../../styles/portfolio/styles';
import Video from '../../components/Video';

interface IProjectProps{
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  youtubeId: string;
  tags: string[];
  tagsColor: string;
}

const ProjectCard: React.FC<IProjectProps> = ({ title, description, githubLink, liveLink, youtubeId, tags, tagsColor }) => {
  return <>
    <ProjectContainer>
        
        <Video 
            src={`https://www.youtube.com/embed/${youtubeId}`}
        />
        
        <main>
          <h2>{title}</h2>
          <p>{description}</p>
          <TagFooter>
            {tags.map((item, index)=>(
              <Tag color={tagsColor} key={index}>{item}</Tag>
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
        </main>
    </ProjectContainer>
  </>;
}

export default ProjectCard;