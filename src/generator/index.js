function* gen() {
    yield 1
    yield 2
    yield 3
}

const gr = gen()
console.log(gr.next().value); // 1
console.log(gr.next().value); // 2

function* iterable(array) {
    for (const iterator of array) {
        yield iterator
    }
}

const array = iterable([1, 2, 3, 4, 5, 6])
console.log(array.next().value); // 1
console.log(array.next().value); // 2
console.log(array.next().value); // 3
console.log(array.next().value); // 4