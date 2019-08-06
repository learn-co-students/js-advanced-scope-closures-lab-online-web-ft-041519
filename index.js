function produceDrivingRange (info1) {
    return function (arg1, arg2) {
        const store = arg2.substring(0,2) - arg1.substring(0,2);
        if (store > info1)
            {return `${Math.abs(store-info1)} blocks out of range`;}
        else 
            {return `within range by ${Math.abs(store-info1)}`;} 
    }
} 

function produceTipCalculator (info1) {
    return function (info2) {
        return info1 * info2; 
    }
} 

function createDriver () {
    let driverId = 0; 

    return class Driver {    

        constructor(name) {
            this.name = name; 
            this.id = ++driverId; 
        } 
    }
} 