/*
* Using userRepository create cachedUserRepository - it should return cached results
* if previous request has been made earlier than 1min ago
* */
function proxyTest(cachedUserRepository) {
  var allUsers, user;

  cachedUserRepository.findAll(function(users) {
    assertEqual(users.length, 3);
  });

  setTimeout(function() {
    cachedUserRepository.findAll(function(users) {
      assertEqual(users.length, 3);
    });
  }, 3000);
}
