import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbCard, AbCardProps } from '../src'

export default {
    title: 'Components/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>

const Template: ComponentStory<typeof AbCard> = (args) => <AbCard {...args} />;

export const Card = Template.bind({});
Card.args = {
    children: 'Your content goes here'
} as AbCardProps