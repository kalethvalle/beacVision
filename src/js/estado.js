$(".sensores-tab").click(function(){
    $(".tab-content").load("actualiza.html")
})

// $(document).ready(function() {
//     const os = require('os');
//     const prettyBytes = require('pretty-bytes');

//     $('.stats').append(`Numero de procesadores: <span>${os.cpus().length}</span> `);
//     $('.stats').append(`Memoria: <span>${prettyBytes(os.freemem())}</span>`)

//     const ul = $(".flipster ul");

//     const li = $("<>")

// });