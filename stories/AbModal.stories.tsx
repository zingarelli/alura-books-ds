import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbModal, AbModalProps } from '../src'

export default {
    title: 'Components/AbModal',
    component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args} />;

export const Modal = Template.bind({});
Modal.args = {
    children: <p>This is the content of the modal</p>,
    title: 'Title of this modal',
    open: true,
} as AbModalProps