import { Container } from './styles'

export function Button({ title, isActive = true, ...rest }) {
  return (
    <Container isActive={isActive} type="button" {...rest}>
      {title}
    </Container>
  )
}
