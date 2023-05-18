import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #002F52;
    p {
        font-weight: 700;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    button {
        width: 28px;
        height: 28px;
        font-size: 24px;
        color: #FFF;
        background-color: #002F52;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 50%;
        cursor: pointer;
    }
    span {
        font-size: 18px;
    }
`;

export const AbQuantityInput = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(oldValue => oldValue + 1)
    }

    const decrement = () => {
        setCount(oldValue => oldValue - 1)
    }

    return (
        <InputContainer>
            <p>Quantidade</p>
            <Controls>
                <button onClick={decrement}>-</button>
                <span>{count.toString().padStart(2, '0')}</span>
                <button onClick={increment}>+</button>
            </Controls>
        </InputContainer>
    )
}