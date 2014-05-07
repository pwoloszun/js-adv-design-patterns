function repositoryTest(usersRepository) {
  var allUsers, user;

  usersRepository.findAll(function(users) {
    assertEqual(users.length, 3);
  });

  usersRepository.find({id: 2}, function(user) {
    assertEqual(user.name, "Batman");
  });

  usersRepository.find({id: 997}, function(user) {
    assertEqual(user, undefined);
  });
}
