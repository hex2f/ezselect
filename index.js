var doc_node;

try {
  doc_node = document;
} catch (e) {
  throw 'Could not find document. Please use ez(el, doc) to use the correct document.';
}

module.exports = function(elm, doc) {
  if(doc_node == undefined) throw 'Document node is not set. Please use ez(elm, doc) to use the correct document.';
  if(doc != undefined) doc_node = doc;
  try {
    return doc_node.querySelector(elmname);
  } catch (e) {
    throw `Oops. Something went wrong.  Error: ${e}`;
  }
}
