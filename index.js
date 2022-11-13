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
let openCpiWindow = () => {
    window.open('https://en.wikipedia.org/wiki/Consumer_price_index', '_blank')  
}
let changeCpiIn = () => {
    cpiLink.innerHTML = 'Do you want to know more about CPI?'
}
let changeCpiOut = () => {
    cpiLink.innerHTML = 'What is CPI?'
}
cpiLink.addEventListener('click', openCpiWindow)
cpiLink.addEventListener('mouseover', changeCpiIn)
cpiLink.addEventListener('mouseout', changeCpiOut)

const importantLink = document.getElementById("importantlink")
let openImportanceWindow = () => {
    window.open('https://www.bls.gov/cpi/questions-and-answers.htm#:~:text=As%20a%20means%20of%20adjusting,to%20millions%20of%20American%20workers.', '_blank')
}
let changeInfoIn = () => {
    importantLink.innerHTML = 'Click here for some frequently asked questions about CPI'
}
let changeInfoOut = () => {
    importantLink.innerHTML = 'Why is it important?'
}
importantLink.addEventListener('click', openImportanceWindow)
importantLink.addEventListener('mouseover', changeInfoIn)
importantLink.addEventListener('mouseout', changeInfoOut)

let graphTextLink = document.getElementById('graph')
let graphImageLink = document.getElementById('cpiimage')
let openGraph = () => {
    window.open('https://www.econdb.com/chart/f4a4/', '_blank')
}
let changeGraphInfoIn = () => {
    graphTextLink.innerHTML = 'Click on the graph image for a link to an interactive graph'
}
let changeGraphInfoOut = () => {
    graphTextLink.innerHTML = 'Graph of CPI data'
}
graphImageLink.addEventListener('click', openGraph)
graphTextLink.addEventListener('mouseover', changeGraphInfoIn)
graphTextLink.addEventListener('mouseout', changeGraphInfoOut)