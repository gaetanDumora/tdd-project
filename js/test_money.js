import assert from 'assert'
import { Money } from './money.js'
import { Portfolio } from './portfolio.js'
import { Bank } from './bank.js'

class MoneyTest {
    constructor() {
        this.bank = new Bank()
        this.bank.addExchangeRate({ from: 'EUR', to: 'USD', rate: 1.2 })
        this.bank.addExchangeRate({ from: 'USD', to: 'KRW', rate: 1100 })
    }
    getAllTestMethods() {
        let moneyPrototype = MoneyTest.prototype
        let allProps = Object.getOwnPropertyNames(moneyPrototype)
        let testMethods = allProps.filter(p => typeof moneyPrototype[p] === 'function' && p.startsWith('test'))
        return testMethods
    }
    testMultiplication() {
        let fiveDollars = new Money(5, 'USD')
        let tenDollars = new Money(10, 'USD')
        assert.deepStrictEqual(fiveDollars.times(2), tenDollars)
    }
    testDivision() {
        let actualYan = new Money(20, 'YAN')
        let actualYanAfterDivision = actualYan.divide(4)
        let expectedValue = new Money(5, 'YAN')
        assert.deepStrictEqual(actualYanAfterDivision, expectedValue)
    }
    testAddition() {
        let fiveEuros = new Money(5, 'EUR')
        let tenEuros = new Money(10, 'EUR')
        let fiveteenEuros = new Money(15, 'EUR')
        let portfolio = new Portfolio()
        portfolio.add(fiveEuros, tenEuros)
        assert.deepStrictEqual(portfolio.evaluate(this.bank, 'EUR'), fiveteenEuros)
    }
    testAdditionOfDollarsAndEuros() {
        let fiveDollars = new Money(5, 'USD')
        let tenEuros = new Money(10, 'EUR')
        let portfolio = new Portfolio()
        portfolio.add(fiveDollars, tenEuros)
        let expectedValue = new Money(17, 'USD')
        assert.deepStrictEqual(portfolio.evaluate(this.bank, 'USD'), expectedValue)
    }
    testAdditionOfDollarsToWons() {
        let oneDollar = new Money(1, 'USD')
        let elevenHundredWon = new Money(1100, 'KRW')
        let portfolio = new Portfolio()
        portfolio.add(oneDollar, elevenHundredWon)
        let expectedValue = new Money(2200, 'KRW')
        assert.deepStrictEqual(portfolio.evaluate(this.bank, 'KRW'), expectedValue)
    }
    testAdditionWithMultiMissingExchangeRates() {
        let oneEuro = new Money(1, 'EUR')
        let oneDollar = new Money(1, 'USD')
        let oneWon = new Money(1, 'KRW')
        let portfolio = new Portfolio()
        portfolio.add(oneEuro, oneDollar, oneWon)
        let expectedError = new Error('Missing exchange rate(s): [EUR->Kalganid,USD->Kalganid,KRW->Kalganid]')
        assert.throws(() => portfolio.evaluate(this.bank, 'Kalganid'), expectedError)
    }
    testConversion() {
        let bank = new Bank()
        bank.addExchangeRate({ from: 'EUR', to: 'USD', rate: 1.2 })
        let tenEuros = new Money(10, 'EUR')
        assert.deepStrictEqual(bank.convert(tenEuros, 'USD'), new Money(12, 'USD'))
    }
    testConversioWithMissingExchangeRate() {
        let bank = new Bank()
        let tenEuros = new Money(10, 'EUR')
        let expectedError = new Error('EUR->Kalganid')
        assert.throws(() => bank.convert(tenEuros, 'Kalganid'), expectedError)
    }
    runAllTests() {
        let testMethods = this.getAllTestMethods()
        testMethods.forEach(m => {
            console.log('Running: %s()', m)
            let method = Reflect.get(this, m)
            try {
                // Equivalent to this[m]()
                Reflect.apply(method, this, [])
            } catch (error) {
                if (error instanceof assert.AssertionError) {
                    console.log(error)
                } else {
                    throw error
                }
            }
        })
    }
}

new MoneyTest().runAllTests()