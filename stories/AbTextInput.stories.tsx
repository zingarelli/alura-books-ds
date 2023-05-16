import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbTextInput, AbTextInputProps } from "../src";

export default {
    title: 'Components/AbTextInput',
    component: AbTextInput
} as ComponentMeta<typeof AbTextInput>

const Template: ComponentStory<typeof AbTextInput> = (args) => <AbTextInput {...args} />

export const Email = Template.bind({});

Email.args = {
    label: 'E-mail',
    placeholder: 'seuemail@maneiro.com.br',
    type: 'email'
} as AbTextInputProps