import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default meta;
type CardStory = StoryObj<typeof Card>;

export const Default: CardStory = {
  args: {},
};

// TODO: Add component stories
