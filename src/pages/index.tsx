import React, { useCallback, useMemo, useRef } from 'react';
import Head from "next/head";
import { BsGithub } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { SiAboutdotme } from 'react-icons/si';
import { MdWorkOutline } from 'react-icons/md';
import { IoMdCode } from 'react-icons/io';

import Background from '../components/Background';
import { Container, StartPage, ButtonsContainer, ButtonLink, Projects, Logo, AboutMe, Skills, SectionHeader, WorkExperiences } from './styles';
import ProjectCard from '../components/ProjectCard';
import Skill from '../components/Skill';
import WorkCard from '../components/WorkCard';

const Home: React.FC = () => {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperiencesRef = useRef(null);
  const aboutMeRef = useRef(null);

  const workExperiencesList = useMemo( ()=>{
    return [
      {
        position:'Global IT Support',
        company:'Valoroso LTD',
        time:'April 2019 - Today',
        description:'Currently working at the company Valoroso - VOTT Platform Creating Video Experiences. Working with servers support and making improvements for servers management and monitoring, using the following programming languages and tools:',
        techs:['Python', 'Javascript', 'NodeJS', 'Ubuntu', 'Zabbix', 'Grafana', 'Kibana', 'Docker'],
      },
      {
        position:'Global IT Support',
        company:'Valoroso LTD',
        time:'April 2019 - Today',
        description:'Currently working at the company Valoroso - VOTT Platform Creating Video Experiences. Working with servers support and making improvements for servers management and monitoring, using the following programming languages and tools:',
        techs:['Python', 'Javascript', 'NodeJS', 'Ubuntu', 'Zabbix', 'Grafana', 'Kibana', 'Docker'],
      },
      {
        position:'Global IT Support',
        company:'Valoroso LTD',
        time:'April 2019 - Today',
        description:'Currently working at the company Valoroso - VOTT Platform Creating Video Experiences. Working with servers support and making improvements for servers management and monitoring, using the following programming languages and tools:',
        techs:['Python', 'Javascript', 'NodeJS', 'Ubuntu', 'Zabbix', 'Grafana', 'Kibana', 'Docker'],
      },
    ]
  },[])

  const projectsList = useMemo( ()=>{
    return [
      {
        title:"Do Next",
        description:"This is a ToDo aplication that you can create how many lists you want. The lists are stored in the browser local storage.",
        githubLink:'https://github.com/juniorosorio47/forward/tree/main/src/pages/donext',
        liveLink:'/donext',
        youtubeId:"pu01yqBIBlE",
      },
      {
        title:"Timestamps Converter",
        description:"This is a simple converter to convert timestamps to human-frendly dates and vice versa.",
        githubLink:'https://github.com/juniorosorio47/forward/tree/main/src/pages/convert',
        liveLink:'/convert/timestamps',
        youtubeId:"pu01yqBIBlE",
      },
    ]
  },[])

  const skillsList = useMemo( ()=>{
    return [
      {
        logoSrc:"/javascript-icon.svg",
        name:"Javascript",
        yearsOfExperience:3,
        color:"#F0DB4F",
        techLink:"https://nodejs.org",
      },
      {
        logoSrc:"/reactjs-icon.svg" ,
        name:"React JS" ,
        yearsOfExperience:3,
        color:"#00D8FF",
        techLink:"https://reactjs.org",
      },
      {
        logoSrc:"/reactjs-icon.svg" ,
        name:"React Native" ,
        yearsOfExperience:2,
        color:"#61DAFB",
        techLink:"https://reactnative.dev",
      },
      {
        logoSrc:"/nodejs-icon.svg" ,
        name:"Node JS" ,
        yearsOfExperience:3,
        color:"#8CC84B",
        techLink:"https://nodejs.org",
      },
      {
        logoSrc:"/python-icon.svg" ,
        name:"Python" ,
        yearsOfExperience:2,
        color:"#356B99",
        techLink:"https://python.org",
      },
      {
        logoSrc:"/docker-icon.svg" ,
        name:"Docker" ,
        yearsOfExperience:2,
        color:"#1396C3",
        techLink:"https://docker.com",
      }
    ]
  },[])


  const goToSection = useCallback((ref)=>{
    return ref.current.scrollIntoView({ behavior: 'smooth' });
  },[]);

  return <> 
    <Head>
      <title>Dari Osorio Junior</title>
    </Head>
    <Container>
      <Background />
      <StartPage>
        <Logo>
          <img src="/logo-white.svg" alt="logo" />
        </Logo>
        <h1>Dari Osorio Junior</h1>
        <h2>Full Stack Developer</h2>
        <p>Thinking Forward!</p>
        <ButtonsContainer>
          <ButtonLink onClick={()=>goToSection(projectsRef)}> <IoMdCode/> Projects</ButtonLink>
          <ButtonLink onClick={()=>goToSection(skillsRef)}> <GiSkills/> Skills</ButtonLink>
          <ButtonLink onClick={()=>goToSection(aboutMeRef)}> <SiAboutdotme /> About Me</ButtonLink>
        </ButtonsContainer>
      </StartPage>
      <Projects ref={projectsRef}>
        <SectionHeader>
          <h1> <IoMdCode/> Projects</h1>
          <p>These are some example projects that I made:</p>
        </SectionHeader>
        <main>
          {projectsList.map(({title, description, githubLink, liveLink, youtubeId})=>(

            <ProjectCard 
              title={title}
              description={description}
              githubLink={githubLink}
              liveLink={liveLink}
              youtubeId={youtubeId}
            />
            
          ))}
        </main>

        <ButtonsContainer id="githubProfileButton">
          <ButtonLink href="https://github.com/juniorosorio47?tab=repositories" target="_blank"> 
            <BsGithub/> 
            See all on Github
          </ButtonLink>
        </ButtonsContainer>

      </Projects>

      <Skills ref={skillsRef}>
        <SectionHeader>
          <h1> <GiSkills/> Skills {'&'} XP</h1>
          <p>These are my main skills:</p>
        </SectionHeader>
        <div id="skillsHeader">
          <p>Technologies</p> 
          <p>Years of experience</p>
        </div>
        <div>
          {skillsList.map(({logoSrc, name, yearsOfExperience, color, techLink})=>(
            <Skill 
              logoSrc={logoSrc}
              name={name}
              yearsOfExperience={yearsOfExperience}
              color={color}
              techLink={techLink}
            />
          ))}
        </div>
      </Skills>

      <WorkExperiences ref={workExperiencesRef}>
        <SectionHeader>
            <h1> <MdWorkOutline/> Working Experiences</h1>
            <p>These are my work experiences:</p>
        </SectionHeader>
        <main>
          {workExperiencesList.map(({position, company, time, description, techs})=>(
            <WorkCard 
              position={position}
              company={company}
              time={time}
              description={description}
              techs={techs}
            />
          ))}
        </main>

      </WorkExperiences>

      <AboutMe ref={aboutMeRef}>
        <SectionHeader>
          <h1> <SiAboutdotme/> About Me</h1>
          <p>Something about me:</p>
        </SectionHeader>
      </AboutMe>
      
    </Container>
    
  </>;
}

export default Home;