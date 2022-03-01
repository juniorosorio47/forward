import React, { useCallback, useMemo, useRef } from 'react';
import Head from "next/head";
import { BsGithub } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { SiAboutdotme } from 'react-icons/si';
import { MdWorkOutline } from 'react-icons/md';
import { IoMdCode } from 'react-icons/io';
import { BiMailSend } from 'react-icons/bi';
import { FaLinkedinIn  } from 'react-icons/fa';
import { RiProfileLine  } from 'react-icons/ri';

import Background from '../components/Background';
import { Container, StartPage, ButtonsContainer, ButtonLink, Projects, Logo, AboutMe, Skills, SectionHeader, WorkExperiences, Profile, Description } from '../styles/portfolio/styles';
import ProjectCard from '../components/ProjectCard';
import Skill from '../components/Skill';
import WorkCard from '../components/WorkCard';

const Home: React.FC = () => {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperiencesRef = useRef(null);
  const aboutMeRef = useRef(null);


  const projectsList = useMemo( ()=>{
    return [
      {
        title:"Do Next",
        description:"This is a ToDo aplication that you can create how many lists you want. The lists are stored in the browser local storage.",
        githubLink:'https://github.com/juniorosorio47/forward/tree/main/src/pages/donext',
        liveLink:'/donext',
        youtubeId:"pu01yqBIBlE",
        tags:['NextJS', 'ReactJS', 'Javascript', 'Web Storage API', 'React Spring']
      },
      {
        title:"Timestamps Converter",
        description:"This is a simple converter to convert timestamps to human-frendly dates and vice versa.",
        githubLink:'https://github.com/juniorosorio47/forward/tree/main/src/pages/convert',
        liveLink:'/convert/timestamps',
        youtubeId:"pu01yqBIBlE",
        tags:['NextJS', 'ReactJS', 'Javascript','React Spring']
      },
      {
        title:"Calculator with history",
        description:"This app is a simple calculator that register the history at the aplication state.",
        githubLink:'https://github.com/juniorosorio47/forward/tree/main/src/pages/calculator',
        liveLink:'/calculator',
        youtubeId:"pu01yqBIBlE",
        tags:['NextJS', 'ReactJS', 'Javascript']
      },
      {
        title:"This Portfolio",
        description:"This portfolio is made in NextJS. It contains all the example projects on different pages, at the same NextJS server.",
        githubLink:'https://github.com/juniorosorio47/forward',
        liveLink:'/',
        youtubeId:"pu01yqBIBlE",
        tags:['NextJS', 'ReactJS', 'Web Storage API', 'React Spring', 'Three JS', 'Javascript']
      },
    ]
  },[])

  const skillsList = useMemo(() => {
    return [
      {
        logoSrc:"/javascript-icon.svg",
        name:"Javascript",
        yearsOfExperience:4,
        color:"#F0DB4F",
        techLink:"https://nodejs.org",
      },
      {
        logoSrc:"/reactjs-icon.svg" ,
        name:"React JS" ,
        yearsOfExperience:4,
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
        yearsOfExperience:4,
        color:"#8CC84B",
        techLink:"https://nodejs.org",
      },
      {
        logoSrc:"/python-icon.svg" ,
        name:"Python" ,
        yearsOfExperience:3,
        color:"#356B99",
        techLink:"https://python.org",
      },
      {
        logoSrc:"/java-icon.svg" ,
        name:"Java" ,
        yearsOfExperience:2,
        color:"#0D8AC7",
        techLink:"https://java.com",
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

  const workExperiencesList = useMemo( ()=>{
    return [
      {
        position:'Global IT Support',
        company:'Valoroso LTD',
        time:'April 2019 - Today',
        description:'Currently working at the company Valoroso - VOTT Platform Creating Video Experiences. Working with servers support and making improvements for servers management and monitoring, using the following programming languages and tools:',
        techs:['React', 'Javascript', 'NodeJS', 'Python', 'Ubuntu', 'Zabbix', 'Grafana', 'Kibana', 'Docker'],
        companyWebSite:"http://valorosoltd.com"
      },
      {
        position:'Full Stack Developer',
        company:'MaestroTech Technology Solutions Ltda',
        time:'December 2018 - March 2021',
        description:'Worked at this company as a freelancer a full-stack developer, working with the following programming languages and technologies:',
        techs:['React', 'Javascript', 'NodeJS', 'Python', 'Java', 'Spring', 'PostgreSQL'],
        companyWebSite:"http://maestrotechsoft.com"
      },
      {
        position:'Full Stack Developer Internship',
        company:'ITP - Itaipu Technological Park',
        time:'October 2018 - April 2019',
        description:'Internship at the Latin American Center for Open Technologies - CELTAB. Working with full stack software development, with the following languages and tools:',
        techs:['React', 'React Native', 'Javascript', 'NodeJS', 'Ubuntu',  'Python', 'MongoDB', 'PostgreSQL', 'Docker'],
        companyWebSite:"https://www.pti.org.br"
      },
    ]
  },[])

  const educationalBackgroundList = useMemo( ()=>{
    return [
        {
            institution:'Uninassal',
            course:'Technologist in Systems Analysis',
            time:'2021-2022 (Not finished)',
            certificate:'',
        },
        {
            institution:'Alura',
            course:'Front-End Developer Career',
            time:'2019',
            certificate:'https://cursos.alura.com.br/user/dari-oj/career/desenvolvedor-front-end/certificate',
        },
        {
            institution:'Hcode Treinamentos',
            course:'PHP 7 Complete Course',
            time:'2018',
            certificate:'https://www.udemy.com/certificate/UC-V0QBAUB6/',
        },
        {
            institution:'Dr. Hussein Alrubaye',
            course:'Java Developer Course',
            time:'2019',
            certificate:'https://www.udemy.com/certificate/UC-8AWW7WS1/',
        },
    ]
  },[])


  const goToSection = useCallback((ref)=>{
    return ref.current.scrollIntoView({ behavior: 'smooth' });
  },[]);

  return <Container>
      <Background />
      <StartPage>
        <Logo>
          <img src="/logo-white.svg" alt="logo" />
        </Logo>
        <main>
          <h1>Dari Osorio Junior</h1>
          <h2>Full Stack Developer</h2>
          <p>Thinking Forward!</p>
        </main>
        
        <ButtonsContainer>
          <ButtonLink onClick={()=>goToSection(projectsRef)}> <IoMdCode/> Projects</ButtonLink>
          <ButtonLink onClick={()=>goToSection(skillsRef)}> <GiSkills/> {`Skills & XP`}</ButtonLink>
          <ButtonLink onClick={()=>goToSection(aboutMeRef)}> <SiAboutdotme /> About Me</ButtonLink>
          <ButtonLink href={'/resume'}> <RiProfileLine /> Resume</ButtonLink>
        </ButtonsContainer>
      </StartPage>
      <Projects ref={projectsRef}>
        <SectionHeader>
          <h1> <IoMdCode/> Projects</h1>
          <p>These are some sample projects that I made:</p>
        </SectionHeader>
        <main>
          {projectsList.map(({title, description, githubLink, liveLink, youtubeId, tags}, index)=>(

            <ProjectCard 
              key={index}
              title={title}
              description={description}
              githubLink={githubLink}
              liveLink={liveLink}
              youtubeId={youtubeId}
              tags={tags}
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
        
        <main>
          <div id="skillsHeader">
            <p>Technologies</p> 
            <p>Years of experience</p>
          </div>
          {skillsList.map(({logoSrc, name, yearsOfExperience, color, techLink}, index)=>(
            <Skill 
              key={index}
              logoSrc={logoSrc}
              name={name}
              yearsOfExperience={yearsOfExperience}
              color={color}
              techLink={techLink}
            />
          ))}
        </main>
      </Skills>

      <WorkExperiences ref={workExperiencesRef}>
        <SectionHeader>
            <h2> <MdWorkOutline/> Working Experiences</h2>
            <p>These are my most relevant working experiences:</p>
        </SectionHeader>
        <main>
          {workExperiencesList.map(({position, company, time, description, techs, companyWebSite}, index)=>(
            <WorkCard 
              key={index}
              position={position}
              company={company}
              time={time}
              description={description}
              techs={techs}
              companyWebSite={companyWebSite}
            />
          ))}
        </main>

      </WorkExperiences>

      <AboutMe ref={aboutMeRef}>
        <SectionHeader>
          <h1> <SiAboutdotme/> About Me</h1>
          <p>Something about me:</p>
        </SectionHeader>
        <main>
            <Profile>
              <img src="/profile.png" alt="Profile" />
              <h2>Dari Osorio Junior</h2>
              <span>Full Stack Developer</span>
              <div>
                <span>Educational Background</span>
                {educationalBackgroundList.map( ({institution, course, time, certificate})=>(
                    <div> 
                        <h3>{course}</h3>
                        <p>{institution} {certificate && <a href={certificate} target="_blank">(Certificate Link)</a>}</p>
                        <span>{time}</span>
                    </div>
                ) )}
              </div>

            </Profile>
            <Description>
              <h1>I am a Full-Stack Developer!</h1>

              <main>
                <p>
                  I'm a full-stack developer with experience in Javascript, React, React Native and Python. I really like programming, I always find a way to add programming in the companies I worked, for example, I currently work in a server support position, here I made internal systems to facilitate the work of the persons on the company. 
                </p>
                <p>I'm looking for a place to work with software development, where I can work full-time programming.</p>
              </main>
              <div>
                <h2>Get in touch:</h2>
                <ButtonsContainer>
                  <ButtonLink href="https://www.linkedin.com/in/dari-osorio-junior-developer/" target="_blank"> 
                    <FaLinkedinIn/> 
                    LinkedIn
                  </ButtonLink>
                  <ButtonLink href="mailto:juniorosorio47@gmail.com" target="_blank"> 
                    <BiMailSend/> 
                    E-mail
                  </ButtonLink>
                  <ButtonLink href="https://github.com/juniorosorio47" target="_blank"> 
                    <BsGithub/> 
                    Github
                  </ButtonLink>
                </ButtonsContainer>
              </div>
            </Description>
        </main>
      </AboutMe>
      
    </Container>;
}

export default Home;