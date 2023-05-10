const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest()

    xhttp.open('GET', urlApi, true) // Es para preparar la petición
    xhttp.onreadystatechange = function (event) { // Escuchar los diferentes estados que tiene la solicitud y saber cuándo está disponile la información
        if(xhttp.readyState === 4) { // Retorna el estado de la petición
            if(xhttp.status === 200) { // Retorna la respuesta del servidor
                callback(null, JSON.parse(xhttp.responseText))
            }
        } else {
            const error = new Error('Error', urlApi)
            return callback(error, null)
        }
    }
    xhttp.send() // Envía la petición
}

fetchData(`${API}/products`, function (error1, data1) {
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) { // Optional chaning
            if(error3) return console.error(error3);            
            console.log(data1[0]);
            console.log(data2.tittle);
            console.log(data3.name);
        })
    })
})