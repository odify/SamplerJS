var soundCrash = new Audio("assets/sounds/crash.mp3");
var soundKickBass = new Audio("assets/sounds/kick-bass.mp3");
var soundSnare = new Audio("assets/sounds/snare.mp3");
var soundTom1 = new Audio("assets/sounds/tom-1.mp3");
var soundTom2 = new Audio("assets/sounds/tom-2.mp3");
var soundTom3 = new Audio("assets/sounds/tom-3.mp3");
var soundTom4 = new Audio("assets/sounds/tom-4.mp3");
var soundCloud = new Audio("assets/sounds/cloud.mp3");
var soundFalcon = new Audio("assets/sounds/falcon.mp3");
var soundSfx1 = new Audio("assets/sounds/sfx1.mp3");
var soundSfx2 = new Audio("assets/sounds/sfx2.mp3");
var soundSfx3 = new Audio("assets/sounds/sfx3.mp3");
var soundSfx4 = new Audio("assets/sounds/sfx4.mp3");
var soundSfx5 = new Audio("assets/sounds/sfx5.mp3");
var soundSfx6 = new Audio("assets/sounds/sfx6.mp3");
var soundSfx7 = new Audio("assets/sounds/sfx7.mp3");
var soundSfx8 = new Audio("assets/sounds/sfx8.mp3");
var soundSfx9 = new Audio("assets/sounds/sfx9.mp3");
var soundSfx10 = new Audio("assets/sounds/sfx10.mp3");
var soundSfx11 = new Audio("assets/sounds/sfx11.mp3");
var soundSfx12 = new Audio("assets/sounds/sfx12.mp3");
var soundSfx13 = new Audio("assets/sounds/sfx13.mp3");
var soundSfx14 = new Audio("assets/sounds/sfx14.mp3");
var soundR2d2 = new Audio("assets/sounds/R2D2-1.mp3");
var soundR2d22 = new Audio("assets/sounds/R2D2-2.mp3");
var soundR2d23 = new Audio("assets/sounds/R2D2-3.mp3");




var selectDrumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < selectDrumButtons.length; i++) {

  selectDrumButtons[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
};


document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key)

});


function makeSound(key) {
  
  switch (key) {
    case "q":
      soundSfx1.play();
      break;
    case "w":
      soundSfx2.play();
      break;
    case "e":
      soundSfx3.play();
      break;
    case "r":
      soundSfx4.play();
      break;
    case "t":
      soundSfx5.play();
      break;
    case "z":
      soundSfx6.play();
      break;
    case "u":
      soundSfx7.play();
      break;
    case "i":
      soundSfx8.play();
      break;
    case "o":
      soundSfx9.play();
      break;
    case "p":
      soundSfx10.play();
      break;
    case "a":
      soundTom1.play();
      break;
    case "s":
      soundTom2.play();
      break;
    case "d":
      soundTom3.play();
      break;
    case "f":
      soundTom4.play();
      break;
    case "g":
      soundSfx11.play();
      break;
    case "h":
      soundSfx12.play();
      break;
    case "j":
      soundCrash.play();
      break;
    case "k":
      soundKickBass.play();
      break;
    case "l":
      soundSnare.play();
      break;
    case "x":
      soundCloud.play();
     break;
    case "y":
      soundFalcon.play();
      break;
    case "c":
      soundSfx13.play();
      break;
    case "v":
      soundSfx14.play();
    break;
    case "b":
      soundR2d2.play();
     break;
    case "n":
      soundR2d22.play();
     break;
    case "m":
      soundR2d23.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  };
}


function buttonAnimation(currentKey) {
  
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
