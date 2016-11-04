import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    update(answer) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        upvote: this.get('upvote'),
      };
      this.set('updateAnswerForm',false);
      console.log(params);
      this.sendAction('update', answer, params);
    }
  }
});
