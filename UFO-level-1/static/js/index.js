function loadData (){
    let table = d3.select("body")
        .append("ufo-table")
        .classed("table table-striped", true)

    let headerRow = table.append("tr")

    headerRow.append("th").text("Datetime")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration")
    headerRow.append("th").text("Comments")

    let tableBody = table.append("tbody")

    data.forEach((d) => {
        let row = tableBody.append("tr")
        row.append("td").text(d.datetime)
        row.append("td").text(d.city)
        row.append("td").text(d.state)
        row.append("td").text(d.country)
        row.append("td").text(d.shape)
        row.append("td").text(d.durationMinutes)
        row.append("td").text(d.comments)

    })
}

loadData()

d3.select("#filter-btn").on("click",loadData)

// const button = d3.select("#filter-btn");
// const datetime = d3.select("#form-control");
// function handleClick() {
//     console.log("filter-btn");
//     console.log(d3.event.target);
// }

// inputField.on("change", function(event) {
//     const newText = d3.event.target.value;
//     console.log(newText);
//   });



