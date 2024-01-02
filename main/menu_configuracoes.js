let botao_hamburguer = document.getElementById("Bmenu_header")
let barra_lateraltudo = document.getElementsByClassName("barra_lateral")
let barra_lateral = barra_lateraltudo[0]
botao_hamburguer.addEventListener ('click', (event)=>{
    if (barra_lateral.style.display == "flex") {
        barra_lateral.style.display = "none"
    }
    else {
        barra_lateral.style.display = "flex"
    }
  })


let botoes_barra_lateral = document.querySelectorAll("#botoes_menu > button")

botoes_barra_lateral[0].addEventListener ('click', (event)=>{
    window.location.href = '../atendimento/atendimento.html';
  })

botoes_barra_lateral[1].addEventListener('click', (event) => {
  window.location.href = '../initial/index.html';
})

botoes_barra_lateral[2].addEventListener ('click', (event)=>{
    window.location.href = '../sobre/index.html';
  })

botoes_barra_lateral[3].addEventListener('click', (event) => {
    window.location.href = '../cadastro_presos/index.html';
});
  
botoes_barra_lateral[4].addEventListener ('click', (event)=>{
    window.location.href = '../main/main.html';
  })

botoes_barra_lateral[5].addEventListener('click', (event) => {
    window.location.href = '../fale_conosco/index.html';
    });