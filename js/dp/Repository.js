//var promise = $.get("server/users.json"); // AJAX request
//promise.success(function(data) {
//  console.log("Data from server", data);
//});
//promise.error(function(error) {
//  console.log("Server error", error);
//});

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

//repositoryTest(usersRepository);
