// JavaScript Document

var form = document.getElementById("form")
var email = document.getElementById("email")
var input = document.querySelector("input")
var succesElement = document.getElementById("succesmessage")

form.addEventListener('submit', function (event) {
  if (input.value) {
    succesElement.innerText = input.value + ' heeft zich succesvol ingeschreven!'
  } else {
    succesElement.innerText = 'Oeps er ging iets fout met het invoeren van uw e-mail'
  }
  
  event.preventDefault()
})
