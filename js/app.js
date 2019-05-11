const formularioContactos = document.querySelector('#contacto'),
    listadosContactos = document.querySelector('#listado tbody');

eventListenners();

function eventListenners() {
    //cuando el formulario crear o editar se ejecuta
    formularioContactos.addEventListener('submit', leerFormulario);
}

function leerFormulario(e) {
    e.preventDefault();

    //leer los datos de los inputs
    const nombre = document.querySelector('#nombre').value,
        empresa = document.querySelector('#empresa').value,
        telefono = document.querySelector('#telefono').value,
        accion = document.querySelector('#accion').value;

    if (nombre === '' || empresa === '' || telefono === '') {
        //dos parametros texto y clase
        mostrarNotificacion('Todos los campos son obligatorios', 'error');
        console.log('Los campos esta vacío');
    } else {
        //pasa la validacion creamos llamado ajax
        const infoContacto = new FormData();
        infoContacto.append('nombre', nombre);
        infoContacto.append('empresa', empresa);
        infoContacto.append('telefono', telefono);
        infoContacto.append('accion', accion);

        if (accion === 'crear') {
            //creamos nuevo contacto
            insertarBD(infoContacto);
        } else {
            //editar contacto
        }
    }

}

//insertar base datoss via ajax
function insertarBD(infoContacto) {
    //llamada ajax

    //crear el objeto
    const xhr = new XMLHttpRequest();
    //abrir conexion
    xhr.open('POST', 'inc/modelos/modelo-contacto.php', true);

    //pasar los datos
    xhr.onload = function () {
        if (this.status === 200) {
            //leemos la respuesta de php
            const respuesta = JSON.parse(xhr.responseText);
            //inserta nuevo elemnto a la tabla

            const nuevoContacto = document.createElement('tr');

            nuevoContacto.innerHTML = `
            <td>${respuesta.datos.nombre}</td>
            <td>${respuesta.datos.empresa}</td>
            <td>${respuesta.datos.telefono}</td>
            `;

            // crear contenedor botones
            const contenedorAcciones = document.createElement('td');
            //crear el icono de editar
            const iconoEditar = document.createElement('i');
            iconoEditar.classList.add('fas', 'fa-pen-square');

            //crear el enlace para editar
            const btnEditar = document.createElement('a');
            btnEditar.appendChild(iconoEditar);
            btnEditar.href = `editar.php?id=${respuesta.datos.id_insertado}`;
            btnEditar.classList.add('btn', 'btn-editar');

            //agregar cointenedor acciones
            contenedorAcciones.appendChild(btnEditar);

            //crear el icono eliminar
            const iconoEliminar = document.createElement('i');
            iconoEliminar.classList.add('fas', 'fa-trash-alt');

            //crear el boton eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.appendChild(iconoEliminar);
            btnEliminar.setAttribute('data-id', respuesta.datos.id_insertado);
            btnEliminar.classList.add('btn', 'btn-borrar');

            //agregar al padre
            contenedorAcciones.appendChild(btnEliminar);

            //agregarlo al tr
            nuevoContacto.appendChild(contenedorAcciones);

            //agregando el nuevo regsistro con los contactos
            listadosContactos.appendChild(nuevoContacto);

            //resetear el form
            document.querySelector('form').reset();

            //mostar la notificacion
            mostrarNotificacion('Contacto creado correctamente', 'correcto');



        }
    }

    //enviar los datos
    xhr.send(infoContacto);
}


//notificacion pantalla
function mostrarNotificacion(mensaje, clase) {
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;

    //formulario
    formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

    //ocultar y mostrar la notificacion
    setTimeout(() => {
        notificacion.classList.add('visible');

        setTimeout(() => {
            notificacion.classList.remove('visible');
            setTimeout(() => {
                notificacion.remove();
            }, 500);
        }, 3000);
    }, 100);
}