    //doughnut
    var ctxD = document.getElementById("grafica").getContext('2d');
    var myLineChart = new Chart(ctxD, {
        type: 'doughnut',
        data: {
            labels: ["Activos", "Inativos", "Warnings" ],
            datasets: [
                {
                    data: [3, 1, 1],
                    backgroundColor: ["#008000", "#46BFBD", "#FDB45C", ],
                    hoverBackgroundColor: ["#A8B3C5", "#5AD3D1", "#FFC870"]
                }
            ]
        },
            options: {
            responsive: true
        }
    });