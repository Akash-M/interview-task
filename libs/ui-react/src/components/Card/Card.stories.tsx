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

// TODO: Add component stories

export const Default: CardStory = {
  args: {},
  play: async ({ canvasElement }) => {
    // TODO: Add interaction tests
  },
};
