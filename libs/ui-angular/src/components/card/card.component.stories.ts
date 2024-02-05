import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'Card',
};
export default meta;
type CardStory = StoryObj<CardComponent>;

export const Default: CardStory = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Card Component/gi)).toBeTruthy();
  },
};
