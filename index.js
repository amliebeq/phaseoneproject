fetch('https://www.econdb.com/api/series/CPIUS/?format=json')
    .then(function (response) {
        return response.json ()
    })
    .then(function (data) {
        console.log(data)
    })