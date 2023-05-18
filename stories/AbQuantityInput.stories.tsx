import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbQuantityInput } from "../src";

export default {
    title: 'Components/AbQuantityInput',
    component: AbQuantityInput
} as ComponentMeta<typeof AbQuantityInput>

const Template: ComponentStory<typeof AbQuantityInput> = () => <AbQuantityInput />

export const Quantity = Template.bind({});
