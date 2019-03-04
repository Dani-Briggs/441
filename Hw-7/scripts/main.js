/*
Author: Dani Briggs
Date: March 4, 2019
Purpose: Viewmaster
*/
var myViewFinderArray = new Array();

class ViewClass
{
    constructor(title)
    {
      this.title = title;

    }
    toString()
    {
      return "Title: " + this.title;
    }

    get theTitle()
    {
       return this.title;

    }


}
function initialArray()
{
  var myViewFinder = new ViewFinder("vegas");
  myViewFinderArray.push(myViewFinder);

}
function accessInfo()
{

 //console.log(myViewFinder.theTitle);
 document.getElementById("title").innerHTML = myViewFinderArray[0].toString

}
