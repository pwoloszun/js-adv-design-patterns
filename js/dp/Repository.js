//var promise = $.get("server/users.json"); // AJAX request
//promise.success(function(data) {
//  console.log("Data from server", data);
//});
//promise.error(function(error) {
//  console.log("Server error", error);
//});

function repositoryTest(usersRepository) {
  var allUsers, user, hasBeenCalled = {
    findAll: false,
    findBy2: false,
    findBy997: false
  };

  usersRepository.findAll(function(users) {
    assertEqual(users.length, 3);
    hasBeenCalled.findAll = true;
  });

  usersRepository.findById(2, function(user) {
    assertEqual(user.name, "Batman");
    hasBeenCalled.findBy2 = true;
  });

  usersRepository.findById(997, function(user) {
    assertEqual(user, undefined);
    hasBeenCalled.findBy997 = true;
  });

  setTimeout(function() {
    assertEqual(hasBeenCalled.findAll, true);
    assertEqual(hasBeenCalled.findBy2, true);
    assertEqual(hasBeenCalled.findBy997, true);
  }, 2000);
}

//repositoryTest(usersRepository);
