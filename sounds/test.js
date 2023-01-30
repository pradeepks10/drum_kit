for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    // for listen to button pressed ,apply listerner to  each button
    document.querySelectorAll("button")[i].addEventListener("click", function() {
      var bootonPressed = this.innerHTML;
      makeSound(bootonPressed);
     bottomAnimation(bootonPressed);
    });
  
  
  }
  // for listen to  keyboard key ,apply listerner to whole document
  document.addEventListener("keypress", function(event) {
    //event refers to press key as object, event name be any thing like e,evt ,name does not matter
    // function is called by "keypress" not by event
    //event.key give pressed keyboard key
    makeSound(event.key);
     bottomAnimation(event.key);
  });
  
  
  function makeSound(key) {
  
    switch (key) {
      case "w":
        var tom6 = new Audio("sounds/tom-6.mp3");
        tom6.play();
        break;
      case "a":
        var tom5 = new Audio("sounds/tom-5.mp3");
        tom5.play();
        break;
  
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
  
      case "j":
        var tom0 = new Audio("sounds/tom-0.mp3");
        tom0.play();
        break;
      case "k":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "l":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      default:
        console.log(buttonPressed);
    }
  
  }
  
  function bottomAnimation(key){
   // select the buuton
   var activeButton=document.querySelector("."+key);
   activeButton.classList.add("pressed");
   //setTimeout fn is used to execute a function after a difinite time delay
   //it's first paramerter is fn that is to execute ,and second one is time
   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },100);
  
  }
  
  
  
  // "sounds\\tom-"+i+".mp3"
  // var audio = new Audio( "sounds\\tom-"+i+".mp3");
  //   audio.play();
  