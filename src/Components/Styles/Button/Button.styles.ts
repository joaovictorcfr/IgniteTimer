import { styled, css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondy' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 2rem 4rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['green-500']};
  margin: 1rem;
  color: ${(props) => props.theme.white};
`
