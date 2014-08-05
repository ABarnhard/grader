'use strict';

function Student(obj){
  this.name = obj.name;
  this.color = obj.color;
  this.tests = [];
  this._suspended = {suspended:'no', color:'green'};
  this._honorRoll = {honor:'no', color:'red'};
}

Student.prototype.avg = function(){
  if(!this.tests.length){return 0;}

  var sum = this.tests.reduce(function(a,b){return a + b;});
  return sum/this.tests.length;

};

Student.prototype.letter = function(){
  var avg = this.avg();
  if(avg < 60){
    return 'F';
  }else if(avg < 70){
    return 'D';
  }else if(avg < 80){
    return 'C';
  }else if(avg < 90){
    return 'B';
  }else{
    return 'A';
  }
};


module.exports = Student;
