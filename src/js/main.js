(function(window) {

  $.getJSON('/api/github/users/octocat.json').then(function(octocat) {
    // Where is the URL for the avatar? octocat.avatar_url
    // console.log(octocat);
    // Where does the URL go in my HTML page?
    $avatar = $('#octocat-img');
    $avatar.attr('src', octocat.avatar_url);
    // //   // What do we do once we have the underpants?

    // $('[data-bind="user.login"]').text(octocat.login)


    $name = $('#name');
    $name.text(octocat.name);

    $login = $('#login');
    $login.text(octocat.login);

    $organizations = $('.organizations');
    $organizations.text(octocat.company);

    $location = $('.location');
    $location.text(octocat.location);

    $email = $('.email');
    $email.text(octocat.email);

    $blog = $('.blog ');
    $blog.text(octocat.blog);

    $followers = $('.followers');
    $followers.text(octocat.followers);

    $starred = $('.starred');
    $starred.text(octocat.starred);

    $following = $('.following');
    $following.text(octocat.following);

    //How to replace the place holders with user data using lodash
    // var nameTpl = _.template($name.text());



  });

})(window);