/*
* Using userRepository create cachedUserRepository -
* it should cache results for up to 5 seconds, and send AJAX
* request only if there are no cached results or cache has expired
* */
function proxyTest(cachedUserRepository) {
  var allUsers, user;

  cachedUserRepository.findAll(function(users) {
    console.log("should send AJAX request");
    assertEqual(users.length, 3);
  });

  setTimeout(function() {
    cachedUserRepository.findAll(function(users) {
      console.log("should return cached results");
      assertEqual(users.length, 3);
    });
  }, 3000);

  setTimeout(function() {
    cachedUserRepository.findAll(function(users) {
      console.log("should send new AJAX request");
      assertEqual(users.length, 3);
    });
  }, 6000);
}
