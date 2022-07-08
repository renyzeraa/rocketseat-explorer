export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
  }

  update() {
    const tbody = this.root.querySelector('tbody')

    tbody.querySelectorAll('tr')

    return console.log(tbody)
  }
}
