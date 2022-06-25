import { Money } from './money.js'

export class Portfolio {
    constructor() {
        this.moneys = []
    }
    add(...money) {
        this.moneys = this.moneys.concat(money)
    }
    convert(money, currency) {
        let exchangeRates = new Map()
        exchangeRates.set('EUR->USD', 1.2)
        exchangeRates.set('USD->KRW', 1100)
        let key = `${money.currency}->${currency}`
        if (money.currency === currency) {
            return money.amount
        }
        return money.amount * exchangeRates.get(key)
    }
    evaluate(currency) {
        let moneysAmount = this.moneys.reduce((acc, curr) =>
            acc + this.convert(curr, currency), 0)
        return new Money(moneysAmount, currency)
    }
}