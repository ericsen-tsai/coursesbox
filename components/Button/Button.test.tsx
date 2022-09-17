import { render, screen } from '@/test-utils'
import userEvent from '@testing-library/user-event'
import Button from './index'

describe('Button test cases', () => {
  it('Render check', () => {
    const onClick = jest.fn()
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Render check', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Button</Button>)

    const element = screen.getByRole('button')

    await userEvent.click(element)
    expect(onClick).toHaveBeenCalled()
  })
})
