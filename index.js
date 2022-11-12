fetch('https://www.econdb.com/api/series/CPIUS/?format=json')
    .then(function (response) {
        return response.json ()
    })
    .then(function (data) {
        let dates = Object.values(data.data.dates)
        let values = Object.values(data.data.values)
        let table = {}
        dates.forEach((element, i) => {
            table[element] = values[i]
        })
        // console.log(table)
        let thead = document.querySelector('#thead')
        let tbody = document.querySelector('#tbody')
    })