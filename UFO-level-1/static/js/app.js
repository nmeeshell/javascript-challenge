// buildTable(tableData)

// function showData(data){

//     let table = d3.select("#data-table")
    
//     table.selectAll("tr").remove()

//     let headerRow = table.append("tr")

//     headerRow.append("th").text("Date/time")
//     headerRow.append("th").text("City")
//     headerRow.append("th").text("State")
//     headerRow.append("th").text("Country")
//     headerRow.append("th").text("Shape")
//     headerRow.append("th").text("Duration")
//     headerRow.append("th").text("Comments")

//     let tableBody = table.append("tbody")

//     data.forEach((d) => {
//         let row = tableBody.append("tr")
//         row.append("td").text(d.datetime)
//         row.append("td").text(d.city)
//         row.append("td").text(d.state)
//         row.append("td").text(d.country)
//         row.append("td").text(d.shape)
//         row.append("td").text(d.durationMinutes)
//         row.append("td").text(d.comments)

//     })
// }

// function handleClick() {
//     let datetime = d3.select("#datetime").property("value")
//     let filteredData = data.filter((d) => d.datetime === datetime)

//     showData(filteredData)
// }

// d3.select("#filter-btn").on("click",handleClick)

// from data.js

var tableData = data;

// function to display UFO sightings
function tableDisplay(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// clear the table for new data
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// initial display of all UFO sightings
console.log(tableData);
tableDisplay(tableData);

// 'Filter Table' button
var button = d3.select("#filter-btn");

// filter the database and display
button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");
  
  if (dateInput.trim() === "" ) {
    // display the whole database if the date field has no date
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.datetime === dateInput.trim());
  };

  // display message if no records found
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(filteredData);
  tableDisplay(filteredData);
});