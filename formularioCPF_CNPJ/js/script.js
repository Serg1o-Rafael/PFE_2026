var valorPessoa = ""
 
/*Toda vez que for utilizado uma função antecedido pelo caractere $, você está dizendo que será executado pela linguagem JQuery
A função ready executa uma ação (função) assim que a página é totalmente carregada.
*/
 
 
$(document).ready(function() {
    $("input[name=pessoa]").on("click", function(){ // Ao clicar em um dos botões de rádio (Pessoa fisica ou jurídica, será executado umã ação (função).
     valorPessoa = $('input[name=pessoa]:checked').val() //A variável valorPessoa recebe o valor do botão de rádio clicado pelo usuário
     if(valorPessoa == 'fisica'){
        $("#novoCampo").html('<label for=CPF class=linha><span>CPF</span><input type=text name=CPF id=CPFid class=caixa_texto placeholder=XXX-XXX-XXX-XX required></label> ')
     } else if(valorPessoa == 'juridica'){
        $("#novoCampo").html('<label for=CNPJ class=linha><span>CNPJ</span><input type=text name=CNPJ id=CNPJid class=caixa_texto placeholder=XXX-XXX-XXX/XXXX required></label>')
       }
 
    })
})
 