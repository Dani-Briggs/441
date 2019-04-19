/*
Author: Dani Briggs
Date: April 19, 2019
Purpose: Last HW
*/
class Square{

  constructor(xCoord, yCoord, objectH, objectW, color){
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.objectH = objectH;
    this.objectW = objectW;
    this.color = color;
  }

  get x(){
    return this.xCoord;
  }

  set x(value){
    this.xCoord = value;
  }

  get y(){
    return this.yCoord;
  }

  set y(value){
    this.yCoord = value;
  }

  get height(){
    return this.objectH;
  }

  get width(){
    return this.objectW;
  }

  get mainColor(){
    return this.color;
  }



}
