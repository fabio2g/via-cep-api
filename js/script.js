"use strict";

const inputForm = (endereco) => {
    if (endereco.erro) {
        document.getElementById("endereco").value = "Não encontrado";
        document.getElementById("bairro").value = "Não encontrado";
        document.getElementById("cidade").value = "Não encontrado";
        document.getElementById("estado").value = "Não encontrado";
    } else {
        document.getElementById("endereco").value = endereco.logradouro;
        document.getElementById("bairro").value = endereco.bairro;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("estado").value = endereco.uf;
    }
};

const searchCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    inputForm(endereco);
    console.log(endereco);
};

document.getElementById("cep").addEventListener("focusout", searchCep);
