function letraCorrectaDNI(numero) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  return letras[numero % 23];
}

function validarDNI() {
  const input = document.getElementById("dniInput").value.toUpperCase().trim();

  const numero = parseInt(input.slice(0, 8));
  const letra = input.slice(8);

  const resultBox = document.getElementById("resultBox");
  const statusBox = document.getElementById("statusBox");

  resultBox.className = "rounded-xl p-4 text-center border";
  statusBox.className = "rounded-xl p-4 text-center border";

  if (isNaN(numero) || letra.length !== 1) {
    document.getElementById("result").textContent = "Formato inválido";
    document.getElementById("status").textContent = "Error";

    resultBox.classList.add("bg-orange-100", "border-orange-300");
    statusBox.classList.add("bg-orange-100", "border-orange-300");

    return;
  }

  const correcta = letraCorrectaDNI(numero);

  if (correcta === letra) {
    document.getElementById("result").textContent = "DNI válido";
    document.getElementById("status").textContent = "Correcto";

    resultBox.classList.add("bg-green-100", "border-green-400");
    statusBox.classList.add("bg-green-100", "border-green-400");

  } else {
    document.getElementById("result").textContent =
      `Letra incorrecta (debería ser ${correcta})`;
    document.getElementById("status").textContent = "Inválido";

    resultBox.classList.add("bg-red-100", "border-red-400");
    statusBox.classList.add("bg-red-100", "border-red-400");
  }
}