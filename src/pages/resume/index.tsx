import Head from "next/head";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { FaFileExport } from "react-icons/fa";

import Skill from "../../components/Skill";
import WorkCard from "../../components/WorkCard";
import { Container, Info, PersonalDetails, WorkingExp, EducationalBackground, Skills, ExportButton } from '../../styles/resume/styles';
import BackToHomeButton from "../../components/BackToHomeButton";


const Resume: React.FC = () => {
    const container = useRef(null);
    const pdfExportComponent = useRef(null);


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
                course:'Qualification in Front-end Development',
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
                course:'The Complete Java Developer Course',
                time:'2019',
                certificate:'https://www.udemy.com/certificate/UC-8AWW7WS1/',
            },
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
            position:'Internship',
            company:'ITP - Itaipu Technological Park',
            time:'October 2018 - April 2019',
            description:'Internship at the Latin American Center for Open Technologies - CELTAB. Working with full stack software development, with the following languages and tools:',
            techs:['React', 'React Native', 'Javascript', 'NodeJS', 'Ubuntu',  'Python', 'MongoDB', 'PostgreSQL'],
            companyWebSite:"https://www.pti.org.br"
          },
        ]
      },[])

      const skillsList = useMemo(() => {
        return [
          {
            logoSrc:"https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/javascript-icon.svg",
            name:"Javascript",
            yearsOfExperience:4,
            color:"#F0DB4F",
            techLink:"https://nodejs.org",
          },
          {
            logoSrc:"https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/reactjs-icon.svg" ,
            name:"React JS" ,
            yearsOfExperience:4,
            color:"#00D8FF",
            techLink:"https://reactjs.org",
          },
          {
            logoSrc:"https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/reactjs-icon.svg" ,
            name:"React Native" ,
            yearsOfExperience:2,
            color:"#61DAFB",
            techLink:"https://reactnative.dev",
          },
          {
            logoSrc:"https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/nodejs-icon.svg" ,
            name:"Node JS" ,
            yearsOfExperience:4,
            color:"#8CC84B",
            techLink:"https://nodejs.org",
          },
          {
            logoSrc:"https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/python-icon.svg" ,
            name:"Python" ,
            yearsOfExperience:3,
            color:"#356B99",
            techLink:"https://python.org",
          },
          {
            logoSrc:"https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/java-icon.svg" ,
            name:"Java" ,
            yearsOfExperience:2,
            color:"#0D8AC7",
            techLink:"https://java.com",
          },
          {
            logoSrc:"https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/docker-icon.svg" ,
            name:"Docker" ,
            yearsOfExperience:2,
            color:"#1396C3",
            techLink:"https://docker.com",
          },
          
        ]
      },[])



      const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
          //@ts-ignore
          pdfExportComponent.current.save();
        }
      };


    return <>
        <Head>
            <title>Resume: Dari Osorio Junior</title>
        </Head>
        <ExportButton onClick={exportPDFWithComponent}> <FaFileExport/> Export to PDF</ExportButton>
        <PDFExport
            ref={pdfExportComponent}
            scale={0.6}
            paperSize="auto"
            margin={0}
            fileName={`Resume Dari Osorio Junior`}
            author="Dari Osorio Junior"

        >
            
            <Container ref={container}>
                <header>
                    <img
                      src="https://raw.githubusercontent.com/juniorosorio47/forward/8b0f3e76a28dd3aaee194fdbeda7b6fb5b8ed925/public/profile.png"
                      alt="Picture of the author"
                    />
                    <h1>Dari Osorio Junior</h1>
                    <h3>Full Stack Developer</h3>
                </header>
                <Info>
                    <h2>Basic Information:</h2>
                    <div>
                        <p><b>Location:</b>  Foz do Iguaçu, Paraná, Brazil</p>
                        <p><b>Email:</b>  <a href="mailto:juniorosorio47@gmail.com">juniorosorio47@gmail.com</a></p>
                        <p><b>Cellphone:</b> +55 (45) 99111-1374</p>
                        <span><b>Availability to move to:</b> anywhere</span>
                    </div>
                </Info>

                <PersonalDetails>
                    <h2>Personal Details:</h2>
                    <div>
                        <p><b>Currently working: </b>Yes</p>
                        <p><b>Level of education: </b>Studying technologist in Systems Analysis and Development.</p>
                        <p><b> <a href="https://juniorosorio47.github.io/forward/">Portfolio:</a> </b> </p>
                    </div>
                </PersonalDetails>

                <WorkingExp>
                    <h2>Professional experiences:</h2>
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
                </WorkingExp>
                <EducationalBackground>
                    <h2>Educational Background:</h2>
                    <div>
                        {educationalBackgroundList.map( ({institution, course, time, certificate})=>(
                            <div> 
                                <h3>{course}</h3>
                                <p>{institution} {certificate && <a href={certificate} target="_blank">(Certificate Link)</a>}</p>
                                <span>{time}</span>
                            </div>
                        ) )}
                    </div>

                </EducationalBackground>
                <Skills>
                    <h2>Skills and Competencies:</h2>
                    <div>
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
                    </div>
                </Skills>

            </Container>

        </PDFExport>
        <BackToHomeButton backgroundColor='#00D8FF' style={{top:'20px', left:'20px'}}/>
    </>
};

export default Resume;