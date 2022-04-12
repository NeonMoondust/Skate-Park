const check_box = document.querySelectorAll('#stateCheckBox');

(() => {
    check_box.forEach((element) =>{
        element.checked = element.attributes['defaultState'].value === 'true';
    });
})();

async function stateChx(id){
    const values = new FormData();
    values.append('id', id);
    const put_object = {
        method: "put",
        body: values
    }
    try {
        await fetch("/admin", put_object);
    } catch (e) {
        console.log(e);
        alert("Something went wrong");
    }
}