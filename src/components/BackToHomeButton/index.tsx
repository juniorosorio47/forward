import React from 'react';
import { RiArrowGoBackLine } from 'react-icons/ri';

import { Container } from './styles';

interface IBackgroundProps{
    link?:string;
    textColor?: string;
    style?: object;
    backgroundColor: string;

}

const BackToHomeButton: React.FC<IBackgroundProps> = ({link, backgroundColor, textColor, style}) => {

    return (<Container backgroundColor={backgroundColor} textColor={textColor} style={style}>
        <span>Back to portfolio:</span>
        <a href={link ? link : "/forward/"} > <RiArrowGoBackLine /></a>
    </Container>);
}

export default BackToHomeButton;