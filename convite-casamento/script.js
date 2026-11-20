// Interações do convite — Claudia Cristina & Max Alexandre
(() => {
  "use strict";

  const envelopeScreen = document.getElementById("envelopeScreen");
  const churchScreen = document.getElementById("churchScreen");
  const invitationScreen = document.getElementById("invitationScreen");

  const openEnvelope = document.getElementById("openEnvelope");
  const openEnvelopeText = document.getElementById("openEnvelopeText");
  const continueToInvitation = document.getElementById("continueToInvitation");

  function showScreen(screenToShow) {
    [envelopeScreen, churchScreen, invitationScreen].forEach((screen) => {
      screen.classList.remove("is-active");
    });
    screenToShow.classList.add("is-active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openTheEnvelope() {
    if (envelopeScreen.classList.contains("opening")) return;

    envelopeScreen.classList.add("opening");
    openEnvelope.disabled = true;
    openEnvelopeText.disabled = true;

    // Tempo para a animação do envelope antes de revelar a igreja.
    window.setTimeout(() => {
      showScreen(churchScreen);
    }, 1450);
  }

  openEnvelope.addEventListener("click", openTheEnvelope);
  openEnvelopeText.addEventListener("click", openTheEnvelope);

  continueToInvitation.addEventListener("click", () => {
    showScreen(invitationScreen);
  });

  // Exibe o espaço reservado apenas quando a imagem ainda não foi adicionada.
  document.querySelectorAll(".event-photo").forEach((image) => {
    const frame = image.closest(".photo-frame");

    function checkImage() {
      if (image.complete && image.naturalWidth > 0) {
        frame.classList.add("has-image");
      } else {
        frame.classList.remove("has-image");
      }
    }

    image.addEventListener("load", checkImage);
    image.addEventListener("error", checkImage);
    checkImage();
  });
})();
