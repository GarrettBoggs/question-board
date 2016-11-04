import Ember from 'ember';

export default Ember.Component.extend({

    totalAnswers: Ember.computed('model.answers', function() {
    console.log(this.get('model.answers'));
    return this.get('model.answers');
  }),

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
