import { Money } from './money.js'

export class Portfolio {
    constructor() {
        this.moneys = []
    }
    add(...money) {
        this.moneys = this.moneys.concat(money)
    }
    evaluate(bank, currency) {
        let faillures = []
        let total = this.moneys.reduce((acc, money) => {
            try {
                let convertedAmount = bank.convert(money, currency)
                return acc + convertedAmount.amount
            } catch (error) {
                faillures.push(`${money.currency}->${currency}`)
                return acc
            }
        }, 0)
        if (!faillures.length) {
            return new Money(total, currency)
        }
        throw new Error(`Missing exchange rate(s): [${faillures.join()}]`)
    }
}