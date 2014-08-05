/* jshint expr: true */
/* global describe, it, before, beforeEach */ 
'use strict';

var expect = require('chai').expect;
var Student = require('../../app/models/student');


var s1;
var sObj1 = {name:'Sara', color:'#ccc'};

describe('student', function(){
  describe('constructor', function(){
    it('should create a student with proper attributes', function(){
      s1 = new Student(sObj1);
      expect(s1.name).to.equal('Sara');
      expect(s1.color).to.equal('#ccc');
      expect(s1.tests).to.have.length(0);
      expect(s1).to.be.instanceof(Student);
      expect(s1._suspended).to.eql({suspended:'no', color:'green'});
      expect(s1._honorRoll).to.eql({honor:'no', color:'red'});
    });
  });
  describe('#avg', function(){
    it('should return the average of all test scores', function(){
      s1 = new Student(sObj1);
      s1.tests = [95, 85, 75, 65, 55];
      expect(s1.avg()).to.be.closeTo(75, 0.1);
      s1.tests = [];
      expect(s1.avg()).to.equal(0);
    });
  });
  describe('#letter', function(){
    it('should return a letter grade vased on #avg', function(){
      s1 = new Student(sObj1);
      s1.tests = [95, 85, 75, 65, 55];
      expect(s1.letter()).to.equal('C');
    });
  });
});
