const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const radios = document.getElementsByName("grupos");
  let selectedValue;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].value;
      break;
    }
  }

  if (selectedValue) {
    window.location.href = `grupo.html?grupo=${selectedValue}`;
  } else {
    console.log("Nenhum grupo selecionado");
  }
});