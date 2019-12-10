// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function fillTable(a) {
    a.forEach(report => {
        // console.log(report);
        let row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        })
    });
}

fillTable(tableData);

let searchButton = d3.select("#filter-btn");

searchButton.on("click", () => {
    let searchInput = d3.select("#datetime").property("value");
    let filteredReports = data.filter(x => x.datetime === searchInput);
    tbody.selectAll("*").remove();
    fillTable(filteredReports);
    console.log(filteredReports);
});