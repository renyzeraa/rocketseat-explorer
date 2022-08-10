import { Container } from './styles'

export function Tag({ title, ...rest }) {
  return <Container {...rest} title={title}></Container>
}
