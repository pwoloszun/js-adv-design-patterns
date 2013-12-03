function runBenchmark(params) {
  //console.time(timerName);
  //console.timeEnd(timerName);
}

var METHODS_COUNT = 10;
var INSTANCES_COUNT = 1000;
runBenchmark({
  name: "priviledged",
  classFactory: priviledgedClassFactory,
  methodsCount: METHODS_COUNT,
  instancesCount: INSTANCES_COUNT
});

runBenchmark({
  name: "prototyped",
  classFactory: prototypedClassFactory,
  methodsCount: METHODS_COUNT,
  instancesCount: INSTANCES_COUNT
});
