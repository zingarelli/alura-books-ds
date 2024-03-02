import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface AbModalProps {
    children: ReactNode,
    title: string,
    open: boolean, // wheter the Modal will be visible or not
    onClose: () => void
}

const ModalWindow = styled.section`
    position: fixed;
    padding: 64px;
    background: #FFF;
    box-shadow: 4px 4px 24px -4px rgba(0,0,0,.15);
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // sliding effect
`;

// darker, kind of opaque background covering the entire screen
const ModalBg = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(101,101,101,.85);
`;

const ModalTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    align-items: center;
`;

const ModalTitle = styled.h2`
    font-weight: 700px;
    font-size: 32px;
    line-height: 48px;
    color: #EB9B00;
    margin: 0;
`;

const ModalCloseBtn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #002F52;
`;

export const AbModal = ({ children, title, open, onClose }: AbModalProps) => {
    if (!open) return <></>
    return (
        <>
            {/* close the modal either by clicking on the background or the close button */}
            <ModalBg onClick={onClose}></ModalBg>
            <ModalWindow>
                <ModalTitleWrapper>
                    <ModalTitle>{title}</ModalTitle>
                    <ModalCloseBtn onClick={onClose}>X</ModalCloseBtn>
                </ModalTitleWrapper>
                {children}
            </ModalWindow>
        </>
    )
}