function produceDrivingRange(blockRange) {
  return function(startPoint, endPoint) {
    const totalRange = Math.abs(startPoint.replace("th", "") - endPoint.replace("th", ""));
    if  (totalRange <= blockRange)
      return `within range by ${blockRange - totalRange}`;
    else
      return `${totalRange  - blockRange} blocks out of range`;
  };
}

function produceTipCalculator(tipPercentage){
  return function(fare){
    return fare * tipPercentage;
  }
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
