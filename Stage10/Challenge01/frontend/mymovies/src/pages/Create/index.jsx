import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'
import { api } from '../../service/api'

export function Create() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescriptions] = useState('')
  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState('')

  function handleAddTag() {
    setTags(prevState => [...prevState, newTags])
    setNewTags('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Título obrigatório')
    }
    if (rating < 0 || rating > 5) {
      return alert('Nota para o filme inválida, tente de 0 até 5')
    } else if (!rating) {
      return alert('Nota para o filme é obrigatório')
    }
    if (!description) {
      return alert('Descrição é obrigatório')
    }
    if (newTags) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não adicionou'
      )
    } else if (!tags) {
      return alert('Você não adicionou nenhum marcador')
    }

    await api.post('/notes', {
      title,
      rating,
      description,
      tags
    })
    alert('Filme favoritado com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header></Header>

      <main>
        <a onClick={() => navigate(-1)}>
          <ButtonText icon={RiArrowLeftLine} title="Voltar"></ButtonText>
        </a>
        <section>
          <Content>
            <h1>Novo Filme 🎥🌟</h1>
            <div>
              <Input
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              ></Input>
              <Input
                placeholder="Sua nota (de 0 a 5) 🤔"
                type="number"
                min="0"
                max="5"
                onChange={e => setRating(e.target.value)}
              ></Input>
            </div>
            <Textarea
              placeholder="Observações"
              onChange={e => setDescriptions(e.target.value)}
            ></Textarea>

            <h2>Marcadores (ex: Ação, Terror...)</h2>
            <div className="note-content">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag)
                  }}
                ></NoteItem>
              ))}
              <NoteItem
                isNew
                placeholder="Nova Tag"
                value={newTags}
                onChange={e => setNewTags(e.target.value)}
                onClick={handleAddTag}
              ></NoteItem>
            </div>

            <Button title="Salvar alterações" onClick={handleNewNote}></Button>
          </Content>
        </section>
      </main>
    </Container>
  )
}
