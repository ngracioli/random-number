const button_generator = document.getElementById("generator");
const button_clear = document.getElementById("clear");

button_generator.addEventListener("click", function () {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  let result = Math.floor(Math.random() * (max - min + 1) + min);

  if (isNaN(result)) {
    result = "Valor Inválido";
  }

  document.querySelector("#result span").textContent = result;
});

button_clear.addEventListener("click", function () {
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
  document.querySelector("#result span").textContent = "00";
});
