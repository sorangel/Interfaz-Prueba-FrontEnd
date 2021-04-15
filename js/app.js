const getMessageNode = () => document.querySelector("#message");
const getEmailNode = () => document.querySelector("#email");
const getMessageImageNode = () => document.querySelector("#message-image");
const getMessageTextNode = () => document.querySelector("#message-text");
const getNameNode = () => document.querySelector("#name");
const getSubmitNode = () => document.querySelector("#submit");
const getMessageClose = () => document.querySelector("#message-close");

let isOpenMessage = false;

getSubmitNode().addEventListener("click", (event) => {
  event.preventDefault();

  const email = getEmailNode().value;
  const name = getNameNode().value;

  validate(email, name);
});

getMessageClose().addEventListener("click", (event) => {
  event.preventDefault();

  closeMessage();
});

function validate(email = "", name = "") {
  const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );

  const isValidName = name.length >= 4;

  if (isValidEmail && isValidName) {
    showMessage(true, "Formulario enviado con exito.");
  } else {
    showMessage(false, "Error al enviar el formulario.");
  }
}

function showMessage(status = false, message = "") {
  if (!isOpenMessage) {
    isOpenMessage = true;

    if (status) {
      getMessageImageNode().src = "assets/check.svg";
      getMessageNode().classList.remove("show-error-message");
    } else {
      getMessageImageNode().src = "assets/close.svg";
      getMessageNode().classList.add("show-error-message");
    }

    getMessageTextNode().innerHTML = message;

    getMessageNode().classList.add("show-message");

    setTimeout(closeMessage, 5000);
  }
}

function closeMessage() {
  getMessageNode().classList.remove("show-message");
  isOpenMessage = false;
}
