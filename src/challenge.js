const XMLHttpRequest = requiere('xmlhttprequest')
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