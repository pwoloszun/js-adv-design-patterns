/*
* Using userRepository create cachedUserRepository -
* it should cache results for up to 5 seconds, and send AJAX
* request only if there are no cached results or cache has expired
* */
function proxyTest(cachedUserRepository) {
  var allUsers, user;

  // sends aJAX request
  cachedUserRepository.findAll(function(users) {
    assertEqual(users.length, 3);
  });

  setTimeout(function() {
    // returns cached results
    cachedUserRepository.findAll(function(users) {
      assertEqual(users.length, 3);
    });
  }, 3000);

  setTimeout(function() {
    // sends aJAX request
    cachedUserRepository.findAll(function(users) {
      assertEqual(users.length, 3);
    });
  }, 6000);
}
