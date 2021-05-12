var chart6_labels = ['16-24', '25-34', '35-44', '45-54', '55-64', '65-74', '75+']

var chart6_vacc = [42400, 122573, 101870, 86833, 81815, 68596, 47864]
var chart6_pop = [73723, 204639, 138390, 115527, 101483, 74120, 60907]


var chart4 = new Chart(
    document.getElementById('chart6'),
    {
        data: {
            datasets: [
                {
                    type: 'bar',
                    label: 'Number of Vaccinations',
                    backgroundColor: '#d3766a',
                    borderColor: '#d3766a',
                    data: chart6_vacc,
                },
                {
                    type: 'bar',
                    label: 'Population',
                    backgroundColor: '#ffc100',
                    borderColor: '#ffc100',
                    data: chart6_pop,
                },  
            ],
            labels: chart6_labels
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Age'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Count'
                    }
                }
            }
        }
    }
);