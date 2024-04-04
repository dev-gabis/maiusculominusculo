function converterParaMaiusculo() {
    const texto = document.getElementById('texto').value;
    document.getElementById('resultado').textContent = texto.toUpperCase();
  }
  
  function converterParaMinusculo() {
    const texto = document.getElementById('texto').value;
    document.getElementById('resultado').textContent = texto.toLowerCase();
  }
  
  function converterParaPrimeiraMaiuscula() {
    const texto = document.getElementById('texto').value;
    const primeiraLetraMaiuscula = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    document.getElementById('resultado').textContent = primeiraLetraMaiuscula;
  }