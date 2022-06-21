const assert = require('assert')
class Dollard {
    constructor(amount){
        this.amount = amount
    }
    times(multiplier){
        return new Dollard(
            this.amount * multiplier
        )
    }
}
let fiver = new Dollard(5)
let tenner = fiver.times(2)
assert.strictEqual(tenner.amount, 10)