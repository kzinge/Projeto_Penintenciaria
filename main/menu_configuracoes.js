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
    window.location.href = '../fale_conosco/index.html';
  })

botoes_barra_lateral[1].addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.pciconcursos.com.br/', '_blank');
  });

botoes_barra_lateral[2].addEventListener ('click', (event)=>{
    window.location.href = '../sobre/index.html';
  })

botoes_barra_lateral[3].addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.google.com/maps/place/Pres%C3%ADdio+Estadual+do+Serid%C3%B3+(Pereir%C3%A3o)/@-6.4429121,-37.0741098,15z/data=!4m6!3m5!1s0x7afec2fb860c30d:0xaa80cd0d1611d9a1!8m2!3d-6.4429121!4d-37.0741098!16s%2Fg%2F11g8xks7y1?entry=ttu', '_blank');
  });
  
  botoes_barra_lateral[4].addEventListener ('click', (event)=>{
      window.location.href = '../main/main.html';
    })
botoes_barra_lateral[5].addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.dbd.puc-rio.br/configuracoes/gchrome.html', '_blank');
    });