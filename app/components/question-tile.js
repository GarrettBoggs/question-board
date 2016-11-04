import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  if(question.get('answers').get('length') == 0)
  actions: {
    update(question, params) {
     this.sendAction('update', question, params);
   },
    delete(question) {
      if(confirm('Are you sure you want to delete this Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    addFavorite(question){
      this.get('favoriteQuestions').add(question);
    },
  }
});
