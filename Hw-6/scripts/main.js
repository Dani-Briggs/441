/*
Author: Dani Briggs
Date: Feb 24, 2019
Purpose: matching game
*/

var score = 0;
//create array for imageTags
var imageTags = ["image1", "image2","image3", "image4", "image5", "image6", "image7", "image8", "image9","image10"]
// variable for blank image
var blankImagePath = "Images/back.jpg"
// variable for the real Images
var actualImages = new Array();

var firstNumber = -1;
var secNumber = -1;
var thirdNumber = -1;
var fourthNumber = -1;
var fifthNumber = -1;

var player = {"firstname":"", "lastname":"", "age":"", "score": ""};

//function for blank card
function printBlanks()
{

    createRandomImageArray();
    for (var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src = blankImagePath;

    }

}

function createRandomImageArray()
{
    var actualImagePath = ["Images/bigby.png", "Images/Cole-macgrath.jpg", "Images/ellie.jpg", "Images/Geralt.jpg", "Images/skull.jpg"];

    var count = [0,0,0,0,0];

    while(actualImages.length < 10)
    {

      var randomNumber = Math.floor(Math.random() * actualImagePath.length)

      if(count[randomNumber] < 2)
      {

          actualImages.push(actualImagePath[randomNumber]);
          count[randomNumber] = count[randomNumber] + 1;

      }
    }
}


function flipImage(number)
{

  if(firstNumber >= 0)
  {

    secNumber = number;
    document.getElementById(imageTags[number]).src = actualImages[secNumber];


  }
  else if (firstNumber < 0)
  {
    firstNumber = number;
    document.getElementById(imageTags[firstNumber]).src = actualImages[firstNumber];

  }
  if(actualImages[secNumber] != actualImages[firstNumber] && firstNumber >= 0 && secNumber >= 0 )
  {
    setTimeout(imageDisappear, 900);

    score++;
    return score;
  }
  else if(actualImages[secNumber] == actualImages[firstNumber] &&  firstNumber >= 0 && secNumber >= 0 )
  {
   firstNumber = -1;
   secNumber = -1;
   score++;
   return score;

  }


}

function imageDisappear()
{

  document.getElementById(imageTags[firstNumber]).src = blankImagePath;
  document.getElementById(imageTags[secNumber]).src = blankImagePath;

  firstNumber = -1;
  secNumber = -1;

}

function addToPlayer()
{

  var firstname = document.getElementById("txtFirstName").value;
  player.firstname = firstname;

  var lastname = document.getElementById("txtLastName").value;
  player.lastname = lastname;

  var age = document.getElementById("txtAge").value;
  player.age = age;

  localStorage.setItem("playerInfo", JSON.stringify(player));
  window.location = "index.html";


}

function playerInfo()
{
  var playerInformation = localStorage.getItem("playerInfo");
  player = JSON.parse(playerInformation);


}

function lastPage()
{

  playerInfo.score = score

  localStorage.setItem("playerInfo", JSON.stringify(player));
  window.location = "finalpage.html";
}

function loadPage()
{

document.getElementById("txtFirstName").innerHTML = playerInfo.firstname + " " + playerInfo.lastname;
document.getElementById("txtAge").innerHTML = "Age: " + playerInfo.age
document.getElementById("score").innerHTML = "Final Score: " + playerInfo.score;
}
