const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`;

console.log(texto.match(/\d/g)); // Números [0-9]
console.log(texto.match(/\D/g)); // Não Números [^0-9]
console.log(texto.match(/\w/g)); // Caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)); // Não Caracteres [^a-zA-Z0-9_]
console.log(texto.match(/\s/g)); // Espaços [ \t\n\r\f]
console.log(texto.match(/\S/g)); // Não Espacos [^ \t\n\r\f]

// \b \B