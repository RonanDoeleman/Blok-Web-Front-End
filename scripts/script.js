// JavaScript Document

// -- HAMBURGER MENU --
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
  if (hamburgermenu.style.display === "none") {
    hamburgermenu.style.display = "block";

    //als de hamburgermenu geopend is en er wordt weer geklikt op de knop dan komt er een display none
  } else {
    hamburgermenu.style.display = "none";
  }
}

function menuSluiten() {
  //de hamburgermenu krijgt display none
  hamburgermenu.style.display = "none";
}

// WINKELWAGEN

var addToCartButtons = document.querySelectorAll("button.winkelwagen");

for (i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", updateShoppingCart);
}

function updateShoppingCart() {
  let ShoppingCart = document.querySelector(".shopping-cart");

  let ShoppingCartAmount = ShoppingCart.querySelector("span");

  let currentAmount = ShoppingCartAmount.innerHTML;

  currentAmount = parseInt(currentAmount);

  let newAmount = currentAmount + 1;

  ShoppingCartAmount.innerHTML = newAmount;
}



// AFBEELDINGEN VERANDEREN

var fotos = ["stonelongsleevefront.jpg", "stonelongsleeveback.jpg"];
var fotoImg = document.querySelector("#foto");
var vooruitButton = document.querySelector("#vooruit");
var achteruitButton = document.querySelector("#terug");

var huidigFotoNr = 0;

function bladerVooruit() {
  huidigFotoNr = huidigFotoNr + 1;
  if (huidigFotoNr > fotos.length - 1) {
    huidigFotoNr = 1;
  }
  console.log("vooruitbladeren " + huidigFotoNr);

  fotoImg.src = "./images/" + fotos[huidigFotoNr];
}

function bladerAchteruit() {
  huidigFotoNr = huidigFotoNr - 1;
  console.log(huidigFotoNr);
  if (huidigFotoNr < 1) {
    huidigFotoNr = 0;
  }
  console.log("achteruitbladeren " + huidigFotoNr);

  fotoImg.src = "./images/" + fotos[huidigFotoNr];
}

vooruitButton.addEventListener("click", bladerVooruit);
achteruitButton.addEventListener("click", bladerAchteruit);

// MAATSELECTEREN

var btnContainer = document.querySelector(".sizes ");
var btns = document.querySelectorAll(".btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    btnContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
  });
}

// EMAIL INVOEREN

var form = document.getElementById("form");
var email = document.getElementById("email");
var input = document.querySelector("input");
var succesElement = document.getElementById("succesmessage");

form.addEventListener("submit", function (event) {
  if (input.value) {
    succesElement.innerText =
      input.value + "U heeft zich Succesvol ingeschreven!";
  } else {
    succesElement.innerText =
      "Oeps er ging iets fout met het invoeren van uw e-mail";
  }

  event.preventDefault();
});