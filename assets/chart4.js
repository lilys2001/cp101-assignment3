var chart4_labels = ['Percent of Cases', 'Percent of Deaths', 'Percent of Vaccinations', 'Percent of Population']

var chart4_blackAA = [6.057178, 7.6, 3.626409, 5.003880]

var chart4_hisLat = [40.394061, 20.3, 12.744791, 15.236565]

var chart4_asian = [18.108063, 37.9, 35.067968, 34.071004]

var chart4_white = [22.379822, 28.4, 36.195423, 40.507291]

var chart4_other = [13.050875, 5.8, 12.365409, 5.181259] // for cases, this includes unknown, which make up 6.44%; for vaccinations, this also includes unknown, which make up 4.69%


var chart4 = new Chart(
    document.getElementById('chart4'),
    {
        data: {
            datasets: [
                {
                    type: 'bar',
                    label: 'Black or African American',
                    backgroundColor: '#d3766a',
                    borderColor: '#d3766a',
                    data: chart4_blackAA,
                },
                {
                    type: 'bar',
                    label: 'Hispanic or Latino',
                    backgroundColor: '#455a64',
                    borderColor: '#455a64',
                    data: chart4_hisLat,
                },  
                {
                    type: 'bar',
                    label: 'Asian',
                    backgroundColor: '#ffc100',
                    borderColor: '#ffc100',
                    data: chart4_asian,
                },  
                {
                    type: 'bar',
                    label: 'White',
                    backgroundColor: '#2f8031',
                    borderColor: '#2f8031',
                    data: chart4_white,
                },  
                {
                    type: 'bar',
                    label: 'Other',
                    backgroundColor: '#263238',
                    borderColor: '#263238',
                    data: chart4_other,
                },   
            ],
            labels: chart4_labels
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