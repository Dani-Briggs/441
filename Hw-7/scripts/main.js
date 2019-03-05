/*
Author: Dani Briggs
Date: March 4, 2019
Purpose: Viewmaster
*/
var myViewFinderArray = new Array();

class ViewClass
{
    constructor(title, author, year, description, image)
    {
      this.title = title;
      this.author = author;
      this.year = year;
      this.description = description;
      this.image = image;


    }
    toString()
    {
      return "Title: " + this.title;
      return "Author: " + this.author;
      return "Year: " + this.year;
      return "Description: " + this.description;
      return this.image;
    }

    get theTitle()
    {
       return this.title;

    }
    get imageAuthor()
    {
        return this.author;
    }

    get imageYear()
    {
        return this.year;
    }
    get imageDes()
    {
        return this.description;
    }
    get theImage()
    {
        return this.image;
    }

}
function initializeArray()
{
  //title, author, year, description, image
  var myViewFinder = new ViewClass("Muse in Vegas", "Dani Briggs", "2013", "This concert was at the Mandalay Bay convention center and was my first concert.","images/vegasConcert.jpg");
  myViewFinderArray.push(myViewFinder);

  var myViewFinderOne = new ViewClass("Muse in Portland", "Dani Briggs", "2015", "This concert was at the Moda center and was my second time seeing Muse.","images/portConcert.jpeg");
  myViewFinderArray.push(myViewFinderOne);

  var myViewFinderTwo = new ViewClass("Muse in Salt Lake City", "Dani Briggs", "2017", "This concert was at the USANA Amphitheatre and was my third time seeing Muse.","images/saltConcert.JPG");
  myViewFinderArray.push(myViewFinderTwo);


}
function accessInfo()
{
  var randomNum = Math.floor(Math.random(2));

 document.getElementById("title").innerHTML = myViewFinderArray[randomNum].toString();
 document.getElementById("author").innerHTML = myViewFinderArray[randomNum].toString();
 document.getElementById("year").innerHTML = myViewFinderArray[randomNum].toString();
 document.getElementById("description").innerHTML = myViewFinderArray[randomNum].toString();
 document.getElementById("image").src = myViewFinderArray[randomNum].toString();

}
