import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../service/api'
import Swal from 'sweetalert2'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState('')

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@mymovies:user', JSON.stringify(user))
      localStorage.setItem('@mymovies:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
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
          text: 'Não foi possível entrar'
        })
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@mymovies:user')
    localStorage.removeItem('@mymovies:token')
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)

        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@mymovies:user', JSON.stringify(user))

      setData({ user, token: data.token })

      Swal.fire({
        icon: 'success',
        title: 'Dados alterados com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      if (error.response) {
        Swal.fire(error.response.data.message)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Não foi possível atualizar o perfil '
        })
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@mymovies:token')
    const user = localStorage.getItem('@mymovies:user')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
