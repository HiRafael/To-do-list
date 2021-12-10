var html = document.querySelector('html')
var tarefa = document.querySelector('#userInput')
var btn = document.querySelector('#btn')
var ul = document.querySelector('.ul')
var item = document.getElementsByTagName('li')
var checkBox = document.querySelector('#check')

function criarTarefa(){
	
	var li = document.createElement('li')
	var botao = document.createElement('button')
	
	li.appendChild(document.createTextNode(tarefa.value))
	ul.appendChild(li)

	tarefa.value = ""

	function feito(){
		li.classList.toggle('feito')	
 }

	li.addEventListener('click',feito)


		botao.appendChild(document.createTextNode('X'))
		li.appendChild(botao)
		botao.classList.add('dell')
		botao.addEventListener('click',deletar)	
	
		function deletar(){
			li.classList.add('deletar')	
		}

}

	tarefa.addEventListener('keypress',()=>{
		if(event.which === 13){
			criarTarefa()
	}
})

	btn.addEventListener('click',criarTarefa)
	
	checkBox.addEventListener('change', ()=>{
		html.classList.toggle('darkMode')
})
	
