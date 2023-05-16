import React, { useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section<{ selected: boolean }>`
    width: 128px;
    height: 106px;
    background: ${props => props.selected
        ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
        : '#FFFFFF'} ;
    border-radius: 8px;
    border: 1px solid;
    border-color: ${props => props.selected ? '#326589' : '#EB9B00'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 8px 0;
    margin: 20px;
    font-family: sans-serif;
    cursor: pointer;

    header {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }

    strong {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};
        font-size: 16px;
        font-weight: 700;
    }

    footer {
        color: ${props => props.selected ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};
        font-size: 12px;
        font-weight: 400;
    }

    @media screen and (min-width: 768px) {
        width: 194px;
        height: 88px;
    }
`;

export interface AbOptionGroup {
    id: number;
    title: string;
    price: string;
    footer: string;
}

export interface AbOptionsGroupProps {
    options: AbOptionGroup[];
    defaultOption?: AbOptionGroup | null;
    onChange?: (option: AbOptionGroup) => void;
}

// options to select in order to buy a book
export const AbOptionsGroup = ({ options, defaultOption, onChange }: AbOptionsGroupProps) => {
    // ??: if defaultOption is undefined, the state will receive null
    const [selected, setSelected] = useState<AbOptionGroup | null>(defaultOption ?? null);

    function onSelected(option: AbOptionGroup): void {
        setSelected(option);
        if (onChange) {
            onChange(option);
        }
    }

    return (
        <>
            {options.map(option => (
                <StyledSection
                    key={option.id}
                    onClick={() => onSelected(option)}
                    selected={selected?.id === option.id}
                >
                    <header>{option.title}</header>
                    <div><strong>{option.price}</strong></div>
                    <footer>
                        {option.footer}
                    </footer>
                </StyledSection>
            ))}
        </>
    )
}