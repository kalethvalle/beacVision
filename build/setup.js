// este js modifica el .json  dependiendo de la necesidad del modulo
const fs = require('fs');
const argv = require('process').argv;

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });

const modulo = argv[2];
console.log('Esta Compilando el Modulo ' + modulo)
console.log('-------------------------------------');

let fileOrig = fs.readFileSync('../package.json');
let fileDest = JSON.parse(fileOrig);

console.log(fileDest)
console.log('-------------------------------------');

fileDest.build.win.files = [];
fileDest.build.win.files.push("!**/node_modules/*");
fileDest.build.win.files.push("!**/app/*");
fileDest.build.win.files.push("!**/nbproject/*");

switch (modulo) {
    case 'new':
        fileDest.name = 'Estandar';
        // fileDest.build.name = 'Estandar';
        fileDest.build.win.icon = 'build/pr.ico';
        fileDest.build.win.files.push("!**/CEREALES/*");
        fileDest.build.win.files.push("!**/HICLIN/*");
        fileDest.build.win.files.push("!**/SALUD/*");
        break;
    case 'cer':
        fileDest.name = 'Cer';
        fileDest.build.win.icon = 'build/gas.ico';
        fileDest.build.win.files.push("!**/HICLIN/*");
        fileDest.build.win.files.push("!**/SALUD/*");
        break;
    case 'nom':
        fileDest.name = 'Nomina';
        fileDest.build.win.files.push("!**/CEREALES/*");
        fileDest.build.win.files.push("!**/HICLIN/*");
        fileDest.build.win.files.push("!**/SALUD/*");
        fileDest.build.win.files.push("!**/INVENT/*");
        break;
}

let data = JSON.stringify(fileDest, null, 2);
fs.writeFileSync('../package.json', data);

console.log(fileDest)
console.log('-------------------------------------');