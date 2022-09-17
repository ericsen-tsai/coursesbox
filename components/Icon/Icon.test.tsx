import { render } from '@/test-utils'

import Icon from './index'

describe('Icon test cases', () => {
  it('Icon render check', () => {
    const { asFragment } = render(<Icon name="Moon" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
