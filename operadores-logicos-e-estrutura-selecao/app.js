const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e habilitação para saber se você pode entrar no kart');
console.log('Alem da sua verificação, precisamos verificar se você está na lista de presença');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2004) {
        console.log('Você não é maior de idade.');
    }else{
        readLine.question('Você tem habilitação? (SIM\NÃO)', temHabilitação => {
            if(!(temHabilitação.toUpperCase() === "SIM")) {
                console.log('Você não tem habilitação para entrar no kart');
            }else{
                readLine.question("Qual seu nome?", nome => {
                    switch(nome){
                        case 'Douglas' : 
                            console.log('Bem-Vindo ao kart Douglas')
                            break;
                        case 'Rafael' :
                            console.log('Bem-Vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome não foi identificado na lista de presença');
                    }
                })
            }
        })
    }
})