const formularioContactos = document.querySelector('#contacto');

eventListenners();

function eventListenners(){
//cuando el formulario crear o editar se ejecuta
formularioContactos.addEventListener('submit', leerFormulario);
}

function leerFormulario(e){
    e.preventDefault();
 
    //leer los datos de los inputs
    const nombre = document.querySelector('#nombre').value,
    empresa = document.querySelector('#empresa').value,
    telefono = document.querySelector('#telefono').value;
    
    if(nombre === '' || empresa === '' || telefono === ''){
        //dos parametros texto y clase
        mostrarNotificacion('Todos los campos son obligatorios', 'error');
        console.log('Los campos esta vacío');
    }else{
        mostrarNotificacion('Todos los campos son obligatorios', 'error');
        console.log('Los campos tienen datos');
    }

}

//notificacion pantalla
function mostrarNotificacion(mensaje, clase){
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;

    //formulario
    formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

    //ocultar y mostrar la notificacion
    setTimeout(()=>{
        notificacion.classList.add('visible');

        setTimeout(()=>{
            notificacion.classList.remove('visible');
            setTimeout(()=>{
                notificacion.remove();
            }, 500);
        },3000);
    },100);
}