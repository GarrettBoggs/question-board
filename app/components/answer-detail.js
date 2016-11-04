import Ember from 'ember';

export default Ember.Component.extend({

    sortBy: ['upvote:desc'],
    sortAnswers: Ember.computed.sort('model.answers', 'sortBy'),

  actions: {

      destroyAnswer(answer){
        answer.destroyRecord();
        this.transitionTo('index');
          },

          update(question, params) {
          Object.keys(params).forEach(function(key) {
            if(params[key]!==undefined) {
              question.set(key,params[key]);
            }
          });
          question.save();
          this.transitionTo('question');
        },

    }
});
