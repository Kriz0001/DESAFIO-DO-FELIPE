let nomeHeroiUsuario = "Superman";
let xpHeroiUsuario = "7500";

// Variáveis para armazenar o nome e a quantidade de experiência
let nomeHeroi = nomeHeroiUsuario;
let xpHeroi = parseInt(xpHeroiUsuario);

// Variável para armazenar o nível do herói
let nivel;

// Utiliza a estrutura switch-case para determinar o nível do herói com base na quantidade de XP
switch (true) {
    case (xpHeroi < 1000):
        nivel = "Ferro";
        break;
    case (xpHeroi >= 1001 && xpHeroi <= 2000):
        nivel = "Bronze";
        break;
    case (xpHeroi >= 2001 && xpHeroi <= 5000):
        nivel = "Prata";
        break;
    case (xpHeroi >= 5001 && xpHeroi <= 7000):
        nivel = "Ouro";
        break;
    case (xpHeroi >= 7001 && xpHeroi <= 8000):
        nivel = "Platina";
        break;
    case (xpHeroi >= 8001 && xpHeroi <= 9000):
        nivel = "Ascendente";
        break;
    case (xpHeroi >= 9001 && xpHeroi <= 10000):
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

// Exibe a mensagem com o nome do herói e seu nível
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
