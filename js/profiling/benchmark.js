function runBenchmark(params) {
//  console.time(params.name);
//  console.timeEnd(params.name);
}

function exampleBenchmarkRun() {
  var methodsCount = 10;
  var instancesCount = 1000;

  runBenchmark({
    name: "privileged",
    classFactory: privilegedClassFactory,
    methodsCount: methodsCount,
    instancesCount: instancesCount
  });

  runBenchmark({
    name: "prototyped",
    classFactory: prototypedClassFactory,
    methodsCount: methodsCount,
    instancesCount: instancesCount
  });
}
//exampleBenchmarkRun();
