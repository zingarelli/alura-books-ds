import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    label, input {
        font-family: sans-serif;
        font-size: 16px
    }
    label {
        font-weight: 700;
        margin-left: 24px;
        color: #002F52;
    }
    input {
        padding: 10px 24px;
        border: 1px solid #002F52;
        border-radius: 24px;
        color: #002F52;
    }
    input::placeholder {
        color: #A4A4A4;
    }
`;

export interface AbTextInputProps {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'date';
}

export const AbTextInput = ({ label, placeholder, type='text' }: AbTextInputProps) => {
    return (
        <InputContainer>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </InputContainer>
    )
}