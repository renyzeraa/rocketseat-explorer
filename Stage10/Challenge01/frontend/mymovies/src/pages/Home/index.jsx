import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../service/api'

export function Home() {
  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState([])

  function handleMoviePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      const notes = response.data
      setNotes(notes)
    }
    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)}></Header>
      <main>
        <section className="content">
          <h1>Meus Filmes Favoritos ✨</h1>
          <a onClick={() => navigate('/create')}>
            <Button title="+ Adicionar filme"></Button>
          </a>
        </section>
        <section className="cards">
          {notes &&
            notes.map(note => (
              <Card
                key={note.id}
                data={note}
                onClick={() => handleMoviePreview(note.id)}
              />
            ))}
        </section>
      </main>
    </Container>
  )
}
