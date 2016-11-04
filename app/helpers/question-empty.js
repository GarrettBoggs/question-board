import Ember from 'ember';

export function questionEmpty(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') == 0){
    return Ember.String.htmlSafe('Be the first to answer this question.');
  }
}

export default Ember.Helper.helper(questionEmpty);
