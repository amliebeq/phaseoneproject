let htmlTable = document.getElementById('table')
let htmlRow = document.getElementById('Head')
let tr = document.createElement('tr')
let td = document.createElement('td')
let th = document.createElement('th')
fetch('https://www.econdb.com/api/series/CPIUS/?format=json')
    .then(function (response) {
        return response.json ()
    })
    .then(function (data) {
        let dates = Object.values(data.data.dates)
        let values = Object.values(data.data.values)
        let tableArray = []
            dates.forEach((num1, index) => {
            const num2 = values[index];
            let total = [num1, num2]
            tableArray.push(total)
          });
          console.log(tableArray)

        function createTable(tableData) {
            let table = document.createElement('table');
            const tableHead = table.createTHead();
            let headRow = tableHead.insertRow(0)
            let headCell1 = headRow.insertCell(0)
            let headCell2 = headRow.insertCell(1)
            headCell1.innerHTML = 'Date'
            headCell2.innerHTML = 'Value'
            let tableBody = document.createElement('tbody');
            tableData.forEach(function(rowData) {
              let row = document.createElement('tr');
          
              rowData.forEach(function(cellData) {
                let cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
              });
          
              tableBody.appendChild(row);
            });
            
            table.appendChild(tableBody);
            document.body.appendChild(table);
          }
          
          createTable(tableArray);         
})

function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementsByTagName("table") ;
    tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}

searchTable()

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

const tableHeader = document.getElementById("chart")
let changeHeadInfoIn = () => {
    tableHeader.innerHTML = 'Use the search bar below to filter the table'
}
let changeHeadInfoOut = () => {
    tableHeader.innerHTML = 'Table of CPI Data'
}
tableHeader.addEventListener('mouseover', changeHeadInfoIn)
tableHeader.addEventListener('mouseout', changeHeadInfoOut)

let supriseImage = document.getElementById('supriseimage')
let picPop = () => {
    supriseImage.hidden = false
}
let suprise = document.getElementById('suprise')
supriseImage.hidden = true
suprise.addEventListener('click', picPop)