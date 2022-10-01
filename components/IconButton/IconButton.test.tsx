import { render, screen } from '@/test-utils'
import userEvent from '@testing-library/user-event'
import IconButton from './index'

describe('IconButton test cases', () => {
  it('Render check', () => {
    const onClick = jest.fn()
    const { asFragment } = render(
      <IconButton onClick={onClick} name="Home">
        IconButton
      </IconButton>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('Render check', async () => {
    const onClick = jest.fn()
    render(
      <IconButton onClick={onClick} name="Home">
        IconButton
      </IconButton>
    )

    const element = screen.getByRole('button')

    await userEvent.click(element)
    expect(onClick).toHaveBeenCalled()
  })
})
