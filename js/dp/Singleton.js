var SimpleSingleton = {

};

var Singleton = (function(FirstDependency, SecondDependency) {
  var myPrivate = 123;

  function privateMethod() {
  }

  var publicInterface = { // Singleton
    doSomething: function() {
      privateMethod();
      return "qq " + myPrivate;
    }
  };

  return publicInterface;

})(FirstDependency, SecondDependency);
