
var random_result;
var wins;
var losses;

random_result = Math.floor(Math.random() * 101 ) + 19;
$("#result").html('Computer Number: ');

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < 4; i++) {

  //Each crystal will have a random hidden value between 1 - 12
  var randomNumber = Math.floor(Math.random() * 12);
  
  
  // For each iteration, we will create an imageCrystal
  var imageCrystalA = $("<img>");
  var imageCrystalB = $("<img>");
  var imageCrystalC = $("<img>");
  var imageCrystalD = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystalA.attr("src", "../images/crystal_02.jpg");
  imageCrystalB.attr("src", "../images/crystal_03.jpg");
  imageCrystalC.attr("src", "../images/crystal_04.jpg");
  imageCrystalD.attr("src", "../images/crystal_05.jpg");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystalA.attr("data-random", random);
  imageCrystalB.attr("data-random", random);
  imageCrystalC.attr("data-random", random);
  imageCrystalD.attr("data-random", random);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystalA);
  $("#crystals").append(imageCrystalB);
  $("#crystals").append(imageCrystalC);
  $("#crystals").append(imageCrystalD);
}




/*var imageCrystal = $("<div>");
$(".imageCrystal").append(crystal);

//users guess
var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('computerNum');
computerNum.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
    var numberToAdd = parseInt(val);
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = numberToAdd + currentScore;
}*/


/*

var computerNumber = [28, 33, 53, 102];

$("#number-to-guess").text(computerNumber);

var counter = 0;

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");*/