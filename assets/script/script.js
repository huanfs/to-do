let tarefa = document.querySelector("input");
let btnAdd = document.querySelector(".input-data button");
let listaTarefas = [];
btnAdd.addEventListener("click", adicionarTarefa);
//ADICIONAR TAREFA
function adicionarTarefa(){
	let listaDeTarefas = document.querySelector(".data");
//CASO JÁ TENHA A TAREFA, EXIBA MENSAGEM "JÁ TEM TAREFA"
	if(listaTarefas.includes(tarefa.value)){
		alert('Esta tarefa já está na lista!');
		tarefa.value="";
	}
//CASO NÃO SEJA INFORMADA UMA TAREFA, NÃO ADICIONA NADA E INFORMA UM ERRO
	else if(tarefa.value==''){
		alert("Por Favor informe uma tarefa")
	}
//CASO NÃO TENHA A TAREFA, ADICIONE TAREFA
	else{
//adição da tarefa e exibição da mesma no console
		listaTarefas.push(tarefa.value);
//criando a variavel ul, pai de li(tarefa);
		let exibicaoTarefa = document.querySelector(".data");
//apadrinhando LI a UL 
		let novaTarefa = document.createElement("li");
		exibicaoTarefa.appendChild(novaTarefa);
		novaTarefa.innerHTML=tarefa.value;
//apadrinhando btnRemover a LI
		let btnRemover = document.createElement("button");
		novaTarefa.appendChild(btnRemover);
//apadrinhando span a btnRemover
		let icon = document.createElement("span");
		btnRemover.appendChild(icon);
		icon.className="fa-solid fa-trash";
		tarefa.value="";
		if(listaTarefas.length>15){
			let field = document.querySelector(".container");
			field.style.overflowY="scroll";
		}
		btnRemover.addEventListener("click", removeTarefa);
//FUNÇÃO QUE REMOVE A TAREFA DO DOM
		function removeTarefa(){
			novaTarefa.parentNode.removeChild(novaTarefa);
		}
	}
}




