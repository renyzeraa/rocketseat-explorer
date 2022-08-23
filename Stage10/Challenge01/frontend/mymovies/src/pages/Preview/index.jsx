import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'
import { useNavigate, useParams } from 'react-router-dom'
import { RiArrowLeftLine } from 'react-icons/ri'
import { FaRegClock } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { api } from '../../service/api'
import { useAuth } from '../../hooks/auth'
import { Button } from '../../components/Button'

export function Preview() {
  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState(null)

  const { user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : no_avatar

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
        <a
          onClick={() => {
            navigate(-1)
          }}
        >
          <ButtonText icon={RiArrowLeftLine} title="Voltar"></ButtonText>
        </a>
        {data && (
          <Content>
            <div className="title">
              <h1>{data.title}</h1>
              <div className="stars-content">
                <Rating rate={data.rating}></Rating>
              </div>
            </div>
            <div className="autor-container">
              <a
                onClick={() => {
                  navigate('/profile')
                }}
              >
                <img src={avatarUrl} alt="User Image" />
              </a>
              <p>Por {user.name}</p>
              <FaRegClock />
              <p>{data.updated_at}</p>
            </div>
            <div className="tags-container">
              {data.tags.map(tag => (
                <Tag key={tag.id} title={tag.name}></Tag>
              ))}
            </div>

            <p>{data.description}</p>
          </Content>
        )}
        <Button isActive={false} title="Excluir Filme Favorito"></Button>
      </main>
    </Container>
  )
}
