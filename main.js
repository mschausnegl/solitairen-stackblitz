document.querySelector('#app').innerHTML = `
  <div>
    <h1>Solitairen</h1>
    <div class="card">
      <button id="start" type="button">Start Game</button>
    </div>
  </div>
`

document.querySelector('#start').addEventListener('click', () => {
  console.log('Starting game...')
})
