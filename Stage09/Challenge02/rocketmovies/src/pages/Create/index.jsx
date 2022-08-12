import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Link } from 'react-router-dom'

import { RiArrowLeftLine } from 'react-icons/ri'

export function Create() {
  return (
    <Container>
      <Header></Header>

      <main>
        <Link to="/">
          <ButtonText icon={RiArrowLeftLine} title="Voltar"></ButtonText>
        </Link>
        <section>
          <Content>
            <h1>Novo Filme</h1>
            <div>
              <Input placeholder="Título"></Input>
              <Input
                placeholder="Sua nota (de 0 a 5)"
                type="number"
                min="0"
                max="5"
              ></Input>
            </div>
            <Textarea placeholder="Observações"></Textarea>
            <h2>Marcadores</h2>
            <div className="note-content">
              <NoteItem value="nota1"></NoteItem>
              <NoteItem isNew></NoteItem>
            </div>

            <div>
              <Button isActive={false} title="Excluir Filme"></Button>
              <Button title="Salvar alterações"></Button>
            </div>
          </Content>
        </section>
      </main>
    </Container>
  )
}
