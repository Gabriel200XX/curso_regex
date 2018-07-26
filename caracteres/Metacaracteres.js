// . ? * + - ^ $ | [ ] { } ( ) \ :
/* Metacaracteres - Representantes
 * . Ponto = Um caractere qualquer
 * [] Conjunto = Conjunto de caracteres permitidos
 * [^] Conjunto Negado = Conjunto de caracteres proibidos
 * 
 * Metacaracteres - Quantificadores
 * ? Opcional = Zero ou um
 * * Asterisco = Zero ou mais
 * + Mais = Um ou mais
 * {n, m} Chaves = De n até m
 * 
 * Metacaracteres - Âncoras
 * ^ Circunflexo = Início de linha
 * $ Cifrão = Fim de linha
 * \b Borda = Início ou fim de palavra
 * 
 * Outros Metacaracteres
 * \ Escape = Uso de metacaracteres como literal
 * | Ou = Operação de Ou
 * ( ) Grupo = Define um Grupo
 * \1...\9 Retrovisor = Resgata grupos já definidos
 */

const texto = '1,2,3,4,5,6,a.b c!d?e';
const regexPonto = /\./g;
console.log(texto.split(regexPonto));

const regexSimbolos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbolos));