import { Container } from './styles'

export function ButtonText({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  )
}
