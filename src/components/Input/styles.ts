import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    
    width:100%;
    display: flex;
    align-items: center;
    flex:1;

    color: #666368;

    & + div {
        margin-top:8px;
    }

    ${props=>props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${props=>props.isFilled && css`
        color: #ff9000;
    `}

    ${props=>props.isErrored && css`
        border-color: #c53030;
    `}

    input {
        width:100%;
        border:0;
        background: transparent;

        &::placeholder {
            color: #666368;
        }
    }

    svg {
        margin-right:16px;
    }
`

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin:0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before{
            border-color: #c53030 transparent;
        
        }
    }
`; 