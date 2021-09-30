const handleData = (data) => {
    console.log(data);
    data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
console.log("New Data:")
console.log(data)

var ctx = document.getElementById('myChart').getContext('2d');
var barColor = ["orange", "orange", "orange", "orange"];
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: data.map(a => a.cat_name),
        datasets: [{
            label: 'Cat Scrore',
            data:  data.map(a => a.rating),
            innerHeight: 6,
            backgroundColor: barColor,
            // borderColor: [
            //    'black'
            // ],
            borderWidth: 1      }]

    },

    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

fetch("/cat")
.then(Response => Response.json())
.then(handleData)
