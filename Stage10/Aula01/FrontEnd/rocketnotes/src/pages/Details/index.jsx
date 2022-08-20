import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota"></ButtonText>

          <h1>Introdução ao React</h1>
          <p>
            O React é uma biblioteca JavaScript de código aberto com foco em
            criar interfaces de usuário em páginas web. É mantido pelo Facebook,
            Instagram, outras empresas e uma comunidade de desenvolvedores
            individuais. É utilizado nos sites da Netflix, Imgur, Feedly,
            Airbnb, SeatGeek, HelloSign, Walmart e outros
          </p>

          <Section title="Links Úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Node"></Tag>
            <Tag title="React-js"></Tag>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
