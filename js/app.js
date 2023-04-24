//Variables 
const email = document.getElementById('email');

const asunto = document.getElementById('asunto');

const mensaje = document.getElementById('mensaje');

const btnEnviar = document.getElementById('enviar');


//EventListener

eventListeners();

function eventListeners(){
	//Inicio de la aplicación
	document.addEventListener('DOMContentLoaded', InicioApp);

	//campos del formulario 
	email.addEventListener('blur', validarCampo);
	
	asunto.addEventListener('blur', validarCampo);
	
	mensaje.addEventListener('blur', validarCampo);

	btnEnviar.addEventListener('click', enviarEmail);
	
}



//Funciones

//Inicio de la apliación 
function InicioApp(){
	//deshabilitar botón de enviar 
	btnEnviar.disabled = true;
}


function validarCampo(){
	//validar campos 
	validarLongitud(this);

	//validar solo el email
	if(this.type === 'email'){
		validarEmail(this);
	}

	let errores;
	errores = document.querySelectorAll('.error');
	if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
		if(errores.length === 0 ){
			btnEnviar.disabled = false;
		} 
	}
}

function enviarEmail(e){
	e.preventDefault();
	const spinnerGif = document.querySelector('#spinner');
	spinnerGif.style.display = 'inline-block';

	const emailGif = document.createElement('img');
	emailGif.style.display = 'inline-block';
	emailGif.src = 'img/mail.gif';

	//Simular el envio
	setTimeout(function() {
		//remover el gif de cargar
		spinnerGif.style.display = 'none';

		//aparece gifEmail
		document.querySelector('#loaders').appendChild(emailGif);
		
		//remover gif de enviar 
		setTimeout(function() {
			emailGif.remove();
			document.querySelector('#enviar-mail').reset();
		},3000);

	},3000)

}

function validarLongitud(campo){
	if(campo.value.length > 0 ){
		campo.style.borderBottomColor = 'green';
		campo.classList.remove('error');
	}else{
		campo.style.borderBottomColor = 'red';
		campo.classList.add('error');
	}
}


//Validar Email 
function validarEmail(email){
	const address = email.value;
	if(address.indexOf('@') !== -1){
		email.style.borderBottomColor = 'green';
		email.classList.remove('error');
	}else{
		email.style.borderBottomColor = 'red';
		email.classList.add = 'error';
	}
}
