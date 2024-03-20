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

export const ProductTeamA: CardStory = {
  args: {
    children: (
      <div style={{ display: 'flex', flex: 1, width: '100%', height: '100%' }}>
        dynamic content
      </div>
    ),
  },
};

export const ProductTeamB: CardStory = {
  args: {
    headline: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo sed lorem a venenatis.',
    img: 'https://placehold.co/800x400?text=Placeholder',
    link: './',
  },
};

// TODO: Add component stories
