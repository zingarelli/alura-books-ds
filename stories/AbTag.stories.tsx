import React from "react";
import { AbTag, AbTagProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Components/AbTag',
    compononent: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args}/>

export const Tag = Template.bind({});
Tag.args = {
    children: 'Custom Tag'
} as AbTagProps;