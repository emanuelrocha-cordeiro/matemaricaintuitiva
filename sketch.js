//Escalas de posições
var tela = 1;
var largura0 = 120;
var altura0 = 50;
var altura1 = 60;
var largura1= 90;
var largura = 200;
var altura = 50;
var xMenu = 130;
var xMenu1 = 350;
var xMenu2 = 215;
var xMenu3 = 440;
var yMenu1 = 195;
var yMenu2 = 265;
var yMenu3 = 200;
var yMenu4 = 440;
var xMenu4 = 170; 
var xMenu5 = 50;
var xMenu6 = 430;
var xMenu7 = 300;
var yMenu5 = 355;
//Pontuação
var pontos = 0;
var nivel = 1;
var barreiraPontos = 20;
var tempo = 0;
var rate = 60;
//Selecionar movimentar
var posXE = 150;
var posYE = 100;
var raio = 25;
//Números
  //  Cálculo 
    var num1 = 2;
    var num2 = 2;
    var op = "";
    var res = "";
    var Res = "";
  // Alternativas
    var res1 = 4;
    var res2 = 6;
    var res3 = 10;
    var res4 = 14;
//Resposta 
var PosRX = 400;
var PosRY = 200;
var PosR = (PosRX,PosRY)
//Imagens
let img;
function preload() {
  img = loadImage('escola.jpg');
  img1 = loadImage('floresta.jpg')
  img2 = loadImage('florestaa.jpg')
}
function setup() {
  createCanvas(600, 500);
  frameRate(rate);
}

function draw() {
  background(220);
   textStyle(NORMAL);
  // Tela de Menu
  if (tela == 1) {
    background(20);
    // Menu com duas Opções
    // Iniciar o Jogo
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    
    textSize(25);
    image(img,0,0);
    
    if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ) {
      stroke(280);
      fill(127,255,0);
      rect(xMenu, yMenu1, largura0, altura0, 15);
       if (mouseIsPressed) {
         tela = 2;
         gerandoNumeros();
         alternativa();
       }
    }
    stroke(500);
    fill(51);
    text("INICIAR", 190, 230);
    
    //Intruções do jogo
        if ( mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ) {
      stroke(280);
      fill(70,130,180);
      rect(xMenu1, yMenu3, largura, altura, 15);
       if (mouseIsPressed) {
         tela = 4;
       }
    }
    stroke(500);
    fill(51);
    text("INSTRUÇÕES", 450,230);
    
    //Informações do Jogo
    if ( mouseX > xMenu2 && mouseX < xMenu2 + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ) {
      stroke(280);
      fill(238, 0, 0);
      rect(xMenu2, yMenu2, largura, altura, 15);
      if (mouseIsPressed) {
         tela = 3;
       }
    }
    stroke(500);
    fill(51);
    text("INFORMAÇÕES",315,300);
    textSize(40);
    text("MATEMÁTICA INTUITIVA", 300, 50);
  }
  
  
  // Jogo em ação
  else if (tela == 2) {
    background(img1);
    tempo = parseInt(frameCount/60);
    fill(0);
    textSize(30);
    text("NÍVEL: "+nivel,100,40);
    text("PONTOS: "+pontos,450,40);
    text(tempo,300,40);
    text("SAIR",500,480);
    textSize(50);
    text(num1 + " "+ op +" "+ num2 +" = "+res,250,200)
    
    fill('red');
    textSize(50);
    //Primeira resposta
    text(res1,100,400)
    noFill();
    rect(xMenu4, yMenu5, largura1, altura1, 15);
      if (mouseIsPressed && mouseX > xMenu5 && mouseX < xMenu5 + largura1 && mouseY > yMenu5 && mouseY < yMenu5 + altura1 ) {
         res=res1 ;
      if(res1 == Res){
      res = Res;
      gerandoNumeros();
      alternativa();
      pontos=pontos+1;
      }        
       }
    fill('red');
    //Segunda resposta
    text(res2,225,400)
    noFill();
    rect(xMenu5, yMenu5, largura1, altura1, 15);
      if (mouseIsPressed && mouseX > xMenu4 && mouseX < xMenu4 + largura1 && mouseY > yMenu5 && mouseY < yMenu5 + altura1 ) {
         res=res2 ;
      if(res2 == Res){
      res = Res;    
      gerandoNumeros();  
      alternativa();
      pontos=pontos+1;
       }    
      }    
    fill('red');
    //Terceira resposta    
    text(res3,350,400)
    noFill();
    rect(xMenu6, yMenu5, largura1, altura1, 15);
      if (mouseIsPressed && mouseX > xMenu6 && mouseX < xMenu6 + largura1 && mouseY > yMenu5 && mouseY < yMenu5 + altura1 ) {
         res=res4 ;
      if(res4 == Res){
      res = Res;
      gerandoNumeros();  
      alternativa();
      pontos=pontos+1;
      }        
       }

    fill('red');
    //Quarta resposta
    text(res4,475,400)
    noFill();
    rect(xMenu7, yMenu5, largura1, altura1, 15);
      if (mouseIsPressed && mouseX > xMenu7 && mouseX < xMenu7 + largura1 && mouseY > yMenu5 && mouseY < yMenu5 + altura1 ) {
         res=res3 ;
      if(res3 == Res){  
      res = Res;
      gerandoNumeros();  
      alternativa();
      pontos=pontos+1;
      }
            
       }

    // incremento de pontos

    // barreiras de pontos 
    if ( pontos > barreiraPontos ) {
        nivel = nivel + 1;
        barreiraPontos = barreiraPontos + 20;
        pontos = 20;
        tela = 5;
      }
        {if ( mouseX > xMenu3 && mouseX < xMenu3 + largura0 && mouseY > yMenu4 && mouseY < yMenu4 + altura0 ) {
      stroke(280);
      fill('rgba(0,255,0, 0.25)');
      rect(xMenu3, yMenu4, largura0, altura0, 15);
      if (mouseIsPressed) {
           tela = 1;
  }
  }
  }
  }
  // Intruções sobre o jogo
  else if (tela == 4) {
    background(img2);
    fill(0);
    textSize(28);
    noStroke();
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text("USE O MOUSE PARA JOGAR!", 150, 200, 300, 500);
    fill(0);
    text("VOLTAR",500,480);
       {if ( mouseX > xMenu3 && mouseX < xMenu3 + largura0 && mouseY > yMenu4 && mouseY < yMenu4 + altura0 ) {
      stroke(200);
      fill('rgba(0,255,0, 0.25)');
      rect(xMenu3, yMenu4, largura0, altura0, 15);
      if (mouseIsPressed) {
           tela = 1;
        }
  }
  }
  }
  // Informações sobre o jogo
  else if (tela == 3) {
    background(img2);
    fill(0);
    textSize(28);
    noStroke();
    textStyle(BOLDITALIC);
    text("O JOGO TEM A FINALIDADE DE FORMA INTUITIVA, QUE O ALUNO SOLUCIONE PROBLEMAS DE MATEMÁTICA!", 150, 130, 300, 500);
    fill(0);
    text("VOLTAR",500,480);
        {if ( mouseX > xMenu3 && mouseX < xMenu3 + largura0 && mouseY > yMenu4 && mouseY < yMenu4 + altura0 ) {
      stroke(200);
      fill('rgba(0,255,0, 0.25)');
      rect(xMenu3, yMenu4, largura0, altura0, 15);
      if (mouseIsPressed) {
           tela = 1;
        }
  }
  }
  }
  // Informações sobre o jogo
  else if (tela == 5) {
    background(img2);
    fill(0);
    textSize(28);
    noStroke();
    textStyle(BOLDITALIC);
    text("PARABÉNS VOCÊ CONCLUIU O JOGO! OBRIGADO POR JOGAR.", 150, 130, 300, 500);
    fill(0);
    text("SAIR",500,480);
        {if ( mouseX > xMenu3 && mouseX < xMenu3 + largura0 && mouseY > yMenu4 && mouseY < yMenu4 + altura0 ) {
      stroke(200);
      fill('rgba(0,255,0, 0.25)');
      rect(xMenu3, yMenu4, largura0, altura0, 15);
      if (mouseIsPressed) {
           tela = 1;
        }
  }
  }
  }
}
function gerandoNumeros(){
  num1 = int(random(0,10.99));
  num2 = int(random(0,10.99));
  op = int(random(1,3.99));
  if(op==1){
    op = '+'
  }
  if(op==2){
    op = '-'
  }
  if(op==3){
    op = '*'
  }
  res1 = int(random(-100,100.99));
  res2 = int(random(-100,100.99));
  res3 = int(random(-100,100.99));
  res4 = int(random(-100,100.99));
  res = "";
}
function alternativa(){
  if(op == '+'){
    var aux = int(random(1,3.99));
    if(aux == 1){
      res1 = num1+num2;
      Res = res1;
    }
    if(aux == 2){
      res2 = num1+num2;
      Res = res2;
    }
    if(aux == 3){
      res3 = num1+num2;
      Res = res3;
    }
    }
  
  if(op == '-'){
    var aux = int(random(1,3.99));
    if(aux == 1){
      res1 = num1-num2;
      Res = res1;
    }
    if(aux == 2){
      res2 = num1-num2;
      Res = res2;
    }
    if(aux == 3){
      res3 = num1-num2;
      Res = res3;
    }
    }
  
  if(op == '*'){
    var aux = int(random(1,3.99));
    if(aux == 1){
      res1 = num1*num2;
      Res = res1;
    }
    if(aux == 2){
      res2 = num1*num2;
      Res = res2;
    }
    if(aux == 3){
      res3 = num1*num2;
      Res = res3;
    }
  }
}