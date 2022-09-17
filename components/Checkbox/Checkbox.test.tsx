import { render, screen } from '@/test-utils'
import userEvent from '@testing-library/user-event'

import Checkbox from './index'

describe('Checkbox test cases', () => {
  it('Render check', () => {
    const onChange = jest.fn()
    jest.spyOn(Math, 'random').mockReturnValue(0.99999999999)
    const { asFragment } = render(<Checkbox onChange={onChange} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Render check', async () => {
    const onChange = jest.fn()

    render(<Checkbox onChange={onChange} />)

    const element = screen.getByLabelText('✓')

    await userEvent.click(element)
    expect(onChange).toHaveBeenCalled()
  })
})
