import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AbTagProps {
    children: ReactNode;
}

const Tag = styled.div`
    background-color: #EB9B00;
    color: #FFF;
    padding: 48px;
    font-weight: 600;
    display: inline-block;
`;

export function AbTag({ children }: AbTagProps) {
    return (
        <Tag>{children}</Tag>
    )
}