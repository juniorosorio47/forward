import React, { useState } from 'react';

import { Container, Info, YearsOfExperience } from './styles';

interface ISkillProps{
    logoSrc:string;
    name:string;
    yearsOfExperience:number;
    color:string;
    techLink:string;
}

const Skill: React.FC<ISkillProps> = ({logoSrc, name, yearsOfExperience, color, techLink}) => {
    return <>
        <Container>
            <Info>
                <img src={logoSrc} alt={name} />
                <h3><a href={techLink}  target="_blank">{name}</a></h3>
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
        </Container>
    </>;
}

export default Skill;