'use strict';
var _ = require('lodash');

var prepareItems = function prepareItems(items) {
  if (!items){
    return [];
  }
  if (!Array.isArray(items)) {
    items = [items];
  }
  return  _.cloneDeep(items);
};

var removePhrasesFromDataStructure = function removePhrasesFromDataStructure(phrasesIdsInput) {
  var module = this;
  var phrasesIds = prepareItems(phrasesIdsInput);
  var index;
  var indexes = [];
  phrasesIds.forEach(function(newPhraseId) {
    index = _.findIndex(module.data.phrases, function(oldPhrase) {
      return oldPhrase.id === newPhraseId;
    });
    if (index !== -1){
      indexes.push(index);
    }
  });
  _.pullAt(module.data.phrases, _.uniq(indexes));
};

module.exports = removePhrasesFromDataStructure;
