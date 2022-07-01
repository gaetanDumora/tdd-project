export class Money {
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


// const randomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + 1) + min;
// }
// const currencies = ["EUR", "USD", "KRW", "STL", "YAN"]
// const atm = (nb) => {
//     const moneys = Array(nb)
//     for (let i = 0; i < nb; i++) {
//         moneys[i] = new Money(randomNumber(-1, 100), currencies[randomNumber(-1, 4)])
//     }
//     return moneys
// }

// const dataset1 = [
//     { amount: 20, currency: 'STL' },
//     { amount: 39, currency: 'EUR' },
//     { amount: 71, currency: 'STL' },
//     { amount: 19, currency: 'USD' },
//     { amount: 88, currency: 'USD' },
//     { amount: 49, currency: 'USD' },
//     { amount: 75, currency: 'STL' },
//     { amount: 32, currency: 'USD' },
//     { amount: 93, currency: 'STL' },
//     { amount: 58, currency: 'STL' },
//     { amount: 31, currency: 'EUR' },
//     { amount: 34, currency: 'EUR' },
//     { amount: 28, currency: 'USD' },
//     { amount: 35, currency: 'EUR' },
//     { amount: 33, currency: 'KRW' },
//     { amount: 10, currency: 'STL' },
//     { amount: 2, currency: 'YAN' },
//     { amount: 45, currency: 'STL' },
//     { amount: 5, currency: 'EUR' },
//     { amount: 39, currency: 'EUR' },
//     { amount: 68, currency: 'KRW' },
//     { amount: 68, currency: 'EUR' },
//     { amount: 100, currency: 'KRW' },
//     { amount: 32, currency: 'KRW' },
//     { amount: 35, currency: 'EUR' },
//     { amount: 62, currency: 'YAN' },
//     { amount: 84, currency: 'EUR' },
//     { amount: 32, currency: 'YAN' },
//     { amount: 14, currency: 'STL' },
//     { amount: 1, currency: 'STL' },
//     { amount: 26, currency: 'KRW' },
//     { amount: 96, currency: 'EUR' },
//     { amount: 78, currency: 'EUR' },
//     { amount: 96, currency: 'STL' },
//     { amount: 34, currency: 'KRW' },
//     { amount: 36, currency: 'KRW' },
//     { amount: 1, currency: 'EUR' },
//     { amount: 75, currency: 'STL' },
//     { amount: 26, currency: 'YAN' },
//     { amount: 28, currency: 'KRW' },
//     { amount: 29, currency: 'KRW' },
//     { amount: 82, currency: 'USD' },
//     { amount: 74, currency: 'USD' },
//     { amount: 80, currency: 'EUR' },
//     { amount: 89, currency: 'USD' },
//     { amount: 19, currency: 'USD' },
//     { amount: 6, currency: 'EUR' },
//     { amount: 88, currency: 'YAN' },
//     { amount: 54, currency: 'STL' },
//     { amount: 77, currency: 'USD' },
//     { amount: 19, currency: 'YAN' },
//     { amount: 66, currency: 'STL' },
//     { amount: 83, currency: 'KRW' },
//     { amount: 79, currency: 'YAN' },
//     { amount: 90, currency: 'STL' },
//     { amount: 43, currency: 'EUR' },
//     { amount: 23, currency: 'USD' },
//     { amount: 33, currency: 'YAN' },
//     { amount: 7, currency: 'YAN' },
//     { amount: 7, currency: 'STL' },
//     { amount: 96, currency: 'YAN' },
//     { amount: 31, currency: 'USD' },
//     { amount: 3, currency: 'USD' },
//     { amount: 91, currency: 'STL' },
//     { amount: 87, currency: 'EUR' },
//     { amount: 54, currency: 'KRW' },
//     { amount: 47, currency: 'USD' },
//     { amount: 71, currency: 'USD' },
//     { amount: 45, currency: 'YAN' },
//     { amount: 4, currency: 'YAN' },
//     { amount: 32, currency: 'USD' },
//     { amount: 7, currency: 'YAN' },
//     { amount: 90, currency: 'KRW' },
//     { amount: 75, currency: 'KRW' },
//     { amount: 91, currency: 'YAN' },
//     { amount: 90, currency: 'YAN' },
//     { amount: 37, currency: 'EUR' },
//     { amount: 71, currency: 'KRW' },
//     { amount: 38, currency: 'USD' },
//     { amount: 78, currency: 'STL' },
//     { amount: 87, currency: 'YAN' },
//     { amount: 21, currency: 'YAN' },
//     { amount: 14, currency: 'EUR' },
//     { amount: 65, currency: 'KRW' },
//     { amount: 51, currency: 'KRW' },
//     { amount: 12, currency: 'YAN' },
//     { amount: 1, currency: 'EUR' },
//     { amount: 92, currency: 'STL' },
//     { amount: 58, currency: 'EUR' },
//     { amount: 99, currency: 'YAN' },
//     { amount: 68, currency: 'USD' },
//     { amount: 61, currency: 'USD' },
//     { amount: 50, currency: 'STL' },
//     { amount: 68, currency: 'YAN' },
//     { amount: 24, currency: 'STL' },
//     { amount: 74, currency: 'EUR' },
//     { amount: 79, currency: 'EUR' },
//     { amount: 6, currency: 'KRW' },
//     { amount: 16, currency: 'EUR' },
//     { amount: 91, currency: 'EUR' }
// ]

// const uniqueValues = new Set(dataset1.map(o => o.amount))

// console.log(uniqueValues)