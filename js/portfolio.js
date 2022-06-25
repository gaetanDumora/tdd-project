import { Money } from './money.js'

export class Portfolio {
    constructor() {
        this.moneys = []
    }
    add(...money) {
        this.moneys = this.moneys.concat(money)
    }
    evaluate(currency) {
        let moneysAmount = this.moneys.reduce((acc, curr) => acc + curr.amount, 0)
        return new Money(moneysAmount, "EUR")
    }
}
