const I = actor();
const assert = require("assert");
const utils = require("../../utils/utils");
let wait = { retries: 5, minTimeout: 2000 };
const config = require("./Login.locator");
let locator = config.locator;

module.exports = {
  Constructor() {
    I.retry(wait).amOnPage("/");
    this.locator = config.locator;
  },

  ValidacionInicialLogin() {
    I.retry(wait).say("Validación inicial antes del Login");
    I.retry(wait).see("¡Bienvenida");
    I.retry(wait).seeElement(locator.selectPais);
    I.retry(wait).seeElement(locator.fieldUsuario);
    I.retry(wait).seeElement(locator.fieldPassword);
    I.retry(wait).seeElement(locator.clickLogin);
    I.retry(wait).seeElement(locator.btnLoginFB);
  },

  IngresarCredenciales(Pais, Usuario, Password) {
    I.retry(wait).say("Ingresando las credenciales para el Login");
    I.retry(wait).selectOption(locator.selectPais, Pais);
    I.retry(wait).fillField(locator.fieldUsuario, Usuario);
    I.retry(wait).fillField(locator.fieldPassword, Password);
  },

  ClickBotonLogin() {
    I.retry(wait).say("Dando click al botón Login");
    I.retry(wait).click(locator.clickLogin);
  },

  ValidacionFinalLogin() {
    I.retry(wait).say(
      "Validando que nos encontramos en la ventana de bienvenida"
    );
    I.retry(wait).seeInCurrentUrl("/Bienvenida");
  },

  async SiPopUp_Cerrar() {
    let flagShowRoom = await I.grabValueFrom(locator.fieldIdShowRoomVenta);
    if (flagShowRoom != "") {
      I.retry(wait).click(locator.clickCerrarPopup);
    }
  },

  OnVerMensaje(mensaje) {
    I.retry(wait).seeInPopup(mensaje.trim());
  },

  OnShowMessage() {
    I.retry(wait).seeElement(locator.labelMessage);
    I.retry(wait).see("Mensaje: Usuario o Contraseña Incorrectas");
  },

  OnShowMessagePopup() {
    let message =
      "- Debe ingresar el Usuario. - Debe ingresar la Clave Secreta.";

    I.retry(wait).seeInPopup(message.trim());
  },

  CerrarSesion() {
    I.retry(wait).seeInCurrentUrl("/Bienvenida");
    I.retry(wait).waitForElement(locator.clickLogout);
    I.retry(wait).click(locator.clickLogout);
  }
};
