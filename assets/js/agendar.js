let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
        }else{
            dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
        }
    }
    dates.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName == "DIV" && e.target.classList.contains("calendar__date") && !e.target.classList.contains("calendar__last-days") && !e.target.classList.contains("calendar__next-days") ) {
            let day = e.target.innerHTML;
            let month = monthNumber + 1;
            let year = currentYear;
            
            let date = day + "/" + month + "/" + year;
           
            return displayDay(day,month,year);
        }
});
}
const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;

}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}


function displayDay(days,month,year){
    document.getElementById('diaDisplay').innerText = days+"/";
    document.getElementById('mesDisplay').innerText = month+"/";
    document.getElementById('añoDisplay').innerText = year;

}

let hora = document.getElementById('hours-display');

hora.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "DIV" && e.target.classList.contains("calendar__hour") && !e.target.classList.contains("calendar__last-hours") && !e.target.classList.contains("calendar__next-hours")  ) {
        let hour = e.target.innerHTML;
        return displayHour(hour);
    }
});
function displayHour(hours){
    document.getElementById('display-horas').innerText = hours;

}

writeMonth(monthNumber);


function displayModal(){
let nombreNegocio = document.getElementById('NombreNegocio').innerText;
let nombreServicio = document.getElementById('Nombre-servicio').innerText;
let precioServicio = document.getElementById('precio').innerText;
let dia = document.getElementById('diaDisplay').innerText;
let mes=document.getElementById('mesDisplay').innerText;
let horaModal = document.getElementById('display-horas').innerText;
document.getElementById('modal-business').innerText=nombreNegocio;
document.getElementById('modal-service').innerHTML=nombreServicio;
document.getElementById('modal-price').innerHTML=precioServicio;
document.getElementById('modal-day').innerHTML=dia;
document.getElementById('modal-mes').innerHTML=mes;
document.getElementById('modal-hour').innerHTML=horaModal;
}

//Enviar a la base de datos


    document
    .getElementById("btnSend")
    .addEventListener("click", function (e) {
       
    let nombreNegocio = document.getElementById('NombreNegocio').innerText;
    let nombreServicio = document.getElementById('Nombre-servicio').innerText;
    let precioServicio = document.getElementById('precio').innerText;
    let dia = document.getElementById('diaDisplay').innerText;
    let mes=document.getElementById('mesDisplay').innerText;
    let horaModal = document.getElementById('display-horas').innerText;

      //Es imporante que tomemos el valor del input del formulario, y no todo el conjunto de datos. Para eso, usamos el .value para decirle que estoy recogiendo el valor que hay dentro de ese input.
      console.log(nombreNegocio.valueOf());
      console.log(nombreServicio.valueOf());
      console.log(precioServicio.valueOf());
      console.log(dia.valueOf());
        console.log(mes.valueOf());
        console.log(horaModal.valueOf());

      //Esta es una constante llamada data, que contiene el cuerpo de la solicitud. Puedo declararla como una variable o agregarla directamente al cuerpo de mi metodo POST.
      const data = {
        nombre: nombreNegocio.valueOf(),
        numero: dia.valueOf(),
        mes: mes.valueOf(),
        hora: horaModal.valueOf(),
        servicio: nombreServicio.valueOf(),
        precio: precioServicio.valueOf(),
       
     
      };

      //Hago un fetch a mi API, con la finalidad de postear productos nuevos.
      fetch("http://localhost:8080/api/cita/", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), //Aqui estoy llamando a mi cuerpo de la solicitud.
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Producto Guardado:", data); //Mensaje para cuando se agreguen los datos correctamente
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  
    //Fin de enviar a la base de datos
