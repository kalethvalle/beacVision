const path = require('path');

$(document).ready(function(){

    const $creaError = $('#crea_error');
    const $dataBaseForm = $('#dataBaseForm');
    let $userName = $('#crea_nombre');
    let $userApel = $('#crea_apellido');
    let $email = $('#crea_email');
    let $clave = $('#crea_clave');
    let $confirClave = $('#crea_confir_clave');

    $dataBaseForm.submit(e => {
        e.preventDefault();
        
        if($clave.val() === $confirClave.val()){
            console.log(` Nombre: ${$userName.val()} 
                        \n Apellido: ${$userApel.val()}
                        \n Email: ${$email.val()}
                        \n Clave: ${$clave.val()}
                        \n Confirmar Clave: ${$confirClave.val()}
          `);

            // callPyDataBase($userName.val(), $userApel.val(), $email.val(), $clave.val());
        }else{
            $creaError.html(`
            <div class="alert alert-danger" role="alert">
               Contraseñas no coinciden
               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
             </button>
            </div>
         `);
        }
    });

    function callPyDataBase(user, apell, email, clave) {
        const { PythonShell } = require('python-shell');
    
        let options = {
            mode: 'text',
            // pythonPath: 'path/to/python',
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: path.join(__dirname, 'python'),
            args: [user, apell, email, clave]
        };
    
        PythonShell.run('database.py', options, function (err, results) {
            if (err) throw err;
            
            // console.log(results);
            var obj = JSON.parse(results[0]);
            validarDataBase(obj.Status);
        });
    }

    function validarDataBase(authen) {
        if (authen === '0') {
            var dir = path.join(__dirname, 'html', 'main.html');
            window.location.href = dir; 
        } else {
            $creaError.html(`
            <div class="alert alert-danger" role="alert">
               Usuario ó Contraseña incorrectos
               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
             </button>
            </div>
         `);
        }
    }

    
})

