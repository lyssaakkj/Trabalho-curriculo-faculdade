document.getElementById("copyEmail").addEventListener("click", function() {
  const email = "pedro.silva@example.com";
  navigator.clipboard.writeText(email)
    .then(() => alert("E-mail copiado: " + email))
    .catch(() => alert("Não foi possível copiar o e-mail."));
});
