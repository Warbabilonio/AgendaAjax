<?php include 'inc/layout/header.php' ?>

<div class="contenedor-barra">
    <h1>Agenda de Contactos</h1>
</div>

<div class="bg-amarillo contenedor sombra">
    <form id="contacto" action="#">
        <legend>Añada un contacto <span>Todos los campos son obligatorios</span></legend>
        <?php include 'inc/layout/formulario.php' ?>
    </form>
</div>

<div class="bg-blanco contenedor sombra contactos">
    <div class="contenedor-contactos">
        <h2>Contactos </h2>
        <input type="text" name="" id="buscador" class="buscador sombra" placeholder="Buscar Contacto...">
        <p class="total-contactos"><span>2</span> Contactos</p>

        <div class="contenedor-tabla">
            <table id="listado" class="listado-contactos">
                <thead>
                    <th>Nombre</th>
                    <th>Empresa</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Jonel</td>
                        <td>Serikat</td>
                        <td>6846546</td>
                        <td>
                            <a href="editar.php?id=1" class="btn-editar btn">
                                <i class="fas fa-pen-square"></i>
                            </a>
                            <button data-id="1" type="button" class="btn-borrar btn">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jonel</td>
                        <td>Serikat</td>
                        <td>6846546</td>
                        <td>
                            <a href="#" class="btn-editar btn">
                                <i class="fas fa-pen-square"></i>
                            </a>
                            <button data-id="1" type="button" class="btn-borrar btn">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jonel</td>
                        <td>Serikat</td>
                        <td>6846546</td>
                        <td>
                            <a href="#" class="btn-editar btn">
                                <i class="fas fa-pen-square"></i>
                            </a>
                            <button data-id="1" type="button" class="btn-borrar btn">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</div>


<?php include 'inc/layout/footer.php' ?>