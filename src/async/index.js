const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!'), 2000)
            : reject(new Error('Error!'))
    })
}

const anotherFn = async () => {
    const something = await fnAsync()
    console.log(something); // 3
    console.log('Hi!'); // 4
}

console.log('Before'); // 1
anotherFn()
console.log('After'); // 2