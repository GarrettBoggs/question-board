import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer){
      if(confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyAnswer', answer);
        }
      },
      update(answer, params) {
        this.sendAction('update', answer, params);
       },
      like(){
        var originalUpvote = this.get('answer.upvote');
        originalUpvote += 1;
        this.set('answer.upvote', originalUpvote);
      },
      dislike(){
        var originalUpvote = this.get('answer.upvote');
        originalUpvote -= 1;
        this.set('answer.upvote', originalUpvote);
      },
    }

});
