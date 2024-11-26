//Varíaveis iniciais
let nomeHeroi = ['Rubscleido', 'Zé Assis', 'Marionete', 'Bebado da caixa prego','Teu pai', 'Cunhã Maria','Johnny Boy', 'Jesus Cristo']
let expHeroi = [500, 1498, 3783, 6333, 7456, 8325, 9564, 999999999999]

//Laço de repetição
for(let i = 0; i < nomeHeroi.length; i++){
    //Variáveis secundárias
    let nome = nomeHeroi[i]
    let xp = expHeroi[i]
    let nivel

    //Estrutura de decisão
    if(xp < 1000){
        nivel = 'Ferro'
        console.log('Parabéns! Você alcançou o nível: ' + nivel)

    } else if (xp >= 1000 && xp <= 2001){
        nivel = 'Bronze'
        console.log('Parabéns! Você alcançou o nível ' + nivel)

    }else if (xp >= 2001 && xp <= 5000){
        nivel = 'Prata'
        console.log('Parabéns! Você alcançou o nível ' + nivel)

    }else if(xp >= 6001 && xp <= 7000){
        nivel = 'Ouro'
        console.log('Parabéns! Você alcançou o nível ' + nivel)

    }else if (xp >= 7001 && xp <= 8000){
        nivel = 'Platina'
        console.log('Parabéns! Você alcançou o nível ' + nivel)

    }else if(xp >= 8001 && xp <= 9000){
        nivel = 'Ascendente'
        console.log('Parabéns! Você alcançou o nível ' + nivel)

    }else if(xp >= 9001 && xp <= 10000){
        nivel = 'Imortal'
        console.log('Parabéns! Você alcançou o nível ' + nivel)

    }else if(xp >= 10001){
        nivel = 'Radiante'
        console.log('Parabéns! Você alcançou o nível ' + nivel)

    }


    console.log('O Herói de nome ' + nome + ' está no nível ' + nivel)
}

//Código 50% feito por Eduardo Mansur 100% inspirado por Thales Cardoso