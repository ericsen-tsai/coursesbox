import { ChangeEventHandler } from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@/test-utils'

import Input from '.'

describe('Input test cases', () => {
  it('Render check', () => {
    const onChange = jest.fn()
    const { asFragment } = render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        label="label"
        placeholder="Placeholder"
      ></Input>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('Render check with icon', () => {
    const onChange = jest.fn()
    const { asFragment } = render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        label="label"
        placeholder="Placeholder"
        icon="Search"
      ></Input>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('Check onChange callback', async () => {
    const onChange = jest.fn()
    render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        label="label"
        placeholder="Placeholder"
        icon="Search"
      ></Input>
    )

    const element = screen.getByRole('textbox')
    await userEvent.type(element, 'String')

    expect(onChange).toHaveBeenCalledTimes(6)
  })
})
