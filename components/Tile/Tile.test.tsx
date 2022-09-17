import { render } from '@/test-utils'

import Tile from '.'

describe('Tile test cases', () => {
  it('Tile render check', () => {
    const { asFragment } = render(<Tile header="hello">World!!!</Tile>)

    expect(asFragment()).toMatchSnapshot()
  })
})
