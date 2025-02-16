/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 1, true, {name: 'Bianca'}, 'Luísa', [2,3]]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = [5, false, {nome: 'Marcelle'}, 29.1, ['Bethânia', 'Marília']]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myVar, 0));
console.log(myFunction2(myVar, 1));
console.log(myFunction2(myVar, 2));
console.log(myFunction2(myVar, 3));
console.log(myFunction2(myVar, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookname) {
    var allBooks = {
        'É assim que acaba': {
            quantidadedePaginas: 358,
            autor: 'Colleen Hoover',
            editora: 'Editorial Record'
        },
        'Flores para Algernon': {
            quantidadedePaginas: 288,
            autor: 'Daniel Keyes',
            editora: 'Aleph'
        },
        'O filho rebelde': {
            quantidadedePaginas: 344,
            autor: 'Rainbow Rowell',
            editora: 'Seguinte'
        },

    }

   return !bookname ? allBooks : allBooks[bookname];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

`O livro É assim que acaba tem ${book('É assim que acaba').quantidadedePaginas} páginas.`

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

`O livro É assim que acaba é do autor ${book('É assim que acaba').autor}`

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro É assim que acaba foi publicado pela editora ${book('É assim que acaba').editora}`
