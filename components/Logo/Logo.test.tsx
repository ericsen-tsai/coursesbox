import { render } from '@/test-utils'

import Logo from '.'

describe('Logo test cases', () => {
  it('Logo render check', () => {
    const { asFragment } = render(<Logo>CoursesBox</Logo>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Logo render with custom size', () => {
    const { asFragment } = render(<Logo size={10}>CoursesBox</Logo>)

    expect(asFragment()).toMatchSnapshot()
  })
})
