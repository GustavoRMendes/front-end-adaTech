const bannerContentBtn = document.querySelector(".banner-content-btn");
console.log(bannerContentBtn);
const links = document.querySelectorAll(".nav-item");
console.log(links);
const brand = document.querySelector(".nav-brand");
console.log(brand);
const image = document.querySelector(".banner-image");
console.log(image);

// Events
bannerContentBtn.addEventListener("click", () => {
  const confirmacao = confirm("Tem certeza que quer baixar?");
  if (confirmacao) {
    alert("Arquivo baixado!");
  } else {
    alert("Download cancelado!");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    alert("Clique no link!");
  });
});

brand.addEventListener("click", () => {
  alert("Bem-vindo ao Portfólio de Gustavo Mendes!");
});

image.addEventListener("click", () => {
  alert("Esse sou eu.");
});
