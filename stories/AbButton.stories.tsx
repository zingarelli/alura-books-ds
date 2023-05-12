import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AbButton, AbButtonProps } from "../src"

// object to display the component in Storybook's dashboard
export default {
    title: 'Components/AbButton',
    component: AbButton
} as ComponentMeta<typeof AbButton>

//--- creating the stories

// model to render the component for a story, also passing its props (args)
const Template: ComponentStory<typeof AbButton> = (args) => <AbButton {...args} />

// create a "Primario" story
export const Primario = Template.bind({});

// set Primario args
Primario.args = {
    text: 'Primary button'
} as AbButtonProps;

// create another story with different args
export const Secundario = Template.bind({});
Secundario.args = {
    text: 'Secondary button',
    btnStyle: 'secondary'
} as AbButtonProps