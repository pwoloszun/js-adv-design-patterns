// Implement Delegator module
function delegateToExampleUsage() {
  var RealEstate = declare([Delegator], {
    constructor: function(type, address) {
      this.type = type;
      this.address = address;
      this.delegate({methods: ["getStreet", "distanceFrom"], to: "address"});
    }
  });

  var Address = declare([], {
    constructor: function(street, zipCode) {
      this.street = street;
      this.zipCode = zipCode;
    },
    getStreet: function() {
      return this.street;
    },
    distanceFrom: function(otherAddress) {
      return 123;
    }
  });

  var address = new Address("Wadowicka 6", "01-003");
  var realEstate = new RealEstate("house", address);
  log(realEstate.getStreet(), realEstate.distanceFrom(new Address()));
}
