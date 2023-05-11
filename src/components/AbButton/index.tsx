import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    color: #FFF;
    background-color: #EB9B00;
    padding: 16px;
    border: 2px solid #EB9B00;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: #B87900;
        border: 2px solid #B87900;
    }
`;

export const AbButton = () => {
    return (
        <StyledButton>Clique aqui</StyledButton>
    )
}