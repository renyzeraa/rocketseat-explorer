import { Container } from './styles.js'

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest} type="button">
      {Icon && <Icon />}
      {title}
    </Container>
  )
}
