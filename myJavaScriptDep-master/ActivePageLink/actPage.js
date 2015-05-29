// JavaScript Document
var dir = location.href.toLowerCase();//-----------------------------------Atribui o caminho da página para a variável dir e converte tudo para caixa baixa
/*
*		 Quando você chama  uma função  expressão do tipo: var subElementos = document.getElementById("ID").childNodes;
*		 é criada uma Array em subElementos e cada childNode é atribuído a uma posição da Array. 
*		 Só que não são atribuídos apenas os objetos <li>,  são atribuidos também  objetos  #text.
*		 Se você tentar selecionar o href das âncoras dentro desses outros objetos, seu script vai parar e apontar que a propriedade para esse item é "undefined".
*		 O primeiro node de uma Lista, é um desses Elementos #text. então o índice 0 desse array deve ser evitado, o índice 2 também. e por aí vai. 
*		 Logo só as posições ímpares tem as tags <li> que você precisa manipular.
*		 Então essa função cria uma outra Array para armazenar apenas os nodes que você quer utilizar.
*
*/
function trocaClasse(parent) //-----------------------------------------Guarda apenas os filhos válidos numa array
{
	var oddChildren= [];//-------------------------------------------------Cria uma Array para guardar os filhos de índice ímpar.
	for(i=0;i<parent.length;i++)//----------------------------------------Testa todos os elementos de oddChildren
	{
		if(i%2>0)//----------------------------------------------------------Testa se o índice de oddChildren é ímpar, se for inclui o elemento em 
		{
			oddChildren.push(parent[i]);
		}
	}
	for(j=0;j<oddChildren.length;j++)//---------------------------------Testa todos os elementos de oddChildren pra saber se o link
	{                                                                                     // do anchor dentro do node li  (elemento de oddChildren)
		var kid = oddChildren[j].childNodes[0].href.toLowerCase();
		if(dir.indexOf(kid)>-1)
		{
			oddChildren[j].setAttribute("class", "yes");
		}
		else
		{
			oddChildren[j].setAttribute("class"," ");
		}
	}
	for(k=0;k<oddChildren.length;k++){
		console.log(oddChildren[k]);
	}
}
