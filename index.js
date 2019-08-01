 function produceDrivingRange(blockRange) {
    return function(startPoint, endPoint) {
        let start = parseInt(startPoint.replace('th', ''));
        let end = parseInt(endPoint.replace('th', ''));
        let distance = Math.abs(start - end);
        let rangeInt = parseInt(blockRange)
        if(distance > rangeInt) {
            return `${distance - rangeInt} blocks out of range`;
        } else {
            return `within range by ${rangeInt - distance}`;
        };
    };
 };

 function produceTipCalculator(percentTip) {
     return function(bill) {
         return bill*percentTip;
    };
 };

 function createDriver() {
     let driverId = 0;

     return class Driver {
         constructor(name) {
            this.name = name;
            this.id = driverId++;
         };
     };
 };