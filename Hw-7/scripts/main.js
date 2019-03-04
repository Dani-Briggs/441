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

    get theTitle()
    {
       return this.title;

    }


}
function initialInfo()
{
  var myViewFinder = new ViewFinder("pug");
  myViewFinderArray.push(myViewFinder);

}
function accessInfo()
{

 //console.log(myViewFinder.theTitle);
 document.getElementById("title").innerHTML = myViewFinderArray[0].theTitle

}
