import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AbButton } from "../src"

// object to display the component in Storybook's dashboard
export default {
    title: 'Components/AbButton',
    component: AbButton
} as ComponentMeta<typeof AbButton>

//--- creating the story

// how to render the component for a story
const Template: ComponentStory<typeof AbButton> = () => <AbButton />

// create a "Primario" story with no arguments (props)
export const Primario = Template.bind({})