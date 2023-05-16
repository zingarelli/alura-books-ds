import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AbOptionsGroup, AbOptionsGroupProps } from "../src"

// object to display the component in Storybook's dashboard
export default {
    title: 'Components/AbOptionsGroup',
    component: AbOptionsGroup
} as ComponentMeta<typeof AbOptionsGroup>

//--- creating the stories

// model to render the component for a story, also passing its props (args)
const Template: ComponentStory<typeof AbOptionsGroup> = (args) => <AbOptionsGroup {...args} />

// create a "Primario" story
export const Default = Template.bind({});

Default.args = {
    options: [
        {
            id: 1,
            title: 'E-book',
            price: 'R$23,99',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            title: 'Impresso',
            price: 'R$42,99',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            title: 'Impresso + E-book',
            price: 'R$60,00',
            footer: '.pdf, .epub, .mob'
        }
    ]
} as AbOptionsGroupProps