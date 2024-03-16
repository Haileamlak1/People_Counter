let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

let count = 0

function lapcounter(){
  count++
  countEl.textContent = count
}

function save(){
  let countDash = count + ' - '
  saveEl.textContent += countDash
  countEl.textContent = 0
  count = 0
}
