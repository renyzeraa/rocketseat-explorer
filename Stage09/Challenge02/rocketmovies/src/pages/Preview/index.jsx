import { Container } from './styles.js'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { RiArrowLeftLine } from 'react-icons/ri'

export function Preview() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonText icon={RiArrowLeftLine} title="Voltar"></ButtonText>
        <section></section>
      </main>
    </Container>
  )
}
