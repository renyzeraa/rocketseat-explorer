export default function Controls({ buttonPlay, buttonPause }) {
  function hideShowButton(hideButton, showButton) {
    hideButton.classList.add('hide')
    showButton.classList.remove('hide')
  }

  function play() {
    hideShowButton(buttonPlay, buttonPause)
  }

  function pause() {
    hideShowButton(buttonPause, buttonPlay)
  }

  function toggle(card) {
    card.classList.toggle('active')
  }

  return {
    play,
    pause,
    toggle
  }
}
