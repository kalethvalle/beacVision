
const path = require('path');

$(document).ready(function(){
    // se obtienen los elementos del DOM desde login_form
    const $loginError = $('#login_error');
    const $loginForm = $('#login_form');
    const $loginName = $('#login_name');
    const $loginpwd = $('#login_pwd');
    
    $loginForm.submit(e => {
        e.preventDefault();
        callPy($loginName.val(), $loginpwd.val());
    });

    function callPy(user, pass) {
        const { PythonShell } = require('python-shell');

        let options = {
            mode: 'text',
            pythonPath: path.join(__dirname, '..', 'lib', 'python.exe'),
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: path.join(__dirname, 'python'),
            args: [user, pass]
        };

        PythonShell.run('login.py', options, function (err, results) {
            if (err) throw err;
            
            console.log(results);
            var Rdb = JSON.parse(results[0]);
            console.log(Rdb.DB)
            var Rbe = JSON.parse(results[2]);
            // console.log(Rbe.status);
            validarIngreso(Rbe.status);
        });
    }

    function validarIngreso(authen) {
        if (authen === '0') {
            var dir = path.join(__dirname, 'html', 'main.html');
            window.location.href = dir; 
        } else {
            $loginError.html(`
            <div class="alert alert-danger" role="alert">
               Usuario ó Contraseña incorrectos
               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
             </button>
            </div>
         `);
        }
    }

});

