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
            callPyDataBase($userName.val(), $userApel.val(), $email.val(), $clave.val());
            initializeInputs();
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
            scriptPath: path.join(__dirname, '..', 'python'),
            args: [user, apell, email, clave]
        };
    
        PythonShell.run('database.py', options, function (err, results) {
            if (err) throw err;
            
            console.log(results);
            var obj = JSON.parse(results[1]);
            console.log(obj.status)
            validarDataBase(obj.status);
        });
    }

    function validarDataBase(authen) {
        if (authen === '0') {
             alert('Se ha registrado con satisfacción...')
            // $creaError.html(`
            // <!-- Flexbox container for aligning the toasts -->
            // <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style="min-height: 200px;">
            
            //   <!-- Then put toasts within -->
            //   <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            //     <div class="toast-header">
            //       <img src="..." class="rounded mr-2" alt="...">
            //       <strong class="mr-auto">Bootstrap</strong>
            //       <small>11 mins ago</small>
            //       <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            //         <span aria-hidden="true">&times;</span>
            //       </button>
            //     </div>
            //     <div class="toast-body">
            //       Hello, world! This is a toast message.
            //     </div>
            //   </div>
            // </div>
            // `);
            // var dir = path.join(__dirname, 'html', 'main.html');
            // window.location.href = dir; 
        } else {
            $creaError.html(`
            <div class="alert alert-danger" role="alert">
               Ha ocurrido un error a registrar su cuenta, verifique que los datos esten correctos...
               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
             </button>
            </div>
         `);
        }
    }

    function initializeInputs(){
        $('#crea_nombre').val('');
        $('#crea_apellido').val('');
        $('#crea_email').val('');
        $('#crea_clave').val('');
        $('#crea_confir_clave').val('');
    }

    
}) 

