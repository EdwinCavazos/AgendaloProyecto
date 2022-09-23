//FETCH PARA METODO GET

let servicios;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN ='http://localhost:8080/api/servicios/'; //URL a donde se hace la petición
function addItems(div_agenda) { //div_Productos es el div donde se va a agregar los productos
    
    
    
    fetch(URL_MAIN, {
        method: 'get' //tipo de método
    }).then(function(response) {//response es la respuesta del servidor
        response.json().then(function (json) { //json es el objeto que se obtiene del servicio
            console.log(json); //imprime el json
            console.log(json.length); //imprime el tamaño del json
            productos=json; //se guarda el json en la variable productos
            Array.from(json).forEach((p, index) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
                div_agenda.innerHTML += `
                    <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                    <p class="card-title textoEmpresa text-center">${p.nombre}</p>
                    <hr> </hr>
                        
                        <p class="card-subtitle mb-2 text-muted numFecha text-center"><strong>${p.numero}</strong></p>
                        <p class="card-subtitle mb-2 text-muted texto2 text-center">${p.dia}</p>
                        <p class="card-subtitle mb-2 text-muted texto2 text-center">${p.mes}</p>
                         <p class="horaPerfil">${p.hora}</p>
                    
                        <p class="card-text">${p.servicio}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" id="btnVer_${p.id}" onclick="Ver(${index});">Ver cita</button>

                            </div>
                            <small class="text-muted texto-precio">$ ${p.precio} MXN</small>
                        </div>
                        </div>
                    </div>
                    </div>
                `;
            }); // foreach para agregar los productos al div del HTML
        });//then
    }).catch(function(err) { //si hay un error
        console.log(err); //imprime el error
    });
    console.log(document.getElementById("div_agenda")); //imprime el div donde se va a agregar los productos
   
}// addItems

window.addEventListener("load", function (){ //cuando se cargue la página
    let div = document.getElementById("div_agenda"); //div donde se va a agregar los productos
    addItems(div); //se llama a la función addItems
   
});

//Esta funcion es para un modal
function Ver(index) { //index es el índice del producto que se va a ver
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML=`<p class="card-title textoEmpresa text-center">${productos[index].nombre}</p>`
    document.getElementById("productBodyModal").innerHTML=`<p class="card-subtitle mb-2 text-muted numFecha text-center numModal">${productos[index].numero}<br><p class="card-subtitle mb-2 text-muted texto2 text-center">${productos[index].dia}<br>${productos[index].mes}<p class="horaPerfil">${productos[index].hora}</p><p class="card-text">${productos[index].servicio}<br></p>
    <strong><small class="text-muted texto-precio d-flex justify-content-end">$ ${productos[index].precio} MXN<strong></small>`; //se cambia el cuerpo del modal
    $("#productModal").modal("show"); //se muestra el modal
}// view

// FETCH PARA HACER EL METODO POST

// Este es nuestro cuerpo del POST


/*
const data =     
    {nombre: "Sopa Maruchan de Res",
    descripcion: "Sopa Maruchan sabor Res de 150 grs",
    precio: 17.0,
    url_Imagen: "sopaMaruchanRes.jpg"
};

*/
fetch(URL_MAIN, { //URL del servicio a donde se hara el POST
  method: 'POST', // or 'PUT' 
  headers: { // se agrega el header
    'Content-Type': 'application/json', //tipo de contenido
  },
  body: JSON.stringify(data), //se agrega el cuerpo del POST
})
.then(response => response.json()) //se obtiene la respuesta del servidor
.then(data => { //se obtiene el json
  console.log('Success:', data); //se imprime el json
})
.catch((error) => { //si hay un error
  console.error('Error:', error); //se imprime el error
});


//MetodoGET
//MetodoPOST
//MetodoPUT
//MetodoDELETE
