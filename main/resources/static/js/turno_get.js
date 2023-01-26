window.addEventListener('load', function () {
    const url = '/turnos';
    const settings = {
        method: 'GET'
    }
    fetch(url,settings)
    .then(response => response.json())
    .then(data => {

        for(turno of data){
            console.log(turno);
            var table = document.getElementById("update_turno_form");
            var turnoRow = table.insertRow();
            let tr_id = 'tr_' + turno.id;
            turnoRow.id = tr_id;

            let deleteButton = '<button' +
                              ' id=' + '\"' + 'btn_delete_' + turno.id + '\"' +
                              ' type="button" onclick="deleteBy('+turno.id+')" class="btn btn-danger btn_delete">' +
                              '&times' +
                              '</button>';

            let updateButton = '<button' +
                              ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                              ' type="button" onclick="findBy('+turno.id+')" class="btn btn-info btn_id">' +
                              turno.id +
                              '</button>';

            turnoRow.innerHTML = '<td>' + updateButton + '</td>' +
                    '<td class=\"td_fecha\">' + turno.fecha + '</td>' +
                    '<td class=\"td_nombrePaciente\">' + turno.paciente.apellido.toUpperCase() +", " + turno.paciente.nombre.toUpperCase() + '</td>' +
                    '<td class=\"td_nombreOdontologo\">' + turno.odontologo.apellido.toUpperCase() + ", " + turno.odontologo.nombre.toUpperCase() +'</td>' +
                    '<td>' + deleteButton + '</td>';
        };
    })

});