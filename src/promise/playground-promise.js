function delay(time, message) {
 return new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(message)
    }, time)
 })
}

delay(2000, 'Hello after 2s')
    .then(value => console.log(value))