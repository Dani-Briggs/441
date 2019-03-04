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
function initialArray()
{
  var myViewFinder = new ViewFinder("Muse in Vegas");
  myViewFinderArray.push(myViewFinder);

}
function accessInfo()
{

 //console.log(myViewFinder.theTitle);
 document.getElementById("title").innerHTML = myViewFinderArray[0].toString

}
