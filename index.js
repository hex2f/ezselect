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
