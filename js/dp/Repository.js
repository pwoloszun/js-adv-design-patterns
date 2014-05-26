function repositoryTest(usersRepository) {
  var allUsers, user;

  usersRepository.findAll(function(users) {
    assertEqual(users.length, 3);
  });

  usersRepository.findById(2, function(user) {
    assertEqual(user.name, "Batman");
  });

  usersRepository.findById(997, function(user) {
    assertEqual(user, undefined);
  });
}
