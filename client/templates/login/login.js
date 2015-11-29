Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = event.target.elements.email.value;
        var password = event.target.elements.password.value;
        Meteor.loginWithPassword(email, password, function(error){
            console.log("error", error);
            if (!error) {
                Router.go('choose');
            }
        });

    }
});
