function Validar() {
var Nome = document.getElementById("primeironome").value; 
var Sobrenome = document.getElementById("segundonome").value;
var Email = document.getElementById("email").value;
var Cidade = document.getElementById("cidade").value;
var Estado = document.getElementById("estado").value;
var CEP = document.getElementById("cep").value;






if (Nome=='') {
    alert("O nome está vazio");
    return false;
} else if (Sobrenome=='') {
alert("O segundonome está vazio") 
return false }
else if(Email=='') {
alert("O email está vazio") 
return false }
else if (Cidade=='') {
alert("Insira a cidade")
return false }
else if (Estado=='') {
alert("Insira o estado")
return false }
else if (CEP=='') {
alert("Insira o CEP")
return false }

}

function Checkbox() {
    var Termos = document.getElementById("termos")

    if (Termos.checked) {
        alert("Os termos foram aceitos")
}

else {
    alert("Você precisa aceitar os termos")
    return false
    
}

}