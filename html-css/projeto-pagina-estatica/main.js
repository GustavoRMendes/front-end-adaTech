const bannerContentBtn = document.querySelector(".banner-content-btn");
const links = document.querySelectorAll(".nav-item");
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
