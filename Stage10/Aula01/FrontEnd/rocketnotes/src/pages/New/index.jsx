import { useState } from 'react'
import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { api } from '../../service/api'

export function New() {
  const [title, setTitle] = useState('')
  const [descriptions, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(linkDeleted) {
    setLinks(prevState => prevState.filter(link => link !== linkDeleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Coloque um título para sua Nota')
    }
    if (!descriptions) {
      return alert('Coloque uma desrição')
    }
    if (newLink) {
      return alert('Ficou um link sem ser adicionado')
    } else if (links.length === 0) {
      return alert('Coloque um link pelo menos')
    }
    if (newTag) {
      return alert('Ficou uma tag sem ser adicionada')
    } else if (tags.length === 0) {
      return alert('Coloque uma tag pelo menos')
    }

    await api.post('/notes', {
      title,
      descriptions,
      tags,
      links
    })

    alert('Nota Criada Com Sucesso')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText title="Voltar" onClick={handleBack}></ButtonText>
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          ></Input>
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links Úteis">
            {links.map((link, i) => (
              <NoteItem
                key={String(i)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, i) => (
                <NoteItem
                  key={String(i)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
