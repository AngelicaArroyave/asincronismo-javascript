const promise = new Promise(function (resolve, reject) {
    resolve('Hey!')
})

const COWS = 15
const countCows = new Promise(function (resolve, reject) {
    if(COWS > 10) resolve(`We have ${COWS} cows on the farm`)
    else reject('There is not cows on the farm')
})

countCows
    .then(value => console.log(value)) // We have 15 cows on the farm
    .catch(error => console.log(error)) // There is not cows on the farm
    .finally(() => console.log('Finally')) // Finally