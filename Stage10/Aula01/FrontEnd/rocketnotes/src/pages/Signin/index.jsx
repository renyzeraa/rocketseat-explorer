import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>
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
        <Button title="Entrar" onClick={handleSignIn}></Button>
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
