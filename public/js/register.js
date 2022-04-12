const register_form = document.querySelector('form');
const email_input = document.getElementById('email');
const nombre_input = document.getElementById('nombre');
const password_input = document.getElementById('password');
const confirm_password_input = document.getElementById('confirm_password');
const experiencia_input = document.getElementById('experiencia');
const especialidad_input = document.getElementById('especialidad');
const foto_input = document.getElementById('foto');

register_form.onsubmit = async (e) =>{
    e.preventDefault();

    let values = new FormData();
    
    values.append('email', email_input.value);
    values.append('nombre', nombre_input.value);
    values.append('password', password_input.value);
    values.append('experiencia', experiencia_input.value);
    values.append('especialidad', especialidad_input.value);
    values.append('foto', foto_input.files[0]);

    if(password_input.value != confirm_password_input.value) return alert('Las contraseñan deben ser iguales');

    const post_object = {
        method: "post",
        body: values
    }

    try {
        await fetch("/register/registering", post_object);
        location.reload();
        alert('Usuario registrado Correctamente');
    } catch (e) {
        console.log(e);
        alert("Something went wrong");
    }
}