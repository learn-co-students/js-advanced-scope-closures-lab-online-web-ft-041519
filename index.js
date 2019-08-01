function produceDrivingRange(blockRange){
    return function withinRange(startDate, endDate){
        let startArr = startDate.split("")
        let startNum = []
        startNum.push(startArr[0])
        startNum.push(startArr[1])
        startDate = startNum.join("")
        let endArr = endDate.split("")
        let endNum = []
        endNum.push(endArr[0])
        endNum.push(endArr[1])
        endDate = endNum.join("")
        let dateRange = endDate - startDate
        if (blockRange > dateRange) {
            return `within range by ${blockRange - dateRange}`
        } else {
            return `${dateRange - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(tip){
    return function(bill){
        return bill * tip
    }
}

function createDriver(name) {
    let driverId = 0
    return class {
        constructor(name) {
            this.id = ++driverId
            this.name = name
        }
    }
}
