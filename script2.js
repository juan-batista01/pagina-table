let container = [];

for(let i = 0;i < localStorage.length; i++){

    container.push(localStorage.key(i));
}

for(let i = 0; i < container.length; i++){


    let obj = localStorage.getItem(container[i]);
    let obj2 = JSON.parse(obj);





    let file = document.getElementById("dataContainer");
    let tr = document.createElement("tr");
    let td;
    let cb = document.createElement("input");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("name", "check");
    cb.setAttribute("class","check");
    cb.setAttribute("value", obj2.card);
    tr.setAttribute("id", obj2.card);

    td = document.createElement("td");
    td.append(cb);
    tr.append(td);

    td = document.createElement("td");
    td.innerHTML = obj2.name;
    tr.append(td);



    td = document.createElement("td");
    td.innerHTML = obj2.lastName;
    tr.append(td);

    td = document.createElement("td");
    td.innerHTML = obj2.card;
    tr.append(td);

    td = document.createElement("td");
    td.innerHTML = obj2.email;
    tr.append(td);

    file.append(tr);

}

function active(){

    let checkboxes = document.getElementsByName("check");


    for(let i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = true;
     }
 
}

function deleteFile(){
    let checkboxes = document.getElementsByName("check");
    let arr = [];

    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked == true){
            arr.push(checkboxes[i].value);
        }
    }
    
    for(let i = 0; i< arr.length;i++){
        let container = document.getElementById("dataContainer");
        let file = document.getElementById(arr[i]);

        container.removeChild(file);
        localStorage.clear(arr[i]);
    }

}