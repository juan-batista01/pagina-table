function saveDate(){

    let date = {

        name: document.getElementById("name").value,
        lastName: document.getElementById("lastName").value,
        card: document.getElementById("identificationCard").value,
        email: document.getElementById("email").value
}

localStorage.setItem(date.card, JSON.stringify(date));

let form = document.getElementById("form");
form.reset();
}