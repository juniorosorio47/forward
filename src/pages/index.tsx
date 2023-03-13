import Head from "next/head";
import React, { useCallback, useRef } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { IoMdCode } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';
import { RiProfileLine } from 'react-icons/ri';
import { SiAboutdotme } from 'react-icons/si';


import Background from '../components/Background';
import ProjectCard from '../components/ProjectCard';
import Skill from '../components/Skill';
import WorkCard from '../components/WorkCard';
import { AboutMe, Button, ButtonLink, ButtonsContainer, Container, Description, Logo, Profile, Projects, SectionHeader, Skills, StartPage, WorkExperiences } from '../styles/portfolio/styles';


import useOnScreen from '../hooks/useOnScreen';
import educationalBackgroundList from '../utils/educationalBackgroundList';
import projectsList from '../utils/projectsList';
import skillsList from '../utils/skillsList';
import workExperiencesList from '../utils/workExperiencesList';


const Home: React.FC = () => {
  const projectsRef = useRef(null);
  const projectsRefValue = useOnScreen(projectsRef);
  const skillsRef = useRef(null);
  const skillsRefValue = useOnScreen(skillsRef);
  const workExperiencesRef = useRef(null);
  const workExperiencesRefValue = useOnScreen(workExperiencesRef);
  const aboutMeRef = useRef(null);
  const aboutMeRefValue = useOnScreen(aboutMeRef);

  const goToSection = useCallback((ref) => {
    return ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return <Container>

    <Background />
    <Head>
      <title>Dari Osorio Junior</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content="Dari Osorio Junior, I am a full-stack developer." />
    </Head>
    <StartPage>
      <Logo>
        <img
          src='https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/logo-white.svg'
          alt="logo"
        />
      </Logo>
      <main>
        <h1>Dari Osorio Junior</h1>
        <h2>Full Stack Developer</h2>
        <p>Thinking Forward!</p>
      </main>

      <ButtonsContainer>
        <Button onClick={() => goToSection(projectsRef)}> <IoMdCode /> Projects</Button>
        <Button onClick={() => goToSection(skillsRef)}> <GiSkills /> {`Skills & XP`}</Button>
        <Button onClick={() => goToSection(aboutMeRef)}> <SiAboutdotme /> About Me</Button>
        <ButtonLink href={'/forward/resume'}> <RiProfileLine /> Resume</ButtonLink>
      </ButtonsContainer>
    </StartPage>

    <Projects ref={projectsRef}>
      <SectionHeader>
        <h1> <IoMdCode /> Projects</h1>
        <p>These are some sample projects that I made:</p>
      </SectionHeader>
      <main>
        {projectsList.map(({ title, description, githubLink, liveLink, youtubeId, tags, tagsColor }, index) => (

          <ProjectCard
            key={index}
            title={title}
            description={description}
            githubLink={githubLink}
            liveLink={liveLink}
            youtubeId={youtubeId}
            tags={tags}
            tagsColor={tagsColor}
          />

        ))}
      </main>

      <ButtonsContainer id="githubProfileButton">
        <ButtonLink href="https://github.com/juniorosorio47?tab=repositories" target="_blank">
          <BsGithub />
          See all on Github
        </ButtonLink>
      </ButtonsContainer>

    </Projects>

    <Skills ref={skillsRef}>
      <SectionHeader>
        <h1> <GiSkills /> Skills {'&'} XP</h1>
        <p>These are my main skills:</p>
      </SectionHeader>

      <main>
        <div id="skillsHeader">
          <p>Technologies</p>
          <p>Years of experience</p>
        </div>
        {skillsList.map(({ logoSrc, name, yearsOfExperience, color, techLink, childTechs }, index) => (

          <Skill
            key={index}
            logoSrc={logoSrc}
            name={name}
            yearsOfExperience={yearsOfExperience}
            // @ts-ignore
            childTechs={childTechs}
            color={color}
            techLink={techLink}
          />
        ))}
      </main>
    </Skills>

    <WorkExperiences ref={workExperiencesRef}>
      <SectionHeader>
        <h2> <MdWorkOutline /> Working Experiences</h2>
        <p>These are my most relevant working experiences:</p>
      </SectionHeader>
      <main>
        {workExperiencesList.map(({ position, company, time, description, techs, companyWebSite }, index) => (
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
        <h1> <SiAboutdotme /> About Me</h1>
        <p>Something about me:</p>
      </SectionHeader>
      <main>
        <Profile>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/profile.png"
            alt="Picture of the author"
          />
          <h2>Dari Osorio Junior</h2>
          <span>Full Stack Developer</span>
          <div>
            <span>Educational Background</span>
            {educationalBackgroundList.map(({ institution, course, time, certificate }) => (
              <div key={institution}>
                <h3>{course}</h3>
                <p>{institution} {certificate && <a href={certificate} target="_blank">(Certificate Link)</a>}</p>
                <span>{time}</span>
              </div>
            ))}
          </div>

        </Profile>
        <Description>
          <h1>I am a Full-Stack Developer!</h1>

          <main>
            <p>
              I'm a full-stack developer with more than 4 years of experience in Javascript, React, React Native and Python. I really like programming, so I always try to make the best software possible, always looking for software quality and clean code to facilitate maintenance.
            </p>
            <p>Always looking forward</p>
          </main>
          <div>
            <h2>Get in touch:</h2>
            <ButtonsContainer>
              <ButtonLink href="https://www.linkedin.com/in/dari-osorio-junior-developer/" target="_blank">
                <FaLinkedinIn />
                LinkedIn
              </ButtonLink>
              <ButtonLink href="mailto:juniorosorio47@gmail.com" target="_blank">
                <BiMailSend />
                E-mail
              </ButtonLink>
              <ButtonLink href="https://github.com/juniorosorio47" target="_blank">
                <BsGithub />
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