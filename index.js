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
