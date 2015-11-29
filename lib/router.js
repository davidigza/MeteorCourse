Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'loginSystem'});
Router.route('/choose', {name: 'choose'});
Router.route('/choose/playerList',{
  name: 'playerList'
});


var requireLogin = function(){
  if (! Meteor.user()) {
    this.render('loginSystem');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin);
