import { expect } from '@storybook/jest'
import { screen } from '@storybook/testing-library'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import Tile from './Tile'

export default {
  title: 'Content/Tile',
  component: Tile,
} as ComponentMeta<typeof Tile>

export const BasicTile: ComponentStoryObj<typeof Tile> = {
  play: async () => {
    await expect(screen.getByRole('heading')).toBeInTheDocument()
  },
  args: {
    header: 'Lorem ipsum dolor sit',
    children: `
        Lorem 
        ipsum dolor sit, amet consectetur 
        adipisicing elit. Exercitationem amet distinctio facere iusto aliquam quisquam magnam, ullam labore corporis necessitatibus maiores, minus reiciendis doloremque quibusdam! Vero possimus accusamus explicabo tempora?
    `,
  },
}
