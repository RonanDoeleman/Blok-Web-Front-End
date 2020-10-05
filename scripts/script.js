// JavaScript Document

var form = document.getElementById("form")
var email = document.getElementById("email")
var input = document.querySelector("input")
var succesElement = document.getElementById("succesmessage")

form.addEventListener('submit', function (event) {
  if (input.value) {
    succesElement.innerText = input.value + "U heeft zich Succesvol ingeschreven!"
  } else {
    succesElement.innerText = "Oeps er ging iets fout met het invoeren van uw e-mail"
  }
  
  event.preventDefault()
})





// -- HAMBURGER MENI --
//de menu knop
var menubutton = document.querySelector(".menu-button");

//de hamburger menu
var hamburgermenu = document.querySelector(".hamburger-menu");

//de sluitknop van de hamburger menu
var menusluiten = document.querySelector(".hamburger-menu-sluiten"); 


//hier wordt er geklikt op de menu knop
menubutton.addEventListener("click", menuOpenen);

//hier wordt er geklikt op de sluit knop
menusluiten.addEventListener("click", menuSluiten);



function menuOpenen() {
    
    //als de hamburgermenu op display none staat wordt het een block als er geklikt wordt op de knop
    if(hamburgermenu.style.display === "none") {
        hamburgermenu.style.display = "block";
        
    //als de hamburgermenu geopend is en er wordt weer geklikt op de knop dan komt er een display none
    } else {
        hamburgermenu.style.display = "none";
    }

}



function menuSluiten(){
    
    //de hamburgermenu krijgt display none
    hamburgermenu.style.display = "none";
}