import { render, screen } from '@/test-utils'
import userEvent from '@testing-library/user-event'

import Switch from './index'

describe('Switch test cases', () => {
  it('Render check', () => {
    const onChange = jest.fn()
    jest.spyOn(Math, 'random').mockReturnValue(0.99999999999)
    const { asFragment } = render(<Switch onChange={onChange} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Render check', async () => {
    const onChange = jest.fn()

    render(<Switch onChange={onChange} />)

    const element = screen.getByTestId('SwitchVisiblePart')

    await userEvent.click(element)
    expect(onChange).toHaveBeenCalled()
  })
})
