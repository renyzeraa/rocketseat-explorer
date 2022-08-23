import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import {
  RiArrowLeftLine,
  RiUser2Fill,
  RiMailLine,
  RiLock2Line
} from 'react-icons/ri'
import { FiCamera } from 'react-icons/fi'
import no_avatar from '../../assets/no_avatar.svg'
import { api } from '../../service/api'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : no_avatar
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    await updateProfile({ user, avatarFile })
    navigate(-1)
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <a onClick={() => navigate(-1)}>
          <RiArrowLeftLine /> Voltar
        </a>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
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
