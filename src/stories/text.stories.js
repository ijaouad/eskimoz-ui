import React from 'react'
import { Meta } from '@storybook/react'
import Text from '../components/text/text'


const meta = {
    title: 'Text',
    component: Text,
    argTypes: {
        variant: {
            defaultValue: 'heading-1'
        }
    }
}

export default meta


export const Heading1 = (args) => <Text {...args} />;
Heading1.args = { children: 'Heading 1', variant: 'heading-1' };

export const Heading2 = (args) => <Text {...args} />;
Heading2.args = { children: 'Heading 2', variant: 'heading-2' };

export const Heading3 = (args) => <Text {...args} />;
Heading3.args = { children: 'Heading 3', variant: 'heading-3' };

export const Heading4 = (args) => <Text {...args} />;
Heading4.args = { children: 'Heading 4', variant: 'heading-4' };

export const Heading5 = (args) => <Text {...args} />;
Heading5.args = { children: 'Heading 5', variant: 'heading-5' };

export const Heading6 = (args) => <Text {...args} />;
Heading6.args = { children: 'Heading 6', variant: 'heading-6' };

export const ParagraphBig = (args) => <Text {...args} />;
ParagraphBig.args = { children: 'Paragraph big', variant: 'paragraph-big' };

export const ParagraphMedium = (args) => <Text {...args} />;
ParagraphMedium.args = { children: 'Paragraph medium', variant: 'paragraph-medium' };

export const ParagraphSmall = (args) => <Text {...args} />;
ParagraphSmall.args = { children: 'Paragraph small', variant: 'paragraph-small' };

export const ParagraphTiny = (args) => <Text {...args} />;
ParagraphTiny.args = { children: 'Paragraph tiny', variant: 'paragraph-tiny' };

export const CTA = (args) => <Text {...args} />;
CTA.args = { children: 'Call to action', variant: 'cta' };

export const Link = (args) => <Text {...args} />;
Link.args = { children: 'Link a url', variant: 'link' };