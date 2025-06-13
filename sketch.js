let caminhao;
let fazenda;
let mercado;
let chegou = false;
let carregado = true;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);

  // Posições
  fazenda = createVector(100, height / 2);
  mercado = createVector(width - 100, height / 2);
  caminhao = createVector(fazenda.x, fazenda.y);
}

function draw() {
  desenharCenario(); // Chama o cenário visual

  // Fazenda
  textSize(40);
  text("🏡", fazenda.x, fazenda.y - 60);
  textSize(16);
  text("Fazenda", fazenda.x, fazenda.y - 30);

  // Mercado
  textSize(40);
  text("🏪", mercado.x, mercado.y - 60);
  textSize(16);
  text("Mercado", mercado.x, mercado.y - 30);

  // Caminhão
  textSize(40);
  text("🚛", caminhao.x, caminhao.y);

  // Verduras no caminhão
  if (carregado) {
    textSize(25);
    text("🥦🥬🥕", caminhao.x, caminhao.y - 35);
  }

  // Movimento
  if (!chegou) {
    if (keyIsDown(LEFT_ARROW)) caminhao.x -= 3;
    if (keyIsDown(RIGHT_ARROW)) caminhao.x += 3;
    if (keyIsDown(UP_ARROW)) caminhao.y -= 3;
    if (keyIsDown(DOWN_ARROW)) caminhao.y += 3;
  }

  // Entrega
  if (!chegou && dist(caminhao.x, caminhao.y, mercado.x, mercado.y) < 40) {
    chegou = true;
    carregado = false;
  }

  // Mensagem de sucesso
  if (chegou) {
    textSize(30);
    fill(0, 150, 0);
    text("Verduras entregues com sucesso! 🎉", width / 2, height - 50);
  }
}

function desenharCenario() {
  // Céu
  background(135, 206, 235);

  // Sol
  fill(255, 204, 0);
  ellipse(80, 80, 80, 80);

  // Grama
  fill(34, 139, 34);
  rect(0, height / 2 + 50, width, height / 2);

  // Estrada
  fill(80);
  rect(0, height / 2 - 20, width, 60);
}

