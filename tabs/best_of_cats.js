

// let data = [
//     {name: "cat 1", score: 1000},
//     {name: "cat 2", score: 1340},
//     {name: "cat 3", score: 1450},
//     {name: "cat 4", score: 1200},
// ];

// console.log(data)
// data.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
// console.log("Data mới là:")
// console.log(data)

// var ctx = document.getElementById('myChart').getContext('2d');


// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: data.map(a => a.name),
//         datasets: [{
//             label: 'Cat Scrore',
//             data:  data.map(a => a.score),
//             innerHeight: 2,
//             backgroundColor: [
//                'gray'
//             ],
//             borderColor: [
//                'black'
//             ],
//             borderWidth: 1      }]

//     },

//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         },
//         indexAxis: 'y',
//     }
// });






const handleData = (data) => {
    console.log(data);
    data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
console.log("New Data:")
console.log(data)

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map(a => a.cat_name),
        datasets: [{
            label: 'Cat Scrore',
            data:  data.map(a => a.rating),
            innerHeight: 3,
            backgroundColor: [
               'gray'
            ],
            borderColor: [
               'black'
            ],
            borderWidth: 1      }]

    },

    options: {
        scales: {
            x: {
                beginAtZero: true
            }
        },
        indexAxis: 'x',
    }
});
}

fetch("https://sheetdb.io/api/v1/xzhoyxltidk6p")
.then(Response => Response.json())
.then(handleData)







