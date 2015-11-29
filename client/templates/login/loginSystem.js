Template.loginSystem.events({
    'click .redirect': function(event){
      if (Meteor.user()) {
        Router.go('choose');
      }
    }
});
