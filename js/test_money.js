import assert from 'assert'
import { Money } from './money.js'
import { Portfolio } from './portfolio.js'

class MoneyTest {
    getAllTestMethods() {
        let moneyPrototype = MoneyTest.prototype
        let allProps = Object.getOwnPropertyNames(moneyPrototype)
        let testMethods = allProps.filter(p => typeof moneyPrototype[p] === 'function' && p.startsWith('test'))
        return testMethods
    }
    testMultiplication() {
        let fiveDollards = new Money(5, 'USD')
        let tenDollards = new Money(10, 'USD')
        assert.deepStrictEqual(fiveDollards.times(2), tenDollards)
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
        assert.deepStrictEqual(portfolio.evaluate('EUR'), fiveteenEuros)
    }
    runAllTests() {
        let testMethods = this.getAllTestMethods()
        testMethods.forEach(m => {
            console.log('Running: %s()', m)
            let method = Reflect.get(this, m)
            try {
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