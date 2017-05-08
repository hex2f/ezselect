var doc_node;

try {
  doc_node = document;
} catch (e) {
  throw 'Could not find document. Please use setDocumentNode() to set document node.';
}

exports.setDocumentNode = function(doc) {
  doc_node = doc;
}
exports.default = function(elm) {
  if(doc_node == undefined) throw 'Document node is not set. Please use setDocumentNode() to set document node.';
  try {
    return document.querySelector(elm);
  } catch (e) {
    throw `Oops. Something went wrong.  Error: ${e}`;
  }
}
