(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var doc_node;

try {
  doc_node = document;
} catch (e) {
  throw 'Could not find document. Please use ez(el, doc) to use the correct document.';
}

function EZElement(elmname) {
  this.el = doc_node.querySelector(elmname);
  this.css = (prop, val) => {
    this.el.style[prop] = val;
  }
  this.on = (ev,func) => {
    try {
      this.el.addEventListener(ev, func);
    } catch (e) {
      throw e;
    }
  }
  return this;
}

module.exports = function(elm, doc) {
  if(doc_node == undefined) throw 'Document node is not set. Please use ez(elm, doc) to use the correct document.';
  if(doc != undefined) doc_node = doc;
  try {
    console.log(elm)
    return new EZElement(elm);
  } catch (e) {
    throw `Oops. Something went wrong.  Error: ${e}`;
  }
}

},{}],2:[function(require,module,exports){
var ez = require('../index')

console.log(ez('#meme'));
ez('#meme').css('height', '100%')
ez('#meme').css('background', 'red')
ez('#meme').on('click', () => {
  console.log('clik lel')
})

},{"../index":1}]},{},[2]);
