//Untuk mengambil data pada form
const myForm = document.getElementById('my-form')
const fname = document.getElementById('fname-text')
const pname = document.getElementById('pname-text')
const availability = document.getElementById('availability')
const usia = document.getElementById('usia')
const lokasi = document.getElementById('lokasi')
const pengalaman = document.getElementById('pengalaman')
const email = document.getElementById('email')

const buttonSubmit = document.getElementById('my-button')
const myBox = document.getElementById('my-box')

let isformShow = true

myForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const currentName = myForm.elements.fname.value
  const currentProfession =  myForm.elements.pname.value
  const currentProfession1 = myForm.elements.availability.value
  const currentProfession2 = myForm.elements.usia.value
  const currentProfession3 = myForm.elements.lokasi.value
  const currentProfession4 = myForm.elements.pengalaman.value
  const currentProfession5 = myForm.elements.email.value

  // console.log(currentName, currentProfession)
  fname.innerHTML = currentName
  pname.innerHTML = currentProfession
  availability.innerHTML = currentProfession1
  usia.innerHTML = currentProfession2
  lokasi.innerHTML = currentProfession3
  pengalaman.innerHTML = currentProfession4
  email.innerHTML = currentProfession5

//Untuk memanggil fungsi css hide
  toggleBox()
})
function toggleBox () {
  if(isformShow) {
    isformShow = false
    myBox.classList.remove('hide')
  } else {
    isformShow = true
    myBox.classList.add('hide')
  }
}

//Untuk mengaktifkan button submit
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  toggleBox()
})