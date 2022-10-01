import styled from '@emotion/styled'

type Props = {
  isValid?: boolean
}

const Feedback = styled.span<Props>`
  color: ${({ isValid, theme }) =>
    isValid ? theme.font.valid : theme.font.invalid};
`

export default Feedback
