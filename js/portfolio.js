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
        let rate = exchangeRates.get(key)
        if (rate === undefined) {
            return undefined
        }
        return money.amount * rate
    }
    evaluate(currency) {
        let faillures = []
        let total = this.moneys.reduce((acc, money) => {
            let convertedAmount = this.convert(money, currency)
            if (convertedAmount === undefined) {
                faillures.push(`${money.currency}->${currency}`)
                return acc
            }
            return acc + convertedAmount
        }, 0)
        if (!faillures.length) {
            return new Money(total, currency)
        }
        throw new Error(`Missing exchange rate(s): [${faillures.join()}]`)
    }
}