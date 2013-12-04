function log() {
  console.log.apply(console, arguments);
}

function assertEq(actualVal, expectedVal) {
  if (actualVal !== expectedVal) {
    console.error(actualVal, " should === ", expectedVal);
    throw actualVal + " should === " + expectedVal;
  }
}
