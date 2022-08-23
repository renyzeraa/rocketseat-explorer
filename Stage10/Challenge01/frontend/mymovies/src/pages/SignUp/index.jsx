import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { api } from '../../service/api'
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'
import Swal from 'sweetalert2'

export function SignUp() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos!'
      })
    }

    let regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    api

    if (!email || regex.test(email) === false) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor insira um email valido !'
      })
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Usuário cadastrado com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(-1)
      })
      .catch(error => {
        if (error.response) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Não foi possível cadastrar'
          })
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>My Movies</h1>
        <p>Aplicação para salvar seus filmes favoritos 🎬👌🏼</p>
        <h2>Crie sua conta 😉</h2>

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
