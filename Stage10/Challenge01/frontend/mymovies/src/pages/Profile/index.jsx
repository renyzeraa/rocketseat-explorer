import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import {
  RiArrowLeftLine,
  RiUser2Fill,
  RiMailLine,
  RiLock2Line
} from 'react-icons/ri'
import { FiCamera } from 'react-icons/fi'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    await updateProfile({ user })
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <RiArrowLeftLine /> Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/renyzeraa.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input
          type="text"
          icon={RiUser2Fill}
          placeholder="Nome Completo"
          value={name}
          onChange={e => setName(e.target.value)}
        ></Input>
        <Input
          type="text"
          icon={RiMailLine}
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></Input>
        <Input
          type="password"
          icon={RiLock2Line}
          placeholder="Senha atual"
          onChange={e => setPasswordOld(e.target.value)}
        ></Input>
        <Input
          type="password"
          icon={RiLock2Line}
          placeholder="Nova senha"
          onChange={e => setPasswordNew(e.target.value)}
        ></Input>
        <Button title="Salvar" onClick={handleUpdate}></Button>
      </Form>
    </Container>
  )
}
