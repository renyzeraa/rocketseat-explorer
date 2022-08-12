import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import {
  RiArrowLeftLine,
  RiUser2Fill,
  RiMailLine,
  RiLock2Line
} from 'react-icons/ri'
import { FiCamera } from 'react-icons/fi'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <RiArrowLeftLine /> Voltar
        </a>
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
        ></Input>
        <Input type="text" icon={RiMailLine} placeholder="E-mail"></Input>
        <Input
          type="password"
          icon={RiLock2Line}
          placeholder="Senha atual"
        ></Input>
        <Input
          type="password"
          icon={RiLock2Line}
          placeholder="Nova senha"
        ></Input>
        <Button title="Salvar"></Button>
      </Form>
    </Container>
  )
}
