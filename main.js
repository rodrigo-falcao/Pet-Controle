
let pets = [];

function addPet() {

    event.preventDefault();

    let pet = {
        "petName": document.getElementById("fname").value,
        "petBreed": document.getElementById("fbreed").value,
        "petOwner": document.getElementById("fowner").value,
        "phone": document.getElementById("fphone").value,
    }

    document.getElementById("fname").value = "";
    document.getElementById("fbreed").value = "";
    document.getElementById("fowner").value = "";
    document.getElementById("fphone").value = "";

    pets.push(pet);

    renderTable();

}

function renderTable() {
    let table = document.getElementById("dataTable");

    table.innerHTML = `<tr>
    <th>ID</th>
    <th> Nome do Pet</th>
    <th> Raça </th>
    <th> Dono do Pet </th>
    <th> Telefone </th>
    <th> Remover </th>
</tr>`;

    for(let i = 0; i < pets.length; i++){

        table.innerHTML = table.innerHTML + `<td> ${ i }
        <td> ${pets[i].petName} </td>
        <td> ${pets[i].petBreed} </td>
        <td> ${pets[i].petOwner} </td>
        <td> ${pets[i].phone} </td>
        <td><img src="assets/image/imagedel.png" width="25px" height="25px" onclick="removePet(${i})"></td>`
}
}

function removePet(index){

    pets.splice(index,1);
    renderTable();
}