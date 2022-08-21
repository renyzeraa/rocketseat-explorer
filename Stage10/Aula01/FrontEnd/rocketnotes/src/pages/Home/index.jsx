import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi'
import { api } from '../../service/api'
export function Home() {
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title={'Todos'} isActive></ButtonText>
        </li>
        {tags &&
          tags.map(tag => (
            <li key={tag.id}>
              <ButtonText title={tag.name}></ButtonText>
            </li>
          ))}
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: 'React',
              tags: [
                {
                  id: '1',
                  name: 'react'
                },
                {
                  id: '2',
                  name: 'node'
                }
              ]
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
