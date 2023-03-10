import React, { useState } from 'react';

import { Container, Info, YearsOfExperience, ChildTechs } from './styles';

interface IChildTech {
    name: string;
    logo: string;
    years: number;
    link: string;
    color: string;
}

interface ISkillProps {
    logoSrc: string;
    name: string;
    yearsOfExperience: number;
    color: string;
    techLink: string;
    childTechs: Array<IChildTech>;
}

const Skill: React.FC<ISkillProps> = ({ logoSrc, name, yearsOfExperience, color, techLink, childTechs }) => {
    return <>
        <Container>
            <Info>
                <img src={logoSrc} alt={name} />
                <h3><a href={techLink} target="_blank">{name}</a></h3>
            </Info>
            <YearsOfExperience color={color} years={yearsOfExperience}>

                <div>
                    <p>
                        {yearsOfExperience == 1 ?
                            `${yearsOfExperience} Year`
                            :
                            `${yearsOfExperience} Years`
                        }
                    </p>
                </div>
            </YearsOfExperience>

            <ChildTechs>
                {childTechs.map((tech: IChildTech) => (
                    <main>
                        <Info>
                            <img src={tech.logo} alt={tech.name} />
                            <p><a href={tech.link} target="_blank">{tech.name}</a></p>
                        </Info>
                        <YearsOfExperience color={tech.color} years={tech.years}>
                            <div>
                                <p>
                                    {tech.years == 1 ?
                                        `${tech.years} Year`
                                        :
                                        `${tech.years} Years`
                                    }
                                </p>
                            </div>
                        </YearsOfExperience>
                    </main>
                ))}
            </ChildTechs>
        </Container>
    </>;
}

export default Skill;