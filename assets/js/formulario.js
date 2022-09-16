
// form.addEventListener('submit', (event) =>{
//     event.preventDefault();

//     Validate();
// })

function create_tr(table_id) {
  let table_body = document.getElementById(table_id),
      first_tr   = table_body.firstElementChild
      tr_clone   = first_tr.cloneNode(true);
  table_body.append(tr_clone);
  clean_first_tr(table_body.firstElementChild);
}
function clean_first_tr(firstTr) {
  let children = firstTr.children;
  
  children = Array.isArray(children) ? children : Object.values(children);
  children.forEach(x=>{
      if(x !== firstTr.lastElementChild)
      {
          x.firstElementChild.value = '';
      }
  });
}
function remove_tr(This) {
  if(This.closest('tbody').childElementCount == 1)
  {
      alert("You Don't have Permission to Delete This ?");
  }else{
      This.closest('tr').remove();
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const inputDias = document.getElementById('dia');
const inputHorasInicio = document.getElementById('horaInicio');
const inputHorasFin = document.getElementById('horaFin');
const list = document.querySelector('.Horas ul');
const myButton = document.querySelector('.AgregarHora');
myButton.addEventListener('click', (e)=>{
	
if(inputDias.value !="" && inputHorasInicio.value !="" && inputHorasFin.value !=""){
	e.preventDefault();
	const myLi = document.createElement('li');
	//create span
	list.appendChild(myLi)
	const Day =document.createElement('span');
	Day.innerHTML=inputDias.value;
	const inicio = document.createElement('span');
	inicio.innerHTML='De';
	const horaInicio= document.createElement('span');
	horaInicio.innerHTML=inputHorasInicio.value;
	const fin = document.createElement('span');
	fin.innerHTML='A';
	const horaFin = document.createElement('span');
	horaFin.innerHTML=inputHorasFin.value;
	const borrar = document.createElement('span');
	borrar.innerHTML = 'Eliminar';

	
	Day.setAttribute('class','Day');
	borrar.setAttribute('class','eliminar')
	myLi.appendChild(Day);
	myLi.appendChild(inicio);
	myLi.appendChild(horaInicio);
	myLi.appendChild(fin);
	myLi.appendChild(horaFin);
myLi.appendChild(borrar);
}
 
const borrar = document.querySelectorAll('.eliminar');
for(let i=0;i<borrar.length;i++){
	borrar[i].addEventListener('click', ()=>{
		borrar[i].parentElement.style.opacity = 0;
		setTimeout(()=>{
			borrar[i].parentElement.style.display ="none";
			borrar[i].parentElement.remove();
		},500);
	})
}

});
