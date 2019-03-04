/*
Author: Dani Briggs
Date: March 4, 2019
Purpose: Viewmaster
*/


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

function accessInfo()
{
 var myViewFinder = new ViewFinder("pug");
 console.log(myViewFinder.theTitle);

}
