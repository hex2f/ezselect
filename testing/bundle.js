(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var doc_node;

try {
  doc_node = document;
} catch (e) {
  throw 'Could not find document. Please use ez(el, doc) to use the correct document.';
}

function Element(elm) {
  this.element = doc_node.querySelector(elm);
  this.css = (prop, val) => {
    this.element.style[prop] = val;
  }
  return this.element;
}

module.exports = function(elm, doc) {
  if(doc_node == undefined) throw 'Document node is not set. Please use ez(elm, doc) to use the correct document.';
  try {
    console.log(elm)
    return new Element(elm);
  } catch (e) {
    throw `Oops. Something went wrong.  Error: ${e}`;
  }
}

},{}],2:[function(require,module,exports){
var ez = require('../index')

console.log(ez('body'));
ez('#meme').css('background', '#ABCDEF')

},{"../index":1}]},{},[2]);
