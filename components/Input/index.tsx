import { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'
import styled from '@emotion/styled'

import { boxShadow } from '../styles'
import Icon, { AvailableIcons } from '../Icon'

const StyledInput = styled.input`
  all: unset;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 0 2.6rem 0 1.4rem;
  color: ${({ theme }) => theme.font.regular};

  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2, true)}

  &::placeholder {
    color: ${({ theme }) => theme.font.placeholder};
  }

  &:focus {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2)}
    ~ svg {
      color: ${({ theme }) => theme.font.regular};
      opacity: 1;
    }
  }
`

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: ${({ theme }) => theme.font.regular};
  font-size: 1rem;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.span`
  padding-left: 1.4rem;
`
const StyledIcon = styled(Icon)`
  margin-left: -2.5rem;
  color: ${({ theme }) => theme.font.placeholder};
  opacity: 0.7;
`

export type Props = {
  /** Placeholder */
  placeholder: string
  /** onChange Handler */
  onChange: ChangeEventHandler<HTMLInputElement>
  /** Input label */
  label?: string
  /** Icon */
  icon?: AvailableIcons
  /** Feedback for input */
  feedback?: ReactNode
  /** Input width */
  width?: number
  /** Input height */
  height?: number
}

function Input({
  label,
  feedback,
  icon,
  height = 4,
  width = 20,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Label>
      {label && <Text>{label}</Text>}
      <InputWrapper>
        <StyledInput height={height} width={width} {...props} />
        {icon && <StyledIcon name={icon} />}
      </InputWrapper>
      {feedback && <Text>{feedback}</Text>}
    </Label>
  )
}

export default Input
