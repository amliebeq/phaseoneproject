fetch('https://www.econdb.com/api/series/CPIUS/?format=json')
    .then(function (response) {
        return response.json ()
    })
    .then(function (data) {
        let dates = Object.values(data.data.dates)
        let values = Object.values(data.data.values)
        let table = [{}]
        dates.forEach((element, i) => {
            table[element] = values[i]
        })
        console.log(table)
    })
const cpiLink = document.getElementById("cpilink")
const importantLink = document.getElementById("importantlink")
let openCpiWindow = () => {
    window.open('https://en.wikipedia.org/wiki/Consumer_price_index', '_blank')  
}
cpiLink.addEventListener('click', openCpiWindow)
let openImportanceWindow = () => {
    window.open('https://www.bls.gov/cpi/questions-and-answers.htm#:~:text=As%20a%20means%20of%20adjusting,to%20millions%20of%20American%20workers.', '_blank')
}
let changeInfoIn = () => {
    importantLink.innerHTML = 'Click here for some frequently asked questions about CPI'
}
importantLink.addEventListener('click', openImportanceWindow)
// importantLink.addEventListener('mouseover', changeInfoIn)

