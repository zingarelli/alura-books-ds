import React from "react";
import styled, { css } from "styled-components";

export interface AbButtonProps {
    text?: string;
    btnStyle?: 'primary' | 'secondary';
    onClick?: () => void;
}

// button with different colors depending on "btnStyle" prop
const StyledButton = styled.button<AbButtonProps>`
    color: ${(props: AbButtonProps) => props.btnStyle === 'primary' ? '#FFF' : '#EB9B00'};;
    background-color: ${(props: AbButtonProps) => props.btnStyle === 'primary' ? '#EB9B00' : '#FFF'};
    padding: 16px;
    border: 2px solid #EB9B00;
    font-size: 20px;
    cursor: pointer;    
    ${(props: AbButtonProps) => props.btnStyle === 'primary' 
        ? css`
            &:hover {
                background-color: #B87900;
                border: 2px solid #B87900;
            }
        `
        : css`
            &:hover {                
                color: #B87900;
                background-color: #FFF;
                border: 2px solid #B87900;
            }        
        `
    };
`;

export const AbButton = ({ text, onClick, btnStyle='primary' }: AbButtonProps) => {
    return (
        <StyledButton onClick={onClick} btnStyle={btnStyle}>{text}</StyledButton>
    )
}