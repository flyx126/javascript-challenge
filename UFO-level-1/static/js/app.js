// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(report => {
    console.log(report);
    let row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    })
})