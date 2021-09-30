
const handleData = (data) => {
    console.log(data);
    data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
console.log("New Data:")
console.log(data)

var ctx = document.getElementById('myChart').getContext('2d');
var barColor = ["red", "blue", "green", "orange"];
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map(a => a.cat_name),
        datasets: [{
            label: 'Cat Scrore',
            data:  data.map(a => a.rating),
            innerHeight: 4,
            backgroundColor: barColor,
            borderColor: [
               'black'
            ],
            borderWidth: 1      }]

    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        indexAxis: 'y',
    }
});
}

fetch("https://sheetdb.io/api/v1/xzhoyxltidk6p")
.then(Response => Response.json())
.then(handleData)







