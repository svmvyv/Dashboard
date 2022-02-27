const labels = [
    'Jan 1',
    'Jan 2',
    'Jan 3',
    'Jan 4',
    'Jan 5',
    'Jan 6',
    'Jan 7',
    'Jan 8',
    'Jan 9',
    'Jan 10',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 50, 30, 80, 70, 75, 45, 78, 90, 66, 45, 88],
        fill: {
            target: 'origin',
            above: 'rgba(95, 90, 126, 0.384)', // Area will be red above the origin
            below: 'rgb(0, 0, 255)' // And blue below the origin
        },
        tension: 0.3,
        pointRadius: 5,
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            },
        }
    }
};


const orderChart = new Chart(
    document.getElementById('myAreaChart'),
    config
);



const visitorLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
];

const visitorData = {
    labels: visitorLabels,
    datasets: [{
            label: 'Men',
            data: [20, 55, 21, 70, 20, 40, 20],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(95,90,126)',
        },
        {
            label: 'Women',
            data: [10, 40, 90, 70, 50, 60, 90],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
        }
    ]
};

const visitorConfig = {
    type: 'bar',
    data: visitorData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },

        }
    },
};
// Bar Chart for Visitor
const visitorChart = new Chart(
    document.getElementById('myBarChart'),
    visitorConfig
);

// pie chart


const pieData = {
    labels: ['Jeddah', 'Riydah', 'Khober', 'Daamam', 'Jubail'],
    datasets: [{
        label: 'Dataset 1',
        data: [30, 20, 15, 20, 5],
        backgroundColor: ['rgb(255, 99, 132)',
            'rgb(95,90,126)',
            'rgb(242, 83, 126)',
            'rgb(95,90,115)',
            'rgb(95, 80, 126)',
        ],
    }]
};

const pieConfig = {
    type: 'pie',
    data: pieData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },

        }
    },
};

const cityChart = new Chart(
    document.getElementById("myPieChart"),
    pieConfig
);

// Liner Chart for Rat

const radData = {
    labels: [
        'Excellent',
        'Great',
        'Good',
        'Okay',
        'Bad',
        'Very Bad'
    ],
    datasets: [{
        label: 'Male Customer Rating',
        data: [65, 50, 90, 81, 56, 55],
        fill: true,
        backgroundColor: 'rgba(95,90,126,0.40)',
        borderColor: 'rgba(95,90,126,0.63)',
        pointBackgroundColor: 'rgb(95,90,126)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Female Customer Rating',
        data: [90, 48, 40, 19, 20, 27],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.40)',
        borderColor: 'rgba(255, 99, 132, 0.63)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(95,90,126)'
    }]
};

const radConfig = {
    type: 'radar',
    data: radData,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};

const radChart = new Chart(
    document.getElementById("myRadarChart"),
    radConfig
);