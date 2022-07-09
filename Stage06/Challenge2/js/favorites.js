export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
      }))
  }
}

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  saveUsers() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    try {
      const userExists = this.entries.find(entry => entry.login === username)

      if (userExists) {
        throw new Error('User exists!')
      }

      const user = await GithubUser.search(username)

      if (user.login === undefined) {
        throw new Error('User not found!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.saveUsers()
    } catch (error) {
      alert(error.message)
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      entry => entry.login !== user.login
    )

    this.entries = filteredEntries
    this.update()
    this.saveUsers()
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = document.querySelector('.favorite')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.input-content input')

      this.add(value)
    }
  }

  update() {
    const tbody = document.querySelector('.table-wrapper')
    if (this.entries.length === 0) {
      tbody.classList.add('active')
    } else {
      tbody.classList.remove('active')
    }

    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector(
        '.user img'
      ).src = `https://www.github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const confirmDelete = confirm(
          'Do you really want to delete this user ?'
        )
        if (confirmDelete) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }

  createRow() {
    const createTr = document.createElement('tr')

    createTr.innerHTML = `          
      <td class="user">
        <img src="https://www.github.com/renyzeraa.png" alt="User image">
        <a href="https://www.github.com/renyzeraa" target="_blank">
          <p class="name">Renan Silva</p>
          <span class="username-git">renyzeraa</span>
        </a>
      </td>
      <td class="repositories">
        <p>15</p>
      </td>
      <td class="followers">
        <p>27</p>
      </td>
      <td>
        <button class="remove" >Remove</button>
      </td>
  `

    return createTr
  }
}
