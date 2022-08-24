import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../service/api'
import Swal from 'sweetalert2'

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    async function remove() {
      await api.delete(`/notes/${params.id}`)
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7066e0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Nota removida com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
        remove()
        navigate(-1)
      }
    })
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      <main>
        {data && (
          <Content>
            <ButtonText
              title="Excluir Nota"
              onClick={handleRemove}
            ></ButtonText>

            <h1>{data.title}</h1>
            <p>{data.descriptions}</p>

            {data.links && (
              <Section title="Links Úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name}></Tag>
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        )}
      </main>
    </Container>
  )
}
