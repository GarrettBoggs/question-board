import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        upvote: 0,
        question: this.get('question')
      };
      this.set('addNewAnswer',false);
      this.sendAction('saveAnswer', params);
    }
  }
});
