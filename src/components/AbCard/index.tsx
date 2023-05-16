import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AbCardProps {
    children: ReactNode;
}

const Card = styled.div`
    width: 340px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 16px;

    @media screen and (min-width: 768px) {
        width: 725px;
        padding: 24px;
    }

    @media screen and (min-width: 1024px) {
        width: 550px;
        padding: 48px 32px;
    }
`;


export const AbCard = ({ children }: AbCardProps) => {
    return (
        <Card>
            {children}
        </Card>
    );
}