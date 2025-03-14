// Lista de versículos
const verses = [
"Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça. (Isaías 41:10)",

"Não to mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares. (Josué 1:9)",

"Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. (Salmo 46:1)",

"Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação. (2 Timóteo 1:7)",

"Ora, o Deus de esperança vos encha de todo o gozo e paz no vosso crer, para que sejais ricos de esperança no poder do Espírito Santo. (Romanos 15:13)",

"Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz, e não de mal, para vos dar um futuro e uma esperança. (Jeremias 29:11)",

"Eis que os olhos do Senhor estão sobre os que o temem, sobre os que esperam na sua benignidade. (Salmo 33:18)",

"As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; novas são cada manhã; grande é a tua fidelidade. (Lamentações 3:22-23)",

"O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta. (1 Coríntios 13:4-7)",

"Porque estou certo de que, nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir, nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor. (Romanos 8:38-39)",

"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. (João 3:16)",

"Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize. (João 14:27)",

"E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus. (Filipenses 4:7)",

"Tu conservarás em paz aquele cuja mente está firme em ti; porque ele confia em ti. (Isaías 26:3)",

"Nele temos a redenção pelo seu sangue, a remissão dos pecados, segundo as riquezas da sua graça. (Efésios 1:7)",

"Ele nos libertou do império das trevas e nos transportou para o Reino do seu Filho amado, em quem temos a redenção, a saber, a remissão dos pecados. (Colossenses 1:13-14)",

"Porque todos pecaram e destituídos estão da glória de Deus, sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus. (Romanos 3:23-24)",
];

// Função para quebrar o texto a cada 15 palavras
function quebrarTexto(texto, limitePalavras = 13) {
    const palavras = texto.split(' '); // Divide o texto em palavras
    let resultado = '';

    for (let i = 0; i < palavras.length; i++) {
        resultado += palavras[i] + ' ';
        if ((i + 1) % limitePalavras === 0) { // A cada 15 palavras, insere uma quebra de linha
            resultado += '<br>';
        }
    }

    return resultado.trim(); // Retorna o texto formatado
}

// Função para formatar o versículo, separando a referência e aplicando quebras de linha
function formatarVersiculo(versiculo) {
    const match = versiculo.match(/\((.*?)\)$/); // Encontra a referência bíblica
    
    if (match) {
        const texto = versiculo.replace(match[0], '').trim(); // Remove a referência do texto principal
        const referencia = match[0]; // Obtém a referência

        return `${quebrarTexto(texto)}<br><br><strong>${referencia}</strong>`; // Adiciona a quebra de linha a cada 15 palavras
    }

    return quebrarTexto(versiculo); // Caso não tenha referência, apenas aplica as quebras de linha
}

// Função para sortear e exibir um versículo formatado
function showRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const verseBox = document.getElementById("verse");
    verseBox.innerHTML = formatarVersiculo(verses[randomIndex]); // Usa innerHTML para aceitar <br>
}

// Chama a função para exibir o versículo assim que a página carregar
window.onload = function() {
    showRandomVerse();
};
