const assert = require('assert')

class Money {
    constructor(amount, currency) {
        this.amount = amount
        this.currency = currency
    }
    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }
    divide(divisor) {
        return new Money(this.amount / divisor, this.currency)
    }
}

let fiveDollards = new Money(5, "USD")
let tenDollards = new Money(10, "USD")
assert.deepStrictEqual(fiveDollards.times(2), tenDollards)

let actualYan = new Money(20, "YAN")
let actualYanAfterDivision = actualYan.divide(4)
let expectedValue = new Money(5, "YAN")
assert.deepStrictEqual(actualYanAfterDivision, expectedValue)