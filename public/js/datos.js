const update_button = document.getElementById('update');
const delete_button = document.getElementById('delete');
const email_input = document.getElementById('email');
const nombre_input = document.getElementById('nombre');
const password_input = document.getElementById('password');
const confirm_password_input = document.getElementById('confirm_password');
const experiencia_input = document.getElementById('experiencia');
const especialidad_input = document.getElementById('especialidad');

update_button.onclick = async () =>{
    let values = new FormData();

    values.append('email', email_input.value);
    values.append('nombre', nombre_input.value);
    values.append('password', password_input.value);
    values.append('experiencia', experiencia_input.value);
    values.append('especialidad', especialidad_input.value);

    if(password_input.value != confirm_password_input.value) return alert('Las contraseñan deben ser iguales');

    const put_object = {
        method: "put",
        body: values
    }

    try {
        await fetch("/datos/modify", put_object);
        alert('Usuario registrado Correctamente');
        window.location.href = "/";
    } catch (e) {
        console.log(e);
        alert("Something went wrong");
    }
}

delete_button.onclick = async () =>{
    const delete_object = {
        method: "delete",
    }

    try {
        await fetch("/datos/delete"+ '?id='+ delete_button.attributes['userid'].value, delete_object);
        alert('Usuario Eliminado Correctamente');
        window.location.href = "/";
    } catch (e) {
        console.log(e);
        alert("Something went wrong");
    }
}