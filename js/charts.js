var arChart = document.getElementById("myAreaChart").getContext('2d');
var AREAchart = new Chart(arChart, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                }
            }
        }
    }
});


// // Bar Chart for Visitor
// var visitorChart = document.getElementById("myBarChart");

// // Liner Chart for Cities
// var citiesChart = document.getElementById("myPieChart");

// // Liner Chart for Rat
// var ratChart = document.getElementById("myLinearChart");