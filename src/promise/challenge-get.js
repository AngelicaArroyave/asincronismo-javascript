import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi) {
    return fetch(urlApi)
}

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => console.log(products))
// .then(() => console.log('Hi'))
// .catch(error => console.log(error))

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products); // Electronics
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(value => value.json())
    .then(product => {
        console.log(product.title); // Electronics
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(category => category.json())
    .then(categoryName => console.log(categoryName.name))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally')) // Finally