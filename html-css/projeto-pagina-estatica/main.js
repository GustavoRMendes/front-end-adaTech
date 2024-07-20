const bannerContentBtn = document.querySelector(".banner-content-btn");
bannerContentBtn.addEventListener("click", () => {
  const confirmacao = confirm("Tem certeza que quer baixar?");
  if (confirmacao) {
    alert("Arquivo baixado.");
  } else {
    alert("Download cancelado.");
  }
});
