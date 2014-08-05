'use strict';

function Student(obj){
  this.name = obj.name;
  this.color = obj.color;
  this.tests = [];
  this._suspended = {suspended:'no', color:'green'};
  this._honorRoll = {honor:'no', color:'red'};
}

Student.prototype.avg = function(){
  var sum = this.tests.reduce(function(a,b){ return a+ b;
  });
  return sum/this.tests.length;
};


module.exports = Student;
