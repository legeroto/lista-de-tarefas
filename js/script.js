let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
    //OBTER VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO ESTIVER VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})"class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`;

        //ADICIONA NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //LIMPAR OS CAMPOS
        input.value = "";
        input.focus();

    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");
    console.log(classe);

    if (classe == "item") {
        item.classList.add("clicado");
        
        let icone = document.getElementById("icone_" + id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove("clicado");
        
        let icone = document.getElementById("icone_" + id)
        icone.classList.remove('mdi-check-circle');
        icone.classList.add("mdi-circle-outline");
    }
}

input.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (tecla 13)
    if (event.keyCode === 13) {
        event.preventDefault(); //GARANTIR QUE TECLA ENTER TENHA PROPRIEDADES PADRÕES
        btnAdd.click();

    }
})