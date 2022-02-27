const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

// Line Chart for Orders
const myChart = new Chart(
    document.getElementById("myAreaChart"),
    config
);

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");