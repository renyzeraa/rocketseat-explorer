import { useState } from 'react'
import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useNavigate } from 'react-router-dom'
import { api } from '../../service/api'
import Swal from 'sweetalert2'

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
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Título obrigatório'
      })
    }
    if (!descriptions) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Descrição é obrigatório'
      })
    }
    if (newLink) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ficou um link sem ser adicionado'
      })
    } else if (links.length === 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Coloque um link pelo menos'
      })
    }
    if (newTag) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ficou uma tag sem ser adicionada'
      })
    }
    if (tags.length <= 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Coloque uma tag pelo menos'
      })
    }

    await api.post('/notes', {
      title,
      descriptions,
      tags,
      links
    })

    Swal.fire({
      icon: 'success',
      title: 'Nota Criada Com Sucesso',
      showConfirmButton: false,
      timer: 1200
    })
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
