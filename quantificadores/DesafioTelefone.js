const texto = `Lista telefônica:
    - (11) 98756-1212
    -98765-4321
    - (47) 99640-9108
    - 99648-7760
    - (2)3261-8899`;

// Minha solução
console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g));
// Meio Certo, mas Funciona um pouco melhor que a solução do curso, então está certo.

// Solução curso
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));