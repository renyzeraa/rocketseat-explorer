import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { api } from '../../service/api'
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'

export function SignUp() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate(-1)
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        ></Input>

        <Button title="Cadastrar" onClick={handleSignUp}></Button>
        <a
          onClick={() => {
            navigate(-1)
          }}
        >
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Form>
      <Background />
    </Container>
  )
}
