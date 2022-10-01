import { render } from '@/test-utils'

import Feedback from '.'

describe('Feedback test cases', () => {
  it('Feedback render check', () => {
    const { asFragment } = render(<Feedback isValid>Looks good!</Feedback>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Render check for invalid', () => {
    const { asFragment } = render(
      <Feedback>Please provide a valid value</Feedback>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
