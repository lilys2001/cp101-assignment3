var chart5_labels = ['Percent of Cases', 'Percent of Deaths', 'Percent of Population']

var chart5_17 = [11.29, 0, 13.4]

var chart5_24 = [11.04, 0.55, 6.84]

var chart5_39 = [35.79, 1.67, 32.52]

var chart5_59 = [26.44, 9.48, 25.58]

var chart5_60 = [15.44, 88.3, 21.61]


var chart4 = new Chart(
    document.getElementById('chart5'),
    {
        data: {
            datasets: [
                {
                    type: 'bar',
                    label: '0-17',
                    backgroundColor: '#d3766a',
                    borderColor: '#d3766a',
                    data: chart5_17,
                },
                {
                    type: 'bar',
                    label: '18-24',
                    backgroundColor: '#455a64',
                    borderColor: '#455a64',
                    data: chart5_24,
                },  
                {
                    type: 'bar',
                    label: '25-39',
                    backgroundColor: '#ffc100',
                    borderColor: '#ffc100',
                    data: chart5_39,
                },  
                {
                    type: 'bar',
                    label: '39-59',
                    backgroundColor: '#2f8031',
                    borderColor: '#2f8031',
                    data: chart5_59,
                },  
                {
                    type: 'bar',
                    label: '60+',
                    backgroundColor: '#263238',
                    borderColor: '#263238',
                    data: chart5_60,
                },   
            ],
            labels: chart5_labels
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true
                }
              }
        }
    }
);