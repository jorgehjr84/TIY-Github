(function(window) {

  $(document).ready(function() {


    $.getJSON('../api/github/users/octocat.json').then(function(octocat) {
      console.log(octocat.avatar_url);
    });
    // //Where is the URL for the avatar
    // $.getJSON('../api/github/users/octocat/octocat.json').then(function(octocat) {
    //
    //   //Where is the URL for the avatar
    //   console.log(octocat.avatar_url);
    //
    //
    //   //Where does the URL go in my HTML page?
    //   $avatar.attr('src', octocat.avatar_url);
    //
    //   //What do we do once we have the underpants?
    //   $avatar.attr('src', octocat.avatar_url);
    //
    // });


  }); //End of document ready function

})(window);