function produceDrivingRange(blockRange) {
    return function(start, finish) {
        const blockDist = Math.abs(start.replace("th", "") - finish.replace("th", ""));
        if (blockDist > blockRange) {
            return `${blockDist - blockRange} blocks out of range`
        } else if (blockDist < blockRange) {
            return `within range by ${blockRange - blockDist}`
        }
    }
}

function produceTipCalculator(percentage) {
    return function(bill) {
        return bill * percentage;
    }
}

function createDriver() {
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}