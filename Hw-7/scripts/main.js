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
  var myViewFinder = new ViewFinder("Muse in Vegas", "Dani Briggs", "2013", "This concert was at the Mandalay Bay convention center and was my first concert.","images/vegasConcert.jpg");
  myViewFinderArray.push(myViewFinder);

  var myViewFinderOne = new ViewFinder("Muse in Portland", "Dani Briggs", "2015", "This concert was at the Moda center and was my second time seeing Muse.","images/portConcert.jpeg");
  myViewFinderArrayOne.push(myViewFinderOne);

  var myViewFinderTwo = new ViewFinder("Muse in Salt Lake City", "Dani Briggs", "2017", "This concert was at the USANA Amphitheatre and was my third time seeing Muse.","images/saltConcert.JPG");
  myViewFinderArrayTwo.push(myViewFinderTwo);


}
function accessInfo()
{
var randomNum = Math.random();

 document.getElementById("title").innerHTML = myViewFinderArray[2].toString
 document.getElementById("image").src = myViewFinderArray[2].toString

}
