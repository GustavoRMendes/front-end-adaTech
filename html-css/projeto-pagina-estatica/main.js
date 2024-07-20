const bannerContentBtn = document.querySelector(".banner-content-btn");
console.log(bannerContentBtn);
const links = document.querySelectorAll(".nav-item");
const brand = document.querySelector(".nav-brand");
const image = document.querySelector(".banner-image");
bannerContentBtn.addEventListener("click", () => {
  const confirmacao = confirm("Tem certeza que quer baixar?");
  if (confirmacao) {
    alert("Arquivo baixado.");
  } else {
    alert("Download cancelado.");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    alert("Clique no link");
  });
});

brand.addEventListener("click", () => {
  alert("Bem-vindo ao Portfólio do Gustavo!");
});

image.addEventListener("click", () => {
  alert("Esse sou eu, Gustavo Mendes.");
});
