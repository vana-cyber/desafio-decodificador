document.addEventListener("DOMContentLoaded", () => {
    const areaDeTexto = document.querySelector(".input-text");
    const botaoEncriptar = document.getElementById("botao__criptografar");
    const botaoDesencriptar = document.getElementById("botao__descriptografar");
    const botaoCopiar = document.getElementById("botao__copiar");

    areaDeTexto.addEventListener("input", () => {
      const texto = areaDeTexto.value;
      areaDeTexto.value = texto.replace(/[^a-zA-Z]/g, ' ');
  });


    function encriptarTexto() {
      const texto = areaDeTexto.value.toLowerCase();
      const textoEncriptado = texto.replace(/e/g, 'enter')
                                   .replace(/i/g, 'imes')
                                   .replace(/a/g, 'ai')
                                   .replace(/o/g, 'ober')
                                   .replace(/u/g, 'ufat');
  
       
      const saidaDeTexto = document.querySelector('.texto-saida'); 
      saidaDeTexto.textContent = textoEncriptado;
      areaDeTexto.value = "";
  
      document.getElementById("botao__copiar").style.display = "block"; // Mostrar botão copiar
      document.querySelector(".saidaDeTexto__elementos").style.display = "none";
      document.querySelector(".hidden").style.display = "block";

    }
  
    function desencriptarTexto() {
      const texto = areaDeTexto.value.toLowerCase();
      const textoDesencriptado = texto.replace(/enter/g, 'e')
                                       .replace(/imes/g, 'i')
                                       .replace(/ai/g, 'a')
                                       .replace(/ober/g, 'o')
                                       .replace(/ufat/g, 'u');

      const saidaDeTexto = document.querySelector('.texto-saida'); 
      saidaDeTexto.textContent = textoDesencriptado;
  
      document.getElementById("botao__copiar").style.display = "block"; // Mostrar botão copiar
      document.querySelector(".saidaDeTexto__elementos").style.display = "none";
      document.querySelector(".hidden").style.display = "block";
    }
  
    function copiarTexto() {
      const saidaDeTexto = document.querySelector('.texto-saida'); 
      const textoCopiado = saidaDeTexto.textContent;
      
      navigator.clipboard.writeText(textoCopiado).then(() => {
        alert("Texto copiado para a área de transferência!");
      }).catch(err => {
        console.error('Falha ao copiar o texto: ', err);
      });
    }
  
    botaoEncriptar.addEventListener("click", encriptarTexto);
    botaoDesencriptar.addEventListener("click", desencriptarTexto);
    botaoCopiar.addEventListener("click", copiarTexto); 
  });