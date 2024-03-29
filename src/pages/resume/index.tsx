import Head from "next/head";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { FaFileExport } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import Skill from "../../components/Skill";
import WorkCard from "../../components/WorkCard";
import { Container, Info, PersonalDetails, WorkingExp, EducationalBackground, Skills, ExportButton } from '../../styles/resume/styles';
import BackToHomeButton from "../../components/BackToHomeButton";

import skillsList from '../../utils/skillsList';
import workExperiencesList from '../../utils/workExperiencesList';
import educationalBackgroundList from '../../utils/educationalBackgroundList';


const Resume: React.FC = () => {
    const container = useRef(null);
    const pdfExportComponent = useRef(null);


    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            //@ts-ignore
            pdfExportComponent.current.save();
        }
    };

    return <>
        <Head>
            <title>Resume: Dari Osorio Junior</title>
            <meta name="description" content="Dari Osorio Junior Full stack developer Resume. React, Javascript, NodeJS" />
        </Head>
        <ExportButton onClick={exportPDFWithComponent}> <FaFileExport /> Export to PDF</ExportButton>
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
                        alt="Picture of Dari Osorio Junior"
                        loading="lazy"
                    />
                    <h1>Dari Osorio Junior</h1>
                    <h3>Full Stack Developer</h3>
                </header>
                <Info>
                    <h2>Basic Information:</h2>
                    <div>
                        <p><b>Location:</b>  Foz do Iguaçu, Parana, Brazil</p>
                        <p><b>Email:</b>  <a href="mailto:juniorosorio47@gmail.com">juniorosorio47@gmail.com</a></p>
                        <p><b>Cellphone:</b> +55 (45) 99111-1374</p>
                        <span><b>Availability to move to:</b> Anywhere</span>
                    </div>
                </Info>

                <PersonalDetails>
                    <h2>Personal Details:</h2>
                    <div>
                        <p><b>Currently working: </b>Yes</p>
                        <p><b>Level of education: </b>Studying technologist in Systems Analysis and Development.</p>
                        <p><b> Portfolio:  </b> <a target="_blank" href="https://juniorosorio47.github.io/forward/"> <b><FiExternalLink />  https://juniorosorio47.github.io/forward/</b></a> </p>
                    </div>
                </PersonalDetails>
                <Skills>
                    <h2>Skills and Competencies:</h2>
                    <div>
                        {skillsList.map(({ logoSrc, name, yearsOfExperience, color, techLink, childTechs }, index) => (
                            <Skill
                                childTechs={childTechs}
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
                <EducationalBackground>
                    <h2>Educational Background:</h2>
                    <main>
                        {educationalBackgroundList.map(({ institution, course, time, certificate }) => (
                            <div>
                                <h3>{course}</h3>
                                <p>{institution} {certificate && <a href={certificate} target="_blank">(Certificate Link)</a>}</p>
                                <span>{time}</span>
                            </div>
                        ))}
                    </main>

                </EducationalBackground>
                <WorkingExp>
                    <h2>Professional experiences:</h2>
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
                </WorkingExp>

            </Container>

        </PDFExport>
        <BackToHomeButton backgroundColor='#00D8FF' style={{ top: 20, left: 50 }} />
    </>
};

export default Resume;