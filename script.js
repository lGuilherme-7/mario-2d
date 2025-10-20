const mario = document.querySelector('.mario'); 
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.querySelector('.score');

let score = 0;

// Função de pulo
const jump = () => {
  mario.classList.add('jump');

  // Remove a classe após 500ms para permitir novos pulos
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

// Loop do jogo
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    // Parar a animação do cano
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    // Parar o Mario na posição do pulo
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    // Trocar imagem do Mario
    mario.src = 'imagens/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop); // Para o loop do jogo
  }

  // 🧮 Atualiza pontuação
  // Quando o cano sai completamente da tela, aumenta 1 ponto
  if (pipePosition < -60) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }

}, 10);

// Detecta o pulo ao apertar qualquer tecla
document.addEventListener('keydown', jump);
